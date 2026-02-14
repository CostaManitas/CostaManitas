# Costa Manitas - Product Requirements Document

## 📅 Actualizado: 14 de Febrero, 2026

## 🎯 Problema Original
Crear una landing page para un servicio de manitas (handyman) llamado "Costa Manitas" basado en el diseño del flyer adjunto. La página debe:
- Presentar todos los servicios incluidos en el flyer
- Estilo cómico/cartoon siguiendo el diseño del flyer
- Contacto exclusivo por WhatsApp con QR code visible
- Todo el contenido en español
- Solo servicio en Gijón
- **SEO optimizado** con HTML pre-renderizado para buscadores

## 👥 Usuario Objetivo
- **Usuario principal**: Propietarios de viviendas en Gijón que necesitan servicios de mantenimiento y reparación del hogar
- **Demografía**: Adultos de 25-65 años, propietarios o inquilinos
- **Comportamiento**: Buscan servicios locales confiables, prefieren contacto rápido por WhatsApp

## 🎨 Decisiones de Diseño del Usuario
1. **Colores**: Blanco y negro + amarillo (sin naranja)
2. **Estructura**: Hero + Sobre Costa + Servicios + Testimonios + Galería + Contacto + Footer
3. **QR Code**: Generado automáticamente para WhatsApp
4. **Botón WhatsApp**: Flotante (siempre visible)
5. **Galería**: De trabajos realizados con carrusel

## ✅ Implementado

### Migración a Next.js (14 Feb 2026)
- ✅ Migrado de Create React App a Next.js 14.2.18
- ✅ Static Site Generation (SSG) con `output: 'export'`
- ✅ HTML pre-renderizado con todo el contenido visible sin JavaScript
- ✅ Meta tags SEO completos (title, description, keywords)
- ✅ Open Graph tags para redes sociales
- ✅ Twitter Cards
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ robots.txt y sitemap.xml
- ✅ .htaccess para servidor Apache (DonDominio)

### Frontend
- **Página Home completa** (`/app/frontend/src/app/page.js`)
  - Header sticky con logo y botón de contacto WhatsApp
  - Hero section con slogan "¡Cuéntame qué necesitas!"
  - Sección "Sobre Costa" con descripción del servicio
  - Sección de Servicios con 10 servicios en cards con iconos
  - Sección de Testimonios con 3 opiniones de clientes
  - Galería de trabajos con carrusel interactivo
  - Sección de Contacto con información y QR code
  - Footer con copyright
  - Botón flotante de WhatsApp
  
- **10 Servicios implementados**:
  1. Retoques y reparación de madera existente
  2. Esmaltes, barniz y antióxido
  3. Montajes y perforaciones
  4. Electricidad básica
  5. Fontanería simple
  6. Puertas y ajustes
  7. Reparaciones domésticas puntuales
  8. Jardín – trabajos puntuales
  9. Revisión y pequeños mantenimientos
  10. Asesoramiento práctico en domicilio

- **Estilos**
  - Comic style con bordes negros gruesos (4px)
  - Sombras tipo cartoon (box-shadow offset)
  - Color amarillo (#FCD34D) para highlights
  - Responsive design
  - Iconos: lucide-react

- **Integración WhatsApp**
  - Enlace directo: https://wa.me/34687705405
  - QR Code: API externa (qrserver.com)
  - 4 puntos de contacto: Header, Hero, Contacto, Flotante

## 🔄 Estado Actual
- ✅ Frontend con Next.js SSG completado
- ✅ SEO completo implementado
- ✅ WhatsApp integration completa
- ✅ QR Code funcional
- ✅ Galería con carrusel interactivo
- ✅ Responsive design
- ✅ Build estático generado en `/app/frontend/out/`
- ⏳ Backend: No requerido (landing page estática)

## 📁 Archivos para Despliegue
El contenido de `/app/frontend/out/` debe subirse a DonDominio:
- `index.html` - Página principal pre-renderizada
- `404.html` - Página de error
- `_next/` - Assets de Next.js (CSS, JS)
- `.htaccess` - Configuración Apache
- `robots.txt` - Para buscadores (copiado en build)
- `sitemap.xml` - Mapa del sitio (copiado en build)

## 📋 Backlog Priorizado

### P0 (Crítico) - Completado ✅
- [✅] Migración a Next.js con SSG
- [✅] SEO completo (meta tags, structured data)
- [✅] Página home con todas las secciones
- [✅] Integración WhatsApp con QR
- [✅] Diseño comic style B&N + amarillo

### P1 (Alta prioridad) - Deployment
- [⏳] Subir `/app/frontend/out/` a DonDominio
- [ ] Configurar dominio costamanitas.com
- [ ] Activar SSL/HTTPS
- [ ] Actualizar canonical URL y sitemap

### P2 (Media prioridad) - Mejoras
- [ ] Iconos de servicios con estilo cómic más elaborado
- [ ] Reemplazar imágenes de galería con fotos reales
- [ ] Google Analytics o tracking
- [ ] Testimonios reales de clientes

### P3 (Baja prioridad) - Futuro
- [ ] Formulario de contacto (backup a WhatsApp)
- [ ] Blog o sección de consejos
- [ ] Multi-idioma

## 📝 Notas Técnicas
- **Stack**: Next.js 14.2.18, React 19, Tailwind CSS, lucide-react
- **SSG**: Usa `output: 'export'` para generar HTML estático
- **Hosting**: Preparado para Apache (DonDominio) con .htaccess
- **No requiere backend**
- **QR generado via API externa** (qrserver.com)

## 🚀 Instrucciones de Despliegue para DonDominio

1. Ejecutar `yarn build` en `/app/frontend`
2. Subir todo el contenido de `/app/frontend/out/` al directorio raíz del hosting
3. Asegurarse que `.htaccess` está incluido
4. Verificar que el dominio apunta correctamente
5. Activar SSL/HTTPS
6. Actualizar las URLs en `sitemap.xml` y canonical tags
