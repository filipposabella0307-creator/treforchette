# 📝 Guida alle Modifiche - Le Tre Forchette

Questa guida ti aiuterà a modificare ogni aspetto del sito web del ristorante Le Tre Forchette.

## 🎨 COLORI E DESIGN

### Dove Modificare i Colori
I colori principali del sito sono definiti in: `client/src/index.css`

```css
/* COLORI PRINCIPALI */
--primary: 15 23% 42%;        /* Bordeaux del logo */
--chart-2: 24 70% 50%;        /* Arancio del bottone "Prenota ora" */
--accent: 43 74% 66%;         /* Crema/beige del logo */
```

### Come Cambiare i Colori:
1. Trova il colore desiderato online in formato HSL
2. Scrivi i valori come: `H S% L%` (esempio: `24 70% 50%`)
3. Sostituisci i valori nelle variabili CSS

### Colori Utilizzati Nel Sito:
- `--primary`: Titoli, logo, elementi principali
- `--chart-2`: Pulsante "Prenota ora" 
- `--accent`: Sfondi di sezione alternati
- `--muted-foreground`: Testi secondari
- `--card`: Sfondi delle card
- `--border`: Bordi degli elementi

---

## 📝 TESTI E CONTENUTI

### Sezione HERO (Prima schermata)
**File**: `client/src/components/Hero.tsx`
- **Titolo principale**: cerca `Le Tre Forchette` (linea ~31)
- **Sottotitolo**: cerca `Trattoria Tradizionale` (linea ~34)
- **Descrizione**: cerca `Un luogo informale dove...` (linea ~37)
- **Indirizzo**: cerca `Via G. Galliano, 87` (linea ~55)
- **Orari**: cerca `Aperto tutti i giorni` (linea ~56)

### Sezione CHI SIAMO
**File**: `client/src/components/About.tsx`
- **Titolo sezione**: cerca `La Nostra Storia` (linea ~42)
- **Descrizione principale**: cerca `La Trattoria "Le Tre Forchette" è l'idea` (linea ~45)
- **Contenuto storia**: cerca `L'attività sostituisce` (linea ~55)
- **Specialità**: cerca `Siamo specializzati` (linea ~61)
- **Statistiche**: numeri fan, rating, anni esperienza (linee ~69-75)

### Sezione RECENSIONI
**File**: `client/src/components/Reviews.tsx`
- **Recensioni**: array `reviews` (linea ~8-70)
- **Nome recensore**: campo `name`
- **Testo recensione**: campo `review`
- **Valutazione**: campo `rating` (1-5)
- **Data**: campo `date`

### Sezione MENU
**File**: `client/src/components/Menu.tsx`
- **Categorie menu**: oggetto `menuCategories` (linea ~28)
- **Nome piatto**: campo `name`
- **Descrizione**: campo `description`
- **Prezzo**: campo `price`
- **Contrassegno specialità**: campo `featured: true`

### Sezione CONTATTI
**File**: `client/src/components/Contact.tsx`
- **Informazioni contatto**: oggetto `contactInfo` (linea ~8-15)
- **Orari apertura**: array `openingHours` (linea ~17-21)

### FOOTER
**File**: `client/src/components/Footer.tsx`
- **Descrizione ristorante**: cerca `La Trattoria "Le Tre Forchette"` (linea ~37)
- **Informazioni contatto**: hardcoded nelle varie sezioni

---

## 🖼️ IMMAGINI

### Immagini Attuali:
1. **Logo**: `attached_assets/424674859_1148634889826884_8224997341038095058_n_1758028283916.jpg`
2. **Hero Background**: `attached_assets/generated_images/Italian_trattoria_interior_6c00755d.png`
3. **Antipasti**: `attached_assets/generated_images/Italian_antipasti_platter_3bf945d9.png`
4. **Bistecca**: `attached_assets/generated_images/Chianina_beef_steak_dish_7018e85f.png`

### Come Cambiare le Immagini:
1. **Aggiungi nuova immagine** nella cartella `attached_assets/`
2. **Trova il file componente** che usa l'immagine
3. **Modifica l'import** in alto nel file:
   ```javascript
   import nuovaImmagine from "@assets/percorso/nuova_immagine.jpg";
   ```
4. **Cambia la variabile** che referenzia l'immagine

### Dove Sono Usate le Immagini:
- **Logo**: Navigation.tsx, Footer.tsx
- **Hero**: Hero.tsx (background)
- **Menu**: Menu.tsx (immagini piatti)

---

## ⚙️ INFORMAZIONI RISTORANTE

### Dati Principali da Modificare:

#### CONTATTI:
- **Indirizzo**: Via G. Galliano, 87, 63822 Porto San Giorgio (FM)
- **Telefono cellulare**: +39 346 611 7936
- **Telefono fisso**: +39 0734 015961
- **Email**: letreforchettetrattoria@gmail.com
- **Facebook**: @letreforchette.trattoria
- **Instagram**: @letreforchettetrattoria

#### ORARI:
- **Lunedì-Venerdì**: 18:30 - 23:00
- **Sabato**: 19:30 - 23:00
- **Domenica**: 18:30 - 23:00

### File da Modificare per i Contatti:
- `client/src/components/Contact.tsx` (sezione contatti)
- `client/src/components/Footer.tsx` (footer)
- `client/src/components/Hero.tsx` (hero section)

---

## 🔧 FUNZIONALITÀ INTERATTIVE

### Bottoni e Link:
- **Prenota ora**: chiama il numero di telefono
- **Social media**: aprono i profili social
- **Email**: apre il client email
- **Mappa**: apre Google Maps

### Come Modificare i Link:
1. **Telefoni**: cerca `handleCall` nei componenti
2. **Email**: cerca `handleEmail` 
3. **Social**: cerca `handleSocial`
4. **Maps**: cerca coordinate nella URL dell'iframe

---

## 📱 RESPONSIVE DESIGN

Il sito è già responsive, ma per modifiche:
- **Mobile**: classi `sm:` e `md:`
- **Tablet**: classi `md:` e `lg:`
- **Desktop**: classi `lg:` e `xl:`

---

## 🚀 COME TESTARE LE MODIFICHE

1. **Salva il file** modificato
2. **L'applicazione si ricarica automaticamente**
3. **Controlla il browser** per vedere le modifiche
4. **Testa su mobile** ridimensionando la finestra

---

## ⚠️ NOTE IMPORTANTI

### NON MODIFICARE:
- File in `client/src/components/ui/` (componenti base)
- File `vite.config.ts`, `package.json`
- File di configurazione in `server/`

### PRIMA DI PUBBLICARE:
- Verifica tutti i link funzionino
- Testa su mobile e desktop
- Controlla che tutte le immagini si caricano
- Verifica i numeri di telefono e email

---

## 📞 SUPPORTO

Se hai problemi:
1. **Controlla la console del browser** (F12)
2. **Verifica i percorsi delle immagini**
3. **Controlla la sintassi dei file modificati**
4. **Riavvia l'applicazione** se necessario

---

## 📋 CHECKLIST MODIFICHE

Prima di ogni modifica importante:

- [ ] Backup dei file originali
- [ ] Test su browser diversi  
- [ ] Verifica responsive design
- [ ] Test funzionalità contatti
- [ ] Controllo spelling e grammatica
- [ ] Verifica caricamento immagini
- [ ] Test velocità sito