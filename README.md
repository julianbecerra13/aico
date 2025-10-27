# 🇨🇴 AICO - Landing Page

Landing page oficial del **Partido Político AICO** (Alianza por la Integridad de Colombia), desarrollada con Next.js y diseñada para promover la transparencia y la participación ciudadana.

## 🌐 Demo en Vivo

**URL:** [https://aico-npzo.vercel.app/](https://aico-npzo.vercel.app/)

### 🔐 Credenciales de Acceso

Para acceder al área protegida del sistema:

- **Email:** `admin@gmail.com`
- **Contraseña:** `123456`

> ⚠️ **Nota:** Estas credenciales están hardcodeadas solo para fines de demostración. En producción deberían implementarse con autenticación real.

---

## 📋 Descripción del Proyecto

Esta landing page está diseñada para:

- ✅ Presentar el partido político AICO y sus valores
- ✅ Mostrar información interactiva sobre Colombia mediante un mapa por departamentos
- ✅ Proveer un formulario de contacto/información
- ✅ Sistema de login básico para acceso a áreas protegidas
- ✅ Diseño responsivo y moderno

---

## 🛠️ Tecnologías Utilizadas

### Core
- **[Next.js 16.0.0](https://nextjs.org/)** - Framework de React para producción
- **[React 19](https://react.dev/)** - Biblioteca de interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript

### Estilos y UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones y transiciones fluidas
- **[Lucide React](https://lucide.dev/)** - Iconos modernos y personalizables

### Mapas y Visualización
- **SVG Interactivo** - Mapa de Colombia por departamentos con eventos click/hover
- **GeoJSON** - Datos geográficos de Colombia para mapeo preciso

### Linting y Calidad de Código
- **[ESLint](https://eslint.org/)** - Análisis estático de código
- **TypeScript Strict Mode** - Verificación de tipos estricta

---

## 📁 Estructura del Proyecto

```
landing-page/
├── app/
│   ├── globals.css          # Estilos globales con Tailwind
│   ├── layout.tsx            # Layout principal de la app
│   └── page.tsx              # Página principal (Home)
├── components/
│   ├── CarouselSection.tsx   # Carrusel de imágenes/contenido
│   ├── ColombiaMap*.tsx      # Componentes de mapas interactivos
│   ├── Footer.tsx            # Footer de la página
│   ├── Header.tsx            # Header/Navegación
│   ├── InfoFormSection.tsx   # Formulario de información
│   ├── LoginPage.tsx         # Página de login
│   ├── MapSection.tsx        # Sección del mapa
│   ├── ProtectedRoute.tsx    # HOC para rutas protegidas
│   └── SideImages.tsx        # Imágenes laterales decorativas
├── lib/
│   ├── auth-context.tsx      # Contexto de autenticación
│   ├── images.ts             # Utilidades para imágenes
│   └── utils.ts              # Funciones utilitarias
├── public/
│   ├── aicologo.jpg          # Logo principal de AICO
│   ├── aicologosimple.jpg    # Logo simplificado
│   ├── colombia_departments.svg  # Mapa SVG de Colombia
│   ├── colombia-geo.json     # Datos GeoJSON de departamentos
│   └── assets/               # Recursos adicionales
└── package.json              # Dependencias del proyecto
```

---

## 🚀 Instalación y Uso

### Prerequisitos

- Node.js 18+ instalado
- npm, yarn, pnpm o bun

### 1. Clonar el repositorio

```bash
git clone https://github.com/julianbecerra13/aico.git
cd aico/landing-page
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 4. Construir para producción

```bash
npm run build
npm start
```

---

## 🎨 Características Principales

### 1. **Mapa Interactivo de Colombia**
- Mapa SVG con todos los departamentos de Colombia
- Hover effects que muestran el nombre del departamento
- Click events para mostrar información detallada
- Tooltips informativos con animaciones suaves

### 2. **Sistema de Autenticación**
- Login con validación de credenciales hardcodeadas
- Context API para manejo de estado de autenticación
- Rutas protegidas con componente `ProtectedRoute`
- Redirección automática según estado de autenticación

### 3. **Diseño Responsivo**
- Mobile-first approach
- Adaptable a tablets, desktop y móviles
- Imágenes optimizadas para diferentes tamaños de pantalla

### 4. **Animaciones y Transiciones**
- Animaciones suaves con Framer Motion
- Transiciones entre páginas
- Efectos hover y click personalizados
- Loading states y feedback visual

---

## 🎨 Paleta de Colores

El proyecto utiliza colores personalizados en Tailwind:

```css
--aico-green: #1b7a3e    /* Verde principal del partido */
--aico-yellow: #fef3c7   /* Amarillo/dorado para acentos */
--aico-black: #1a1a1a    /* Negro para texto */
```

---

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm start            # Inicia el servidor de producción

# Linting
npm run lint         # Ejecuta ESLint para verificar el código
```

---

## 🔒 Autenticación

El sistema actual usa autenticación básica con datos hardcodeados:

**Archivo:** `lib/auth-context.tsx`

```typescript
// Credenciales de demostración
Email: admin@gmail.com
Password: 123456
```

### Para implementar autenticación real:

1. Integrar con un backend (Node.js, Python, etc.)
2. Usar servicios como Firebase Auth, Auth0, o NextAuth.js
3. Implementar JWT tokens para sesiones
4. Agregar validación server-side

---

## 🌍 Deploy en Vercel

Este proyecto está desplegado en **Vercel**, la plataforma creada por los creadores de Next.js.

### Pasos para desplegar:

1. Crear cuenta en [Vercel](https://vercel.com)
2. Conectar el repositorio de GitHub
3. Vercel detecta automáticamente Next.js
4. Click en "Deploy"
5. ¡Listo! URL disponible al instante

**Características de Vercel:**
- ✅ Deploy automático en cada `git push`
- ✅ SSL/HTTPS gratuito
- ✅ CDN global para máxima velocidad
- ✅ Preview deployments para PRs

---

## 📝 Roadmap / Mejoras Futuras

- [ ] Backend real con base de datos
- [ ] Autenticación con JWT y bcrypt
- [ ] Panel de administración
- [ ] Blog/Noticias del partido
- [ ] Integración con redes sociales
- [ ] Sistema de donaciones
- [ ] Newsletter subscription
- [ ] Multi-idioma (Español/Inglés)
- [ ] Analytics y métricas
- [ ] SEO optimization avanzado

---

## 👥 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos y de demostración.

---

## 📧 Contacto

**Partido AICO** - Alianza por la Integridad de Colombia

- 🌐 Website: [https://aico-npzo.vercel.app/](https://aico-npzo.vercel.app/)
- 📧 Email: admin@gmail.com
- 🐙 GitHub: [@julianbecerra13](https://github.com/julianbecerra13)

---

## 🙏 Agradecimientos

- Next.js team por el excelente framework
- Vercel por el hosting gratuito
- Tailwind CSS por el sistema de diseño
- Framer Motion por las animaciones
- Comunidad open-source de React

---

**Hecho con ❤️ para Colombia** 🇨🇴

> 🤖 Desarrollado con asistencia de [Claude Code](https://claude.com/claude-code)
