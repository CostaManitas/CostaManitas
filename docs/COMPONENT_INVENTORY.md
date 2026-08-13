# Component Inventory — Costa Manitas (estratto dal codice)

Questo inventario è ricavato esclusivamente dal codice sorgente presente in `frontend/`. Indica dove i componenti sono implementati e dove vengono usati nella homepage (`src/app/page.js`).

---

| Pattern / Componente | File (path) | Componente separato? | Riutilizzabile? | Dove usato | Note responsive |
|---|---:|:---:|:---:|---|---|
| Header (component) | `src/components/Header.jsx` | Sì (separato) | Sì | Homepage (header) | Sticky `sticky top-0`, responsive title sizing via `md:` |
| Footer (component) | `src/components/Footer.jsx` | Sì (separato) | Sì | Homepage (footer) | semplice, responsivo |
| Hero (pattern) | `src/app/page.js` (hero section) | No (markup inline) | N/A — pattern ripetibile | Homepage | Grid responsive (`md:grid-cols-2`) |
| Button (component) | `src/components/ui/button.jsx` | Sì | Sì | Header CTA, Hero CTAs, Contact buttons, Carousel controls | Varianti `size` e `variant`; `icon` size; supports `asChild` |
| Card (component) | `src/components/ui/card.jsx` | Sì | Sì | Services, Testimonials, Contact boxes, ecc. | Usato dentro grid responsive; padding e layout interni fissi |
| Carousel (component) | `src/components/ui/carousel.jsx` | Sì | Sì | (carousel generic) used in components and gallery patterns | Implementa `embla-carousel-react`; supports keyboard, swipe; prev/next controls |
| Icon set | `lucide-react` (package) | N/A (library) | Sì (library) | Icons imported in `src/app/page.js` and UI components | Dimensioni via classes (h-6,w-6,h-12,w-12); strokes adjusted via `stroke-[2.5px]` |
| Services list (data) | `src/app/page.js` (homepage) | N/A (data) | N/A | `src/app/page.js` maps `services` into Cards | Data-driven rendering |
| Testimonials list (data) | `src/app/page.js` (homepage) | N/A | N/A | `src/app/page.js` maps `reviews` into Cards | Shows star icons |
| Gallery (markup + simple carousel) | `src/app/page.js` (gallery featured + thumbnails) | Mixed: featured slider implemented inline + Carousel component exists separately | Partially (thumbnails inline) | Homepage gallery | Thumbnail grid responsive (3→6 cols), featured image has prev/next buttons inline |
| Contact block | `src/app/page.js` | No (markup inline using `Button`) | N/A | Homepage (contact section) | two-column `md:grid-cols-2` |
| CardHeader / CardTitle / CardDescription (sub-components) | `src/components/ui/card.jsx` | Sì (exported) | Sì | Used in many Cards (services, testimonials) | layout classes embedded in component |
| Utility `cn()` | `src/lib/utils.js` | Sì (utility) | Sì | Used across components to merge classNames | N/A |

---

## Component file list (principali)
- `src/components/ui/button.jsx` — Generic Button component
- `src/components/ui/card.jsx` — Card primitives (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- `src/components/ui/carousel.jsx` — Carousel wrapper using `embla-carousel-react`
- `src/components/ui/*` — molti componenti UI opzionali presenti (accordion, dialog, toast, etc.). Questi file esistono e possono essere riutilizzati ma non tutti sono referenziati direttamente nella homepage.

## Dove non esiste un componente separato (implementazione inline)
- `Hero` markup è inline in `src/app/page.js`.
- `Gallery featured` slider è implementato inline (stateful with `currentImageIndex`) nel `Home.jsx` senza usare il `Carousel` component.

## Dipendenze rilevanti per i componenti
- `lucide-react` — icone (usate in molte parti del sito)
- `embla-carousel-react` — carousel implementation
- `class-variance-authority` (cva) — usato in `button.jsx` per variant management
- `clsx`, `tailwind-merge` — usate nella utility `cn`
- Tailwind CSS — sistema di utility classes su cui il design si basa

## Note su riutilizzo e varianti
- Il `Button` component ha una API con `variant` e `size` che permette di creare varianti (default, destructive, outline, secondary, ghost, link; sizes: default, sm, lg, icon).
- Molti pattern nella homepage sono implementati usando componenti riutilizzabili (`Card`, `Button`) estesi con classi inline per il look "comic" (rotazioni, cornici spesse, ombre personalizzate). Quindi il riutilizzo richiede che le classi addizionali vengano passate come `className` quando si usa il componente.

## Observed inconsistencies (documentazione only)
- Esistono componenti UI in `src/components/ui/` che non sono tutti usati direttamente nella homepage (es. accordion, calendar, drawer, ecc.). Questi sembrano essere una libreria di componenti generica (probabilmente dallo starter) e non necessariamente usati nel sito attuale.
- Header/Footer/Hero/Gallery sono markup inline in `Home.jsx` invece di componenti separati: questo riduce riusabilità diretta senza estrazione.

---

### Conclusione rapida
Il progetto ha una base di componenti UI riutilizzabili (`Button`, `Card`, `Carousel`, util) e fa un uso consistente di Tailwind utility classes per layout e stile. Tuttavia, alcune parti critiche della homepage (Header, Hero, Footer, gallery featured) sono implementate inline all'interno di `Home.jsx` e quindi non esposte come componenti separati — questo è un dato di fatto del codice attuale (non è stato modificato).

Fine documento — `COMPONENT_INVENTORY.md` creato da analisi del codice in `frontend/`.
