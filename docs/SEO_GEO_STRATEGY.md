# Strategia SEO/GEO — Costa Manitas (specifica approvata)

Scopo: documentare in repository la strategia SEO/GEO già approvata per le due nuove pagine, fornendo una specifica tecnica/operativa consultabile dagli agent futuri. Questo documento riflette fedelmente la strategia approvata; non introduce modifiche tecniche né contenuti editoriali aggiuntivi.

Fonte della strategia: Pianificazione SEO precedente approvata da progetto Costa Manitas (fonte autorevole). La strategia riportata qui è la fonte autorevole per l'implementazione tecnica successiva.

---

## 1. Architettura approvata

La strategia prevede ESATTAMENTE DUE nuove pagine (oltre alla Home esistente). La struttura concettuale è:

/ (Home)
- Pequeñas reparaciones y mantenimiento del hogar en Gijón
- Mantenimiento de propiedades en Gijón

Ordine di implementazione:
1. Pequeñas reparaciones y mantenimiento del hogar en Gijón
2. Mantenimiento de propiedades en Gijón

Nota: non aggiungere altre pagine SEO senza nuova decisione strategica.

---

## 2. Regole generali vincolanti

- Non creare pagine non approvate.
- Non creare pagine per singoli servizi.
- Non creare una pagina separata "Contacto".
- Non fare keyword stuffing o ripetizione artificiale di "Gijón".
- Non duplicare contenuti dalla Home.
- I testi e le immagini definitive saranno forniti e approvati dall'utente; durante sviluppo si possono usare placeholder solo per struttura/layout.

---

## 3. Specifica completa — Pagina 1

Titolo/H1 approvato:
"Pequeñas reparaciones y mantenimiento del hogar en Gijón"

Intento:
- Commerciale / locale B2C: utente che cerca un manitas per piccoli lavori in casa a Gijón.

Sezioni approvate e struttura semantica:

- H1: Pequeñas reparaciones y mantenimiento del hogar en Gijón

- Introducción / Propuesta
  - breve introduzione;
  - spiegare che Costa Manitas interviene direttamente a domicilio;
  - indicare tipologia: pequeños trabajos, regolaciones, montajes, reparaciones, mantenimiento;
  - CTA principali: Contactar por WhatsApp; telefono come CTA secondaria.

- H2 — ¿Qué tipo de trabajos realizo?
  - Questa sezione presenta categorie (NON pagine separate). Categorie approvate (H3):
    - H3: Montaje y adaptación de muebles
    - H3: Puertas y persianas
    - H3: Iluminación y pequeñas reparaciones eléctricas
    - H3: Paredes y accesorios
    - H3: Carpintería y reparaciones puntuales
    - H3: Mantenimiento del hogar

- H2 — Trabajos reales en viviendas de Gijón
  - Sezione molto importante: mostrare lavori realmente eseguiti con foto reali (fornite dall'utente) + nome breve + descrizione molto breve.
  - Potrà esserci una CTA/link "Ver más trabajos" ma la destinazione definitiva va decisa in fase tecnica successiva.
  - NON creare automaticamente una nuova route `/trabajos`.

- H2 — Cómo trabajo
  - Sezione breve che descrive il processo: 1) Me explicas qué necesitas; 2) Valoro el trabajo; 3) Te doy presupuesto antes de empezar; 4) Realizo el trabajo directamente en tu vivienda.
  - È permesso richiamare elementi di fiducia esistenti (autónomo registrado, seguro de responsabilidad civil, trato directo) senza duplicare integralmente la sezione Home.

- H2 — ¿Qué tipo de trabajos no realizo?
  - Testo concettuale approvato: "No realizo grandes reformas, obras completas ni instalaciones complejas. Mi trabajo está centrado en pequeñas reparaciones, montajes, ajustes y mantenimiento puntual." (testo definitivo approvato separatamente).

- H2 — ¿Tienes un pequeño arreglo pendiente?
  - CTA finale: "Cuéntame qué necesitas y te diré si puedo ayudarte." CTA: Contactar por WhatsApp / Llamar. Non creare moduli di contatto.

- Link contestuale verso Pagina 2 (verso la fine della pagina):
  - Testo concettuale: "¿Necesitas mantenimiento de una vivienda, trastero o propiedad? También realizo trabajos de mantenimiento puntual para propietarios y pequeñas propiedades en Gijón."
  - CTA/link: "Ver mantenimiento de propiedades"
  - Il link deve essere contestuale e naturale; non un blocco artificiale di link SEO.

---

## 4. Intent e segnali Search Console — Pagina 1

Query / segnali già osservati (da Search Console):
- reparaciones en pisos en gijón (posizione ~14-15)
- pequeñas reparaciones del hogar
- reparaciones del hogar
- manitas a domicilio
- manitas en gijón
- mantenimiento del hogar

Nota vincolante: queste keyword sono segnali; non devono essere usate come lista per keyword stuffing o come inventario di pagine.

---

## 5. Specifica — Pagina 2 (sintesi)

Titolo/H1 approvato:
"Mantenimiento de propiedades en Gijón"

Intento:
- Commerciale B2B / semi-B2B (proprietari, administradores, inmobiliarias, persone con propiedades vacías, trasteros, piccoli immobili).

Note importanti:
- La pagina nasce anche da segnali commerciali concreti (incarichi di mantenimiento de trasteros) ma non deve limitarsi a "propiedades vacías".
- La struttura completa verrà definita prima dell'implementazione; NON implementare ora.

---

## 6. Intent e segnali Search Console — Pagina 2

Query / segnali già osservati (esempi):
- property maintenance gijón
- property maintenance services gijón
- mantenimiento de propiedades vacías gijón

Questi segnali servono per definire l'intento; i contenuti finali e testi saranno approvati dall'utente.

---

## 7. Relazione / internal linking tra le due pagine

- Le due pagine devono essere semanticamente collegate in modo naturale.
  - Pagina 1 → link contestuale verso Pagina 2 (come specificato sopra).
  - Pagina 2 → link contestuale verso Pagina 1.
- Vietati footer SEO pieni di link o blocchi artificiali di keyword/link.

---

## 8. Regole relative alla Home

- Non modificare la Home in questo task.
- Non spostare ora servizi, lavori, recensioni, sezioni, testi o immagini dalla Home verso le nuove pagine.
- In futuro alcune sezioni potranno essere spostate solo dopo l'implementazione e approvazione delle nuove pagine.

---

## 9. Regole relative agli URL

- Gli URL definitivi non sono ancora congelati.
- Non scegliere autonomamente URL definitivi; documentare solo i concept delle pagine.

---

## 10. Regole relative a testi e immagini

- Non inventare testi o immagini.
- I contenuti definitivi saranno forniti e approvati dall'utente.
- Durante sviluppo, per verificare struttura/layout si possono usare placeholder (lorem ipsum, box immagine), MA non usare immagini stock, Unsplash, immagini AI o foto trovate online.

---

## 11. Principi SEO/GEO (vincolanti)

- Non costruire pagine SEO artificiali; creare pagine realmente utili per l'utente locale.
- Evitare keyword stuffing e ripetizioni non naturali di "Gijón".
- Usare prove concrete (foto reali dei lavori) per aumentare fiducia e valore locale.
- Evitare contenuti duplicati con la Home.
- Usare internal linking contestuale e naturale.

---

## 12. Cose esplicitamente NON approvate

- Pagine per singoli servizi.
- Pagina separata "Contacto".
- Pagine generiche "Servicios" aggiuntive non approvate.
- Pagine SEO artificiali o blocchi di link non contestuali.

---

## 13. Stato di implementazione

- Stato: strategia approvata, implementazione non ancora iniziata.

---

## 14. Verifiche e conflitti

Se esistono documenti nel repo che contraddicono questa strategia, segnalarli senza modificarli. Indicare:
- quale documento è in conflitto;
- cosa dice;
- quale parte è incoerente con la strategia approvata.

---

## 15. Note operative per gli agent futuri

- Questa specifica è la fonte autorevole per decidere quali pagine creare e quale contenuto pubblicare per le due pagine approvate.
- Tutte le decisioni tecniche (URL finali, metadata tecnici, implementazione delle route, scelta dei componenti per layout) saranno prese nella fase tecnica successiva e dovranno rispettare i vincoli qui riportati.

---

File creato automaticamente come specifica di progetto. NON effettuare commit/push senza approvazione del team.
