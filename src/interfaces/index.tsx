export interface IService {
  title: string;
  description: string;
  icon?: string;
}

export interface ICar {
  slug: string;
  name: string;
  model: string;
  year: number;
  seats: number;
  motor: string;
  fuel: string;
  transmission: string;
  availableToRent: boolean;
  availableToSell: boolean;
  priceToRent: string;
  priceToSell: string;
  securityDeposit: string;
  image: string;
}

export interface ICarCard {
  car: ICar;
  type: string;
}

export interface IReservationInfo {
  name: string;
  email: string;
  phone: string;
  identificationDoc: {
    filePath: string;
    fileType: string;
    fileName: string;
  };
  driverLicence: {
    filePath: string;
    fileType: string;
    fileName: string;
  };
  vehicle: ICar[];
  price: number;
  days: number;
}

export interface IFieldsErrors {
  name: string;
  email: string;
  phone: string;
  identificationDoc: string;
  driverLicence: string;
  vehicle: string;
  price: string;
  days: string;
}

export interface ISelectedVehicle {
  vehicle: ICar;
  closeCardClick: (value: string) => void;
}

export interface IStep {
  reservationValues: IReservationInfo;
  fieldsErrors: IFieldsErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IReviewStep {
  reservationDetails: IReservationInfo;
}

export interface ICarGallery {
  showPagination?: boolean;
}
