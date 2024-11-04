export const SERVICES = [
  {
    title: "Aluguer e Venda de Veículos",
    description:
      "Seja por alguns dias ou para sempre, a V&H Investimentos oferece a solução perfeita para você. Com uma ampla frota de veículos de diversos modelos e categorias, garantimos que você encontrará o carro ideal para qualquer ocasião – sempre com conforto e estilo.",
    icon: "/assets/servicos/carro.svg",
  },
  {
    title: "Venda e Encomenda de peças",
    description:
      "Trabalhamos com peças automotivas originais importadas dos Estados Unidos, garantindo máxima qualidade e durabilidade para o seu veículo. Encontre ou encomende peças para todas as marcas e modelos, com garantia de procedência.",
    icon: "/assets/servicos/carro.svg",
  },
  {
    title: "Aluguer Personalizado",
    description:
      "Poupe tempo e preocupações. Vamos onde estiver, entregamos e recolhemos o veículo no local da sua preferência, de forma rápida e segura. Seja para aluguer ou compra, garantimos uma experiência sem complicações.",
    icon: "/assets/servicos/carro.svg",
  },
];

export const FAQs = [
  {
    title: "O que é preciso para alugar um veículo?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    title: "Preciso do meu próprio seguro?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    title: "Outras pessoas podem dirigir o veículo que eu aluguei?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    title: "Como funciona a política de cancelamento?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    title: "O que acontece se eu tiver um acidente?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
];

export const scrollToView = (item: string) => {
  const elementToScrollTo = document.getElementById(item);
  if (elementToScrollTo) {
    elementToScrollTo.scrollIntoView({ behavior: "smooth" });
  }
};

export const PRE_HEADER_HEIGHT = "50px";
export const HEADER_HEIGHT = "90px";
