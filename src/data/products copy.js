export const products = {
  data: [
    {
      id: 1,
      title: "Explorando la Sanación Emocional con Yoga y Caballos",
      description:
        "¿Es tiempo de sanar? ¿De dedicar tiempo a conectar con la naturaleza?",
      price: 4800,
      pictureUrl: "FotoEvento1.webp",

      discounts: [
        { type: "upTo", percentage: 20, min: 2, info: "" },
        { type: "date", percentage: 10, min: 2, info: "" },
      ],
      stock: 8,
      brand: "Quiyoca,",
      category: "Talleres, Yoga, Caballos, Canelones",
      images: [
        "FotoEvento2.webp",
        "FotoEvento3.webp",
        "FotoEvento4.webp",
        "FotoEvento5.webp",
      ],
      video:
        "https://betty.devuy.com/assets/videos/1-Conocimiento-del-lugar.mp4",
    },
    {
      id: 2,
      title: "Clases de Yoga Suave en Arévalo (Mensual)",
      description:
        "Yoga Suave para jóvenes y adultos/as, son 2 clases semanales",
      price: 500,
      pictureUrl: "julia_arevalo.webp",

      discounts: [],
      stock: 16,
      brand: "IMM - Centro Multicultural Julia Arévalos",
      category: "Cursos, Yoga, Montevideo",
      images: [
        "julia_arevalo2.jpg",
        "julia_arevalo3.jpg",
        "julia_arevalo4.jpg",
      ],
      video: "",
    },
  ],
  total: 25,
  skip: 0,
  limit: 5,
};
