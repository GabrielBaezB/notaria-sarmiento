# Notaría Sarmiento Moreno - Valparaíso

Sitio web oficial de la Notaría Sarmiento Moreno, ubicada en Chacabuco 2845, Valparaíso. Servicios notariales profesionales frente al terminal de buses y a pasos del Congreso Nacional.

## 🏢 Sobre Nosotros

La Notaría Sarmiento Moreno ofrece servicios notariales completos en Valparaíso, incluyendo:

- Escrituras públicas
- Poderes simples
- Autorizaciones de viaje para menores
- Compraventa de inmuebles
- Contratos de arrendamiento
- Transferencias de vehículos
- Y más servicios notariales

## 🚀 Tecnologías

- **Framework**: Next.js 15.3.2
- **Lenguaje**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: React Icons
- **Deployment**: Static Export

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/notaria-sarmiento.git
cd notaria-sarmiento

# Instalar dependencias
npm install

# Variables de entorno
cp .env.example .env.local
# Editar .env.local con tus configuraciones

# Desarrollo
npm run dev

# Build para producción
npm run build

# Exportar estático
npm run export
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` con:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Email (FormSubmit)
NEXT_PUBLIC_EMAIL_ESCRITURAS=escrituras@notariasarmiento.cl
NEXT_PUBLIC_EMAIL_PRIVADOS=privados@notariasarmiento.cl

# Bing Webmaster Tools
BING_SITE_AUTH=455EAF44693F00D2C7F99F7D02FE7416
```

### Estructura del Proyecto

```
notaria-sarmiento/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.js          # Layout principal
│   ├── page.jsx           # Página principal
│   ├── globals.css        # Estilos globales
│   ├── equipo/            # Nómina y staff
│   └── servicios/         # Páginas de servicios
├── components/            # Componentes reutilizables
├── utils/                 # Utilidades y configuraciones
├── public/                # Archivos estáticos
└── styles/                # Estilos adicionales
```

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.js`:

```javascript
colors: {
  'notaria-azul': '#1B2A41',
  'notaria-blanco': '#FFFFFF',
  'notaria-gris': '#F5F5F5',
  'notaria-dorado': '#C5A880',
}
```

### Componentes

Los componentes principales incluyen:

- `Header` - Navegación principal
- `Hero` - Carrusel de imágenes
- `ServiciosSection` - Sección de servicios
- `Contacto` - Formulario de contacto
- `Ubicacion` - Mapa y ubicación
- `Footer` - Pie de página

## 📱 Características

### SEO Optimizado
- ✅ Metadata completa (OpenGraph, Twitter Cards)
- ✅ Structured Data (Schema.org)
- ✅ Sitemap XML automático
- ✅ Robots.txt configurado
- ✅ Canonical URLs
- ✅ Breadcrumbs

### Rendimiento
- ✅ Output estático
- ✅ Imágenes optimizadas
- ✅ Lazy loading
- ✅ Compresión habilitada
- ✅ Cache headers

### Accesibilidad
- ✅ ARIA labels
- ✅ Navegación por teclado
- ✅ Contraste de colores
- ✅ Screen reader friendly

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
npm run export
# Subir carpeta 'out' a Netlify
```

### Hosting Tradicional
```bash
npm run build
npm run export
# Subir carpeta 'out' al servidor
```

## 📊 Analytics

El sitio incluye configuración para:

- Google Analytics 4
- Google Tag Manager
- Event tracking
- Conversion tracking

## 🔍 SEO

### Keywords Principales
- "notaría valparaíso"
- "notaria chacabuco 2845"
- "poder simple valparaíso"
- "autorización menores valparaíso"
- "venta inmueble notaría"

### Meta Tags
- Títulos optimizados
- Descripciones únicas
- OpenGraph completo
- Twitter Cards

## 📞 Contacto

- **Dirección**: Chacabuco 2845, Valparaíso
- **Teléfono**: +56 322548174
- **Email**: contacto@notariasarmiento.cl
- **Horarios**: Lunes a Jueves 09:00 - 14:00 y 15:00 - 17:30, Viernes 09:00 - 14:00 y 15:00 - 16:30

## 📄 Licencia

Este proyecto es privado y pertenece a la Notaría Sarmiento Moreno.

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📝 Changelog

### v2.0.0 (2026)
- ✅ Sitio web inicial
- ✅ SEO optimizado
- ✅ Páginas de servicios
- ✅ Formulario de contacto
- ✅ Responsive design

---

**Desarrollado con ❤️ para la Notaría Sarmiento Moreno** 