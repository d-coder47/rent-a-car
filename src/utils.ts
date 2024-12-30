import { IReservationInfo } from "./interfaces";
import dayjs from "dayjs";
import { sha512 } from "js-sha512";

interface IFormData {
  transactionCode: string;
  posID: string;
  merchantRef: string;
  merchantSession: string;
  amount: string;
  currency: string;
  is3DSec: string;
  urlMerchantResponse: string;
  languageMessages: string;
  timeStamp: string;
  fingerprintversion: string;
  entityCode: string;
  referenceNumber: string;
  fingerprint?: string;
  [key: string]: string | number | undefined;
}

export const formatPrice = (amount: number, currency: string): string => {
  if (currency === "EUR") {
    return "€" + amount;
  }

  if (currency === "CVE") {
    return amount + " " + currency;
  }

  return amount.toString();
};

function ToBase64(u8: number[]) {
  return btoa(String.fromCharCode.apply(null, u8));
}

function GenerateSHA512StringToBase64(input: string) {
  return ToBase64(sha512.digest(input));
}

function GerarFingerPrintEnvio(
  posAutCode: string,
  timestamp: string,
  amount: string,
  merchantRef: string,
  merchantSession: string,
  posID: string,
  currency: string,
  transactionCode: string,
  entityCode: string,
  referenceNumber: string
) {
  var toHash =
    GenerateSHA512StringToBase64(posAutCode) +
    timestamp +
    Number(parseFloat(amount) * 1000) +
    merchantRef.trim() +
    merchantSession.trim() +
    posID.trim() +
    currency.trim() +
    transactionCode.trim();

  if (entityCode) toHash += Number(entityCode.trim());

  if (referenceNumber) toHash += Number(referenceNumber.trim());

  return GenerateSHA512StringToBase64(toHash);
}

export const paymentRequest = (reservationInfo: IReservationInfo) => {
  const posID = "90000389";
  const posAutCode = "kbTo2SsfsL9vIceR";
  const url = "https://mc.vinti4net.cv/3ds_middleware_php/public/3ds_init.php";

  // OBTER DADOS DE PAGAMENTO
  var amount = "1000";
  var merchantRef = "R" + dayjs().format("YYYYMMDDHHmmss");
  var merchantSession = "S" + dayjs().format("YYYYMMDDHHmmss");
  var dateTime = dayjs().format("YYYY-MM-DD HH:mm:ss");

  // PREPARAR DADOS PARA EFETUAR REQUISICAO/REQUEST
  var transactionCode = "1";

  var responseUrl = "http://localhost:5173/reservation/";

  var formData: IFormData = {
    transactionCode: transactionCode,
    posID: posID,
    merchantRef: merchantRef,
    merchantSession: merchantSession,
    amount: amount,
    currency: "132",
    is3DSec: "1",
    urlMerchantResponse: responseUrl,
    languageMessages: "pt",
    timeStamp: dateTime,
    fingerprintversion: "1",
    entityCode: "",
    referenceNumber: "",
  };

  formData.fingerprint = GerarFingerPrintEnvio(
    posAutCode,
    formData.timeStamp,
    formData.amount,
    formData.merchantRef,
    formData.merchantSession,
    formData.posID,
    formData.currency,
    formData.transactionCode,
    formData.entityCode,
    formData.referenceNumber
  );

  const postURL = `${url}${encodeURIComponent(formData.fingerprint)}&TimeStamp=${encodeURIComponent(formData.timeStamp)}&FingerPrintVersion=${encodeURIComponent(formData.fingerprintversion)}`;

  var formHtml =
    "<html><head><title>Pagamento vinti4</title></head><body onload='autoPost()'><div><h5>Processando o pagamento...</h5>";

  // CONSTRUIR UM FORM PARA FAZER POST AUTOMATICO

  // PODES UTILIZAR UM TEMPLATE ENGINE CONFORME LHE CONVIER
  formHtml += "<form action='" + postURL + "' method='post'>";

  Object.keys(formData).forEach(function (key) {
    formHtml +=
      "<input type='hidden' name='" + key + "' value='" + formData[key] + "'>";
  });

  formHtml += "</form>";

  formHtml +=
    "<script>function autoPost(){document.forms[0].submit();}</script></body></html>";

  return formHtml;
};
