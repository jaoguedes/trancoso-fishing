const operations = {
  oceanica: {
    title: "Pesca Oceânica",
    description:
      "Pesca de alto-mar em embarcação exclusiva.",
    info: [
      ["Duração", "Dia inteiro — 8 a 12 horas"],
      ["Saída", "Trancoso, Arraial d'Ajuda ou Porto Seguro"],
      ["Capacidade", "Até 4 pessoas"],
      ["Modalidades", "Corrico, Jig e Arremesso"],
      ["Incluso", "Comandante e marinheiro experientes"],
      ["Material", "Todo material de pesca"],
      ["Alimentação", "Cardápio de bebida e comida personalizado"],
      ["Combustível", "Incluso"]
    ]
  },

  costeira: {
    title: "Pesca Costeira",
    description:
      "Pesca de fundo perto da costa de Trancoso.",
    info: [
      ["Duração", "5 a 8 horas"],
      ["Saída", "Trancoso, Arraial d'Ajuda ou Porto Seguro"],
      ["Capacidade", "Até 5 pessoas"],
      ["Modalidades", "Corrico, Jig e isca natural — foco em peixe de fundo"],
      ["Incluso", "Comandante e marinheiro experientes"],
      ["Material", "Todo material de pesca"],
      ["Alimentação", "Alimentação e bebida a bordo"],
      ["Combustível", "Incluso"]
    ]
  },

  baleias: {
    title: "Observação de Baleias",
    description:
      "Encontro com as baleias-jubarte em Trancoso.",
    info: [
      ["Duração", "3 a 4 horas"],
      ["Temporada", "Julho a setembro"],
      ["Saída", "Trancoso, Arraial d'Ajuda ou Porto Seguro"],
      ["Capacidade", "Até 5 pessoas"],
      ["Incluso", "Comandante e marinheiro experientes"],
      ["Alimentação", "Bebida e comida a bordo"],
      ["Passeio", "Observação — sem material de pesca"]
    ]
  }
};

// Modal das operações
const modal = document.getElementById("operationModal");
const title = document.getElementById("modalTitle");
const description = document.getElementById("modalDescription");
const info = document.getElementById("modalInfo");
const closeButton = document.getElementById("closeModal");

function openOperation(key) {
  const operation = operations[key];
  if (!operation) return;

  title.textContent = operation.title;
  description.textContent = operation.description;

  info.innerHTML = operation.info
    .map(([label, value]) => `<div><strong>${label}:</strong> ${value}</div>`)
    .join("");

  modal.showModal();
}

document.querySelectorAll("[data-operation]").forEach((button) => {
  button.addEventListener("click", () => openOperation(button.dataset.operation));
});

closeButton.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const outside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (outside) modal.close();
});

// Menu mobile
const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

menuButton.addEventListener("click", () => {
  const opened = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Galeria / lightbox
const galleryModal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryModalImage");
const galleryClose = document.getElementById("galleryClose");

document.querySelectorAll("[data-gallery]").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");

    galleryImage.src = button.dataset.gallery;
    galleryImage.alt = image?.alt || "Foto da Trancoso Fishing";
    galleryModal.showModal();
  });
});

galleryClose.addEventListener("click", () => galleryModal.close());

galleryModal.addEventListener("click", (event) => {
  const rect = galleryModal.getBoundingClientRect();
  const outside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (outside) galleryModal.close();
});

// Ano automático do rodapé
document.getElementById("year").textContent = new Date().getFullYear();

