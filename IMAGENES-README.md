# 📸 Guía para Agregar Imágenes Reales de AICO

## 🎯 Imágenes Necesarias

### 1. **Logo Oficial de AICO** (Rectangular)

**Dónde descargarlo:**
- **SeekLogo**: https://seeklogo.com/vector-logo/357990/aico-autoridades-indigenas-de-colombia
  - Formatos disponibles: PNG, SVG, AI, EPS, CDR
  - Recomendado: Descargar en **PNG de alta resolución**

- **Iconape**: https://iconape.com/aico-autoridades-indigenas-de-colombia-logo-logo-icon-svg-png.html

**Dónde colocarlo:**
```
/public/aico-logo.png
```

**Luego actualiza en:**
```typescript
// archivo: /lib/images.ts
logo: {
  url: "/aico-logo.png",  // ← Cambiar aquí
  alt: "Logo AICO - Autoridades Indígenas de Colombia",
}
```

---

### 2. **Imágenes Laterales** (4 imágenes cuadradas)

Estas son las imágenes que rotan cada 5 segundos en los laterales de la página.

**Sugerencias de contenido:**
- Comunidades indígenas AICO
- Paisajes de territorios indígenas
- Eventos del partido
- Símbolos culturales

**Dónde buscarlas:**
- Facebook oficial: https://www.facebook.com/PartidoAICO/
- Twitter: https://twitter.com/partidoaico
- Instagram: @movimiento_aico_oficial

**Dónde colocarlas:**
```
/public/images/side-1.jpg
/public/images/side-2.jpg
/public/images/side-3.jpg
/public/images/side-4.jpg
```

**Luego actualiza en:**
```typescript
// archivo: /lib/images.ts
sideImages: [
  {
    id: 1,
    url: "/images/side-1.jpg",  // ← Cambiar aquí
    alt: "Comunidad indígena AICO 1",
  },
  // ... continuar con las demás
]
```

---

### 3. **Fotos de Representantes** (Carrusel)

Fotos de los líderes y representantes de AICO para el carrusel.

**Representantes sugeridos:**
1. **Polivio Leandro Rosales Cadena** - Senador actual
2. **Lorenzo Muelas** - Constituyente 1991
3. **Floro Tunubalá** - Primer gobernador indígena
4. **Jesús Cuasapuds** - Líder actual
5. **Martín Tengana** - Ex senador
6. **Efrén Tarapués** - Ex senador

**Dónde buscarlas:**
- Google Images: "Nombre + AICO"
- Congreso Visible: https://congresovisible.uniandes.edu.co/
- Redes sociales oficiales de AICO

**Dónde colocarlas:**
```
/public/images/polivio-rosales.jpg
/public/images/lorenzo-muelas.jpg
/public/images/floro-tunubala.jpg
/public/images/jesus-cuasapuds.jpg
/public/images/martin-tengana.jpg
/public/images/efren-tarapues.jpg
```

**Luego actualiza en:**
```typescript
// archivo: /lib/images.ts
representatives: [
  {
    id: 1,
    name: "Polivio Rosales",
    position: "Senador",
    image: "/images/polivio-rosales.jpg",  // ← Cambiar aquí
  },
  // ... continuar con los demás
]
```

---

## 🚀 Pasos para Agregar las Imágenes

### Paso 1: Descargar las imágenes
1. Ve a los links mencionados arriba
2. Descarga las imágenes en buena calidad
3. Renómbralas según los nombres indicados

### Paso 2: Colocar las imágenes en la carpeta `/public`
```bash
landing-page/
├── public/
│   ├── aico-logo.png              ← Logo oficial
│   └── images/
│       ├── side-1.jpg             ← Imágenes laterales
│       ├── side-2.jpg
│       ├── side-3.jpg
│       ├── side-4.jpg
│       ├── polivio-rosales.jpg    ← Representantes
│       ├── lorenzo-muelas.jpg
│       ├── floro-tunubala.jpg
│       ├── jesus-cuasapuds.jpg
│       ├── martin-tengana.jpg
│       └── efren-tarapues.jpg
```

### Paso 3: Actualizar el archivo `/lib/images.ts`
1. Abre el archivo `/lib/images.ts`
2. Cambia las rutas de `temporaryUrls` a las rutas locales
3. Actualiza los nombres y posiciones según corresponda

### Paso 4: Verificar
1. El servidor se recargará automáticamente
2. Ve a http://localhost:3000
3. Verifica que las imágenes se vean correctamente

---

## 📋 Checklist

- [ ] Logo oficial de AICO descargado y colocado en `/public/aico-logo.png`
- [ ] 4 imágenes laterales colocadas en `/public/images/side-*.jpg`
- [ ] 6 fotos de representantes colocadas en `/public/images/*.jpg`
- [ ] Archivo `/lib/images.ts` actualizado con las rutas locales
- [ ] Verificado que todas las imágenes se ven en la página

---

## ⚠️ Recomendaciones

- **Formato**: JPG para fotos, PNG para logo
- **Tamaño del logo**: Mínimo 400x200px
- **Imágenes laterales**: 800x800px (cuadradas)
- **Fotos de representantes**: Mínimo 400x400px (cuadradas)
- **Peso**: Máximo 500KB por imagen (comprimir si es necesario)

---

## 🔗 Enlaces Útiles

- SeekLogo AICO: https://seeklogo.com/vector-logo/357990/aico-autoridades-indigenas-de-colombia
- Facebook Partido AICO: https://www.facebook.com/PartidoAICO/
- Twitter AICO: https://twitter.com/partidoaico
- Instagram: @movimiento_aico_oficial
- Congreso Visible: https://congresovisible.uniandes.edu.co/partidos/perfil/aico--autoridades-indigenas-de-colombia/9/

---

## 🆘 ¿Necesitas Ayuda?

Si no puedes encontrar las imágenes, puedes:
1. Contactar directamente a AICO: partidoaico@gmail.com
2. Visitar sus redes sociales oficiales
3. Usar imágenes temporales hasta conseguir las oficiales
