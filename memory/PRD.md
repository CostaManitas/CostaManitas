# Costa Manitas - Product Requirements Document

## 📅 Creado: 13 de Febrero, 2026

## 🎯 Problema Original
Crear una landing page para un servicio de manitas (handyman) llamado "Costa Manitas" basado en el diseño del flyer adjunto. La página debe:
- Presentar todos los servicios incluidos en el flyer
- Estilo cómico/cartoon siguiendo el diseño del flyer
- Contacto exclusivo por WhatsApp con QR code visible
- Todo el contenido en español
- Solo servicio en Gijón

## 👥 Usuario Objetivo
- **Usuario principal**: Propietarios de viviendas en Gijón que necesitan servicios de mantenimiento y reparación del hogar
- **Demografía**: Adultos de 25-65 años, propietarios o inquilinos
- **Comportamiento**: Buscan servicios locales confiables, prefieren contacto rápido por WhatsApp

## 🎨 Decisiones de Diseño del Usuario
1. **Colores**: Blanco y negro + amarillo (sin naranja)
2. **Estructura**: Hero + Sobre Costa + Servicios + Testimonios + Galería + Contacto + Footer
3. **QR Code**: Generado automáticamente para WhatsApp
4. **Botón WhatsApp**: Flotante (siempre visible)
5. **Galería**: De trabajos realizados

## ✅ Implementado (13 Feb 2026)

### Frontend
- **Página Home completa** (`/app/frontend/src/pages/Home.jsx`)
  - Header sticky con logo agrandado (20x20, circular con borde) y botón de contacto
  - Hero section con slogan "¡Cuéntame qué necesitas!"
  - Sección "Sobre Costa" con descripción del servicio
  - Sección de Servicios con 10 servicios en cards con iconos destacados en estilo comic
  - Sección de Testimonios con 3 opiniones de clientes
  - Galería de trabajos con carousel de 6 imágenes
  - Sección de Contacto con información y QR code
  - Footer con copyright
  - Botón flotante de WhatsApp
  
- **Servicios implementados** (Actualizado - 10 servicios):
  1. Retoques y reparación de madera existente - Puertas · muebles · pequeños elementos
  2. Esmaltes, barniz y antióxido - Para madera y metal
  3. Montajes y perforaciones - Baldas · estantes · pasamanos · barras de seguridad · televisores
  4. Electricidad básica - Sustitución de enchufes, lámparas, interruptores, canaletas
  5. Fontanería simple - Grifos · sifones · silicona
  6. Puertas y ajustes - Bisagras · cierres · alineación
  7. Reparaciones domésticas puntuales - Pequeños arreglos en casa
  8. Jardín – trabajos puntuales - Corte, limpieza y mantenimiento básico
  9. Revisión y pequeños mantenimientos - Antes de que el problema crezca
  10. Asesoramiento práctico en domicilio - Qué reparar, qué no, y cómo hacerlo bien

- **Datos Mock** (`/app/frontend/src/data/mock.js`)
  - Servicios con iconos de lucide-react
  - Testimonios de clientes
  - Galería de imágenes de Unsplash
  - Información de contacto (WhatsApp: 687 70 54 05)
  - QR Code generado automáticamente

- **Estilos**
  - Comic style con bordes negros gruesos (4px)
  - Sombras tipo cartoon (box-shadow offset)
  - Color amarillo (#FCD34D) para highlights
  - Componentes de shadcn/ui (Button, Card)
  - Transiciones suaves en elementos interactivos
  - Responsive design

- **Integración WhatsApp**
  - Enlace directo: https://wa.me/34687705405
  - QR Code: https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/34687705405
  - Botón flotante fixed bottom-right
  - Múltiples CTAs en hero, header y sección de contacto

## 🔄 Estado Actual
- ✅ Frontend con mock data completado
- ✅ Diseño comic style implementado
- ✅ WhatsApp integration completa
- ✅ QR Code funcional
- ✅ Galería de trabajos con carousel
- ✅ Responsive design
- ⏳ Backend: No requerido (landing page estática)

## 📋 Backlog Priorizado

### P0 (Crítico) - Completado ✅
- [✅] Página home con todas las secciones
- [✅] Integración WhatsApp con QR
- [✅] Diseño comic style B&N + amarillo
- [✅] Galería de trabajos
- [✅] 10 servicios actualizados
- [✅] Exportado a GitHub: https://github.com/CostaManitas/CostaManitas

### P1 (Alta prioridad) - Deployment
- [⏳] Subir a DonDominio.com
- [ ] Activar SSL/HTTPS
- [ ] Configurar dominio personalizado
- [ ] Optimización SEO (meta tags, structured data)
- [ ] Formulario de contacto opcional (backup a WhatsApp)
- [ ] Google Analytics o tracking
- [ ] Galería con imágenes reales de trabajos

### P2 (Media prioridad) - Mejoras
- [ ] Animaciones avanzadas (parallax, scroll effects)
- [ ] Blog o sección de consejos de mantenimiento
- [ ] Calculadora de presupuestos
- [ ] Sistema de reservas/calendario
- [ ] Multi-idioma (asturiano/inglés)

## 🎯 Próximos Pasos
1. Usuario debe probar la landing page
2. Revisar diseño y ajustar si es necesario
3. Reemplazar imágenes mock de galería con fotos reales
4. Añadir meta tags para SEO
5. Considerar añadir testimonios reales de clientes

## 📝 Notas Técnicas
- Stack: React + Shadcn UI
- No requiere backend (landing page estática)
- Imágenes de galería desde Unsplash (temporales)
- QR generado via API externa (qrserver.com)
- Iconos: lucide-react
- Logo y flyer: Assets del usuario
