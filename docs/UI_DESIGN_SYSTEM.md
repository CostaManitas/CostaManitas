# UI Design System — Costa Manitas (estratto dal codice)

Nota: questo documento è una fotografia del design system ricavata esclusivamente dal codice presente in `frontend/` (lettura sola). Non vengono aggiunti valori non presenti nel codice: dove un valore non è determinabile dal codice analizzato è esplicitato.

---

## 1. Identità visiva — colori
Tutti i riferimenti qui sotto sono presi dalle classi Tailwind e dagli stili inline trovati nel codice.

- Colori principali (classi Tailwind usate nel markup):
  - `bg-yellow-400` — usato come colore accent/brand in elementi promozionali (badge "Solo in Gijón", sottolinea dei titoli, barre dei card, footer banner box nel contact). (Valore CSS/HEX: non determinato dal codice analizzato; è il valore definito da Tailwind per `yellow-400`.)
  - `bg-black` / `text-white` — usati per CTA principali, footer, bottoni primari invertiti.
  - `bg-white` — sfondo principale delle sezioni e card.
  - `bg-gray-50`, `bg-gray-100`, `text-gray-700`, `text-gray-400` — usati come sfondi secondari e testo descrittivo.

- Colori bordo:
  - `border-black` (uso massiccio): bordi spessi e grafici (spesso con `border-4` o `border-2`).

- Colori dei testi:
  - `text-black` e `text-gray-700` per testi principali e descrizioni.
  - `text-white` su sfondi scuri (es. CTA nera).

- Accents / Ombrature cromatiche:
  - Alcune ombre usano valori RGBA inline: `rgba(0,0,0,1)` (ombra nera solida) e `rgba(250,204,21,1)` (ombra gialla usata in alcune card e CTA). Questi valori compaiono letteralmente negli stili (vedi `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`, `shadow-[6px_6px_0px_0px_rgba(250,204,21,1)]`).

- Gradienti / pattern grafici:
  - Uso di `bg-gradient-to-br from-gray-50 to-white` in più sezioni (hero, gallery sections).
  - Alcuni pattern testurizzati implementati inline su blocchi con `backgroundImage` (radial gradients e repeating-linear-gradient per le card dei servizi).

Se è necessario ottenere i valori HEX esatti delle utilità Tailwind (`yellow-400`, `gray-50`, ecc.) questi sono determinati dalla configurazione Tailwind predefinita o dalla versione e non sono esplicitati come HEX nel codice esaminato: "Non determinato dal codice analizzato."

---

## 2. Tipografia
Font e scale rilevate dal codice:

- Font family (global):
  - dichiarata in `src/app/globals.css`: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.
  - Valore esatto: presente nel codice (vedi `globals.css`).

- Peso e pesi ricorrenti:
  - `font-black` — titolo / H1 / headings (molto usato)
  - `font-bold` — testi descrittivi, CTA, etichette
  - `font-medium` / `font-semibold` compaiono nei componenti (`button` usa `font-medium` come default in `button.jsx`).

- Dimensioni testuali (classi Tailwind usate con frequenza):
  - H1 / Hero large: `text-5xl`, `md:text-6xl` (hero headline)
  - H2 / section headings: `text-4xl`, `md:text-5xl`
  - H3: `text-3xl` (vedi contact column)
  - Paragrafo principale: `text-xl` / `text-lg` (descrizioni nelle sezioni)
  - Testo base: `text-base` / `text-sm` / `text-xs` (note e sottotitoli)

- Line-height / leading:
  - `leading-tight`, `leading-none`, `leading-relaxed` sono usati in punti diversi (titoli tight, descrizioni relaxed). Non sono forniti numeri CSS precisi nel codice (valori Tailwind impliciti).

- Trasformazioni tipografiche:
  - `uppercase` usato largamente per headings e CTA.
  - `tracking-tight` usato su header title.

- CTA / Button text:
  - spesso `text-lg` o `text-base` con `font-bold` e `uppercase`/`font-black` per evidenziare.

Se servono valori numerici precisi (es. `line-height: 1.25`), questi non sono esplicitati e quindi: "Non determinato dal codice analizzato."

---

## 3. Layout
Pattern globali e container:

- Container: `container mx-auto px-4` usata in tutte le sezioni per il contenuto centrale. Quindi:
  - horizontal padding base: `px-4` (16px se default Tailwind)
  - centering via `mx-auto` e `container` (max-width gestito da Tailwind `container` responsive)

- Grid / Column:
  - Hero: `grid md:grid-cols-2 gap-12` (singola colonna mobile, due colonne desktop a `md`)
  - Services: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
  - Testimonials: `grid md:grid-cols-3 gap-6`
  - Gallery thumbnails: `grid grid-cols-3 md:grid-cols-6 gap-4`

- Spacing verticale:
  - Sezioni principali usano paddings come `py-20` o `py-12` per vertical spacing consistente.

- Breakpoints usati esplicitamente:
  - `md:` e `lg:` (quindi comportamento mobile -> md -> lg). Nessun breakpoint personalizzato trovato nella configurazione: si usano quelli default Tailwind.

- Allineamenti:
  - Uso frequente di `text-center`, `flex items-center justify-between` per header, `max-w-3xl mx-auto` per contenuti centrati.

---

## 4. Sezioni (homepage)
Le sezioni reali identificate e pattern descritti:

- Header (pattern): vedi sezione dedicata più avanti.

- Hero
  - Struttura: grid a 2 colonne (md). Colonna sinistra testi+CTA, colonna destra immagine con cornice grafica.
  - Background: `bg-gradient-to-br from-gray-50 to-white`, bordo inferiore `border-b-4 border-black`.
  - Titolo: `text-5xl md:text-6xl font-black uppercase leading-tight`.
  - CTA area: grosso pulsante con `bg-black text-white` e bordo `border-2 border-black` o variazione con `bg-yellow-400` per badge.
  - Pattern grafico: immagine con cornice nera spessa (`border-4 border-black`), shadow large `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`.
  - Layout mobile: stack verticale (grid collapse), CTA si adatta con testo ridotto (`md:hidden` / `md:inline`).

- "Sobre Costa" (About)
  - Box centrato `max-w-3xl mx-auto text-center` con `bg-gray-50 border-4 border-black p-8` e shadow `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`.

- Services
  - Titolo centrale con underline / barra gialla (`absolute -bottom-2 left-0 w-full h-2 bg-yellow-400`).
  - Grid di card (2-3 colonne) con `Card` component.
  - Ogni card: bordi neri spessi `border-4 border-black`, shadow pesante, header grafico con pattern radiale/linee e icona in cornice bianca con bordo e shadow.

- Testimonials
  - Grid di `Card` con stella (`Star` icons, `fill-yellow-400 stroke-black stroke-2`) e testo in italic.

- Gallery
  - Featured carousel semplice (custom) con immagine grande `w-full h-96 object-cover`, overlay giallo col titolo, frecce absolute con bottoni stilizzati (bordo 4px nero, shadow).
  - Thumbnail grid con `border-4 border-black` e stato attivo con `shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] scale-105`.

- Contact
  - Due colonne: left box giallo `bg-yellow-400 border-4 border-black p-8`, right box bianco con border nero e QR image.

- Footer
  - `bg-black text-white py-8 border-t-4 border-black` con testo centrato.

---

## 5. Header (documentato)

- Struttura:
  - `<header className="border-b-4 border-black bg-white sticky top-0 z-40">`
  - Dentro `div.container.mx-auto.px-4.py-4.flex.items-center.justify-between`.
  - Left: logo image (`className="h-20 w-auto"`) e titolo (`text-2xl md:text-3xl font-black uppercase tracking-tight`) con sottotitolo `text-xs md:text-sm font-bold`.
  - Right: CTA WhatsApp con `Button` (custom classi per `bg-yellow-400` o `bg-black`) e icona `MessageCircle` di `lucide-react`.

- Colori: fondo bianco, bordi neri (`border-b-4 border-black`), testo nero e giallo accent.

- Spacing: padding `py-4` sul container; logo altezza fissa `h-20`.

- Mobile behaviour:
  - Il titolo e sottotitolo si ridimensionano con `md:`; CTA mostra testo differente su mobile (`hidden md:inline` e `md:hidden` in Button content).

- Sticky: `sticky top-0 z-40` — header rimane in cima durante lo scroll.

---

## 6. Footer

- Struttura: `<footer className="bg-black text-white py-8 border-t-4 border-black">` con `container` e testo centrato.
- Tipografia: `font-bold text-lg` per nome, `text-sm font-bold text-gray-400` per riga secondaria.
- Colori: sfondo `black`, testo `white` o `text-gray-400` per secondari.
- Spacing: `py-8` e text center.

---

## 7. Bottoni e CTA
Basato su `src/components/ui/button.jsx` e utilizzi in `Home.jsx`.

- Component `Button` (file: `src/components/ui/button.jsx`):
  - Base classes: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`.
  - Variants (class-variance-authority): `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`.
  - Size variants: `default: h-9 px-4 py-2`, `sm: h-8 rounded-md px-3 text-xs`, `lg: h-10 rounded-md px-8`, `icon: h-9 w-9`.
  - Uso corrente: le CTA principali passano classi custom inline (es. `bg-black text-white font-bold text-lg px-8 py-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(250,204,21,1)]`). Quindi il componente viene esteso con classi aggiuntive.

- Aspetto generale:
  - Bottone primario: spesso `bg-black text-white` con bordo nero spesso e shadow marcato (ombre totali specifiche inline come `shadow-[6px_6px_0px_0px_rgba(...)]`).
  - Bottone secondario o badge usa `bg-yellow-400` con `border-2 border-black`, rotazione leggera per effetto "comic" su alcuni badge.

Dettagli come radius, esatti colori HEX e valori di focus ring non sono tutti esplicitati — dove mancano: "Non determinato dal codice analizzato.".

---

## 8. Cards
Basato sul `Card` component (`src/components/ui/card.jsx`) e utilizzo nelle pagine.

- Struttura component:
  - wrapper: `div` con classi `rounded-xl border bg-card text-card-foreground shadow`.
  - header: `flex flex-col space-y-1.5 p-6`.
  - title: `font-semibold leading-none tracking-tight`.
  - description: `text-sm text-muted-foreground`.

- Pattern visivo (usato nelle sezioni Services e Testimonials):
  - In pagina: `Card` viene frequentemente utilizzato con aggiunte: `border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]` o `shadow-[6px_6px_0px_0px_rgba(250,204,21,1)]` e `bg-white`.
  - Hover effects: `hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all`.

- Responsive: le card sono in grid e adattano automaticamente numero di colonne tramite breakpoints (`md`, `lg`).

---

## 9. Icone

- Libreria: `lucide-react` (importata e usata ampiamente, vedi `src/app/page.js` e `src/components/ui/*.jsx`).
- Icone effettivamente usate (elenco non esaustivo — ricavato dall'uso in `Home.jsx` e componenti):
  - `MessageCircle`, `Phone`, `Star`, `ChevronLeft`, `ChevronRight`, `Hammer`, `Paintbrush`, `Drill`, `Zap`, `Droplet`, `DoorOpen`, `Wrench`, `Scissors`, `SearchCheck`, `ClipboardCheck`, `ArrowLeft`, `ArrowRight`, ecc.
- Dimensioni/Stroke/Fill:
  - Dimensioni impostate via classi `h-6 w-6`, `h-12 w-12`, `h-5 w-5`, ecc.
  - A volte si imposta `stroke-[2.5px]` per maggiore spessore (`Icon className="h-12 w-12 stroke-[2.5px]"`).
  - Stelle (`Star`) usano `fill-yellow-400 stroke-black stroke-2`.
- Posizionamento: icone all'interno di Card header frame, nei bottoni e nelle liste dei servizi.

---

## 10. Carousel

- Implementazione: `src/components/ui/carousel.jsx` usa `embla-carousel-react` (libreria) e controlli custom.
- Struttura:
  - Wrapper con context, `CarouselContent` che imposta `overflow-hidden` e un inner `div` flex contenente items.
  - `CarouselItem` ha `min-w-0 shrink-0 grow-0 basis-full` e padding tramite `pl-4` per horizontal orientation.
- Navigazione: bottoni `CarouselPrevious` / `CarouselNext` riutilizzano il `Button` componente con icone da `lucide-react` e posizioni assolute (`-left-12 top-1/2`, `-right-12 top-1/2`).
- Gap e snapping: ogni item usa `pl-4` (gutter tra items). Comportamento touch/swipe: delegato a `embla-carousel-react` (supporta swipe nativo).
- Desktop/Mobile: il carousel è responsive grazie al `basis-full` per item e overflow hidden; il layout e le dimensioni degli item dipendono dallo stile fornito all'interno dei `CarouselItem` quando usato.

---

## 11. Immagini

- Aspect ratio e display:
  - Immagini hero/featured: `w-full h-96 object-cover` (ogni immagine grande usa `object-cover` e altezza fissa su desktop)
  - Thumbnail: `w-full h-20 object-cover` (preview small)
  - Immagini con cornici: `border-4 border-black rounded-lg` e spesso `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`.
- Comportamento responsive: elementi usano classi `w-full` e altezze fisse per la vista desktop; su mobile il contenitore si adatta al width del device (stacking del layout).

---

## 12. Bordi e ombre (pattern esatti trovati)
Riporto le classi inline esatte trovate nel codice — utili per replicare lo stile esatto.

- `border-4 border-black` (molto usato)
- `border-2 border-black`
- `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`
- `shadow-[6px_6px_0px_0px_rgba(250,204,21,1)]`
- `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
- `shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`
- `shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]`

Questi valori sono usati direttamente come classi Tailwind arbitrary and devono essere mantenuti se si vuole la stessa resa visiva.

---

## 13. Responsive / Mobile

- Breakpoints rilevanti: `md`, `lg` (default Tailwind breakpoints usati).
- Comportamento generale:
  - Griglie a colonne si riducono a singola colonna su mobile (`md:grid-cols-*` → mobile stacking).
  - Titoli scalano via classi `md:text-*`.
  - Alcuni testi o span sono nascosti su mobile usando `hidden md:inline` o `md:hidden`.
  - Header sticky mantiene logo e CTA visibili; CTA mostra versione compatta su mobile.
  - Carousel e gallery: thumbnails grid passa da 3 a 6 colonne con `md` breakpoint.

---

## 14. Pattern riutilizzabili (esistenti nel codice)
Elenco di pattern reali e riutilizzabili trovati nel codice:

- `section heading` — titolo large + barra gialla subito sotto (`absolute -bottom-2 ... bg-yellow-400`).
- `hero pattern` — large title + image with black frame + comic yellow accent badge.
- `service card` — `Card` con header grafico testurizzato, icona in frame, titolo uppercase e description bold.
- `review card` — `Card` con stelle `Star` colorate e testo italic.
- `cta button` — bottoni primari neri o gialli con bordi neri spessi e shadow marcati.
- `gallery carousel` — featured image + thumbnails, prev/next buttons styled.

Questi pattern sono effettivamente implementati nel codice e sono riutilizzabili.

---

## 15. DO / DON'T (operativi — tratti dal codice)

DO:
- Riutilizzare i componenti presenti in `src/components/ui` (Button, Card, Carousel, ecc.).
- Mantenere le classi border/ombre esatte (`border-4 border-black`, `shadow-[8px_8px_0px_0px_rgba(...)]`) per preservare la resa grafica.
- Usare `lucide-react` per le icone e mantenere dimensioni/stroke come nel codice.
- Rispettare i breakpoints `md`/`lg` e il comportamento mobile riscontrato.

DON'T:
- Non introdurre nuove librerie di icone (il progetto usa `lucide-react`).
- Non inventare nuovi pattern di card o ombre simili ma differenti.
- Non cambiare i colori principali (giallo accent, nero per bordi/CTA) senza allineamento esplicito.

---

### Osserved limitations / valori non determinati
- I valori HEX/HSL esatti delle utilità Tailwind (`yellow-400`, `gray-50`, ecc.) non sono esplicitati nel codice; sono definiti dalla configurazione Tailwind/tema (non presente in forma di valori HEX espliciti): **Non determinato dal codice analizzato.**
- Alcuni dettagli numerici di tipografia (line-height numerico, tracking in px) non sono esplicitati: **Non determinato dal codice analizzato.**

---

Fine documento — `UI_DESIGN_SYSTEM.md` creato da analisi del codice in `frontend/`.
