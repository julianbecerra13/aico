// Configuración de imágenes para AICO
// Actualiza estas URLs con las imágenes reales descargadas

export const aicoImages = {
  // Logo oficial de AICO (rectangular) - Para Header y Login
  logo: {
    url: "/aicologo.jpg", // Logo real de AICO
    alt: "Logo AICO - Autoridades Indígenas de Colombia",
  },

  // Logo simple de AICO - Para Footer
  logoSimple: {
    url: "/aicologosimple.jpg",
    alt: "Logo AICO Simple",
  },

  // Imágenes laterales (cambian cada 5 segundos)
  sideImages: [
    {
      id: 1,
      url: "/images/side-1.jpg", // Placeholder - reemplazar con imagen real
      alt: "Comunidad indígena AICO 1",
    },
    {
      id: 2,
      url: "/images/side-2.jpg",
      alt: "Comunidad indígena AICO 2",
    },
    {
      id: 3,
      url: "/images/side-3.jpg",
      alt: "Comunidad indígena AICO 3",
    },
    {
      id: 4,
      url: "/images/side-4.jpg",
      alt: "Comunidad indígena AICO 4",
    },
  ],

  // Representantes para el carrusel
  representatives: [
    {
      id: 1,
      name: "Polivio Rosales",
      position: "Senador",
      image: "/images/polivio-rosales.jpg", // Placeholder
    },
    {
      id: 2,
      name: "Lorenzo Muelas",
      position: "Constituyente 1991",
      image: "/images/lorenzo-muelas.jpg", // Placeholder
    },
    {
      id: 3,
      name: "Floro Tunubalá",
      position: "Gobernador del Cauca",
      image: "/images/floro-tunubala.jpg", // Placeholder
    },
    {
      id: 4,
      name: "Martín Tengana",
      position: "Ex Senador",
      image: "/images/martin-tengana.jpg", // Placeholder
    },
    {
      id: 5,
      name: "Jesús Cuasapuds",
      position: "Líder Actual",
      image: "/images/jesus-cuasapuds.jpg", // Placeholder
    },
    {
      id: 6,
      name: "Efrén Tarapués",
      position: "Ex Senador",
      image: "/images/efren-tarapues.jpg", // Placeholder
    },
  ],
};

// URLs públicas que puedes usar temporalmente
// Estas son URLs de ejemplo - deberás reemplazarlas con imágenes reales de AICO
export const temporaryUrls = {
  logo: "https://via.placeholder.com/400x200/1b7a3e/ffffff?text=AICO+Logo",
  sideImages: [
    "https://via.placeholder.com/400x400/1b7a3e", // Verde AICO
    "https://via.placeholder.com/400x400/c8102e", // Rojo AICO
    "https://via.placeholder.com/400x400/1a1a1a", // Negro AICO
    "https://via.placeholder.com/400x400/1b7a3e", // Verde AICO
  ],
  representatives: [
    "https://via.placeholder.com/300x300/1b7a3e", // Verde
    "https://via.placeholder.com/300x300/c8102e", // Rojo
    "https://via.placeholder.com/300x300/1a1a1a", // Negro
    "https://via.placeholder.com/300x300/1b7a3e", // Verde
    "https://via.placeholder.com/300x300/c8102e", // Rojo
    "https://via.placeholder.com/300x300/1a1a1a", // Negro
  ],
};
