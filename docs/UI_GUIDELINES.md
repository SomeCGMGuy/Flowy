# flowy UI Guidelines

> Status: **LOCKED baseline**
>
> Diese Datei beschreibt die verbindliche visuelle Sprache von flowy. Änderungen an als **LOCKED** markierten Punkten sind Designänderungen und dürfen nicht stillschweigend während der Implementierung vorgenommen werden.

## 1. Grundprinzip

flowy soll sich **leicht, ruhig, freundlich und modern** anfühlen. Die App soll Finanzplanung entlasten und nicht nach Banking-, Buchhaltungs- oder Enterprise-Software aussehen.

Die Designsprache basiert auf den aktuellen freigegebenen Mockups:

- heller, warmer Grund
- weiche Pastellflächen
- Akzentfarbe Pink für aktive Navigation und wichtige primäre UI-Zustände
- Grün für positive/verfügbare Beträge und primäre Bestätigungsaktionen
- sehr zurückhaltende Schatten
- große Radien
- klare, reduzierte Icons
- großzügige Abstände
- keine dekorativen Effekte innerhalb funktionaler Screens, die nicht bereits Bestandteil des Layouts sind

**LOCKED:** Implementierungen dürfen dieses Layout nicht durch frei interpretierte Komponenten, neue Farbwelten, zusätzliche Verläufe, Glassmorphism, starke Schatten oder andere Designstile ersetzen.

---

## 2. Markenauftritt

### Name

**flowy**

Der Markenname wird grundsätzlich kleingeschrieben.

### Claim

**Dein Geld. Dein Leben. Ganz einfach.**

### Tonalität

Texte sind:

- klar
- freundlich
- kurz
- nicht belehrend
- nicht verniedlichend
- nicht genderspezifisch
- möglichst frei von Finanzjargon

Beispiele:

- „Aktuell verfügbar“
- „Voraussichtlich verfügbar“
- „Für Ziele reserviert“
- „Diesen Monat“
- „Nächster Monat“

Nicht verwenden:

- unnötig technische Finanzbegriffe
- infantilisierende Formulierungen
- Formulierungen, die Dyskalkulie oder ein Geschlecht als Defizit darstellen

---

## 3. Farbwelt

Die folgenden Werte bilden die verbindliche Implementierungsbasis für den aktuellen Mockup-Stand.

```css
:root {
  --flowy-bg: #fffdfb;
  --flowy-surface: #ffffff;
  --flowy-text: #1e1e1f;
  --flowy-text-secondary: #76777b;
  --flowy-border: #eaedea;

  --flowy-pink: #dd6d7a;
  --flowy-pink-soft: #fbecef;

  --flowy-green: #53b27a;
  --flowy-green-soft: #edf8f0;

  --flowy-purple: #6351e1;
  --flowy-purple-soft: #f1efff;

  --flowy-blue-soft: #edf5ff;
  --flowy-orange-soft: #fff4e5;
  --flowy-danger: #ff4f78;
}
```

### Regeln

**LOCKED:**

- Pink kennzeichnet aktive Navigation und ausgewählte Zustände.
- Grün steht für verfügbare/positive Werte und bestätigende Aktionen.
- Pastellfarben dienen als Icon-Hintergründe und leichte inhaltliche Gruppierung.
- Text bleibt überwiegend dunkelgrau/schwarz.
- Keine Vollflächen in stark gesättigten Farben außerhalb klar definierter Aktionen.
- Keine zufälligen neuen Akzentfarben.

Die Pastelltöne dürfen nicht verwendet werden, um finanzielle Bedeutung zu suggerieren, die fachlich nicht existiert.

---

## 4. Typografie

Die UI verwendet eine moderne, neutrale Sans-Serif-Schrift.

Bis zur endgültigen Font-Entscheidung wird die native Systemschrift verwendet:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             Helvetica, Arial, sans-serif;
```

### Hierarchie

- Screen-Titel: 20–22 px, semibold/bold
- Karten-Hauptwert: 30–36 px, bold
- Abschnittstitel: 16–18 px, semibold
- Standardtext: 14–16 px
- Sekundärtext: 12–14 px
- Navigation: 11–12 px

**LOCKED:** Keine Script-/Handschrift-Fonts innerhalb der funktionalen App-Oberfläche. Die handschriftliche Optik aus Promo-Motiven gehört nicht in reguläre Screens.

---

## 5. Abstände und Radien

Basiseinheit: **4 px**.

Bevorzugte Abstände:

- 4 px: sehr kleine interne Abstände
- 8 px: Icon/Text oder eng verbundene Elemente
- 12 px: kompakte Controls
- 16 px: Standardabstand
- 20–24 px: Abschnitte und Außenränder
- 32 px: deutliche Abschnittstrennung

### Radien

```css
--radius-control: 12px;
--radius-card: 18px;
--radius-large: 24px;
--radius-pill: 999px;
```

**LOCKED:** Karten und Controls bleiben weich abgerundet. Keine eckigen Material-/Enterprise-Komponenten einführen.

---

## 6. Icons

flowy verwendet **Iconify** als zentrale Icon-Schicht.

Keine Emojis als funktionale Icons.

### Verbindliche Icon-Sprache

Die reguläre UI verwendet eine einheitliche, runde Outline-Sprache. Für Standardnavigation und Aktionen wird die `lucide`-Collection über Iconify verwendet.

Beispiele:

```text
lucide:house
lucide:chart-no-axes-column-increasing
lucide:calendar-days
lucide:file-text
lucide:ellipsis
lucide:settings
lucide:plus
lucide:minus
lucide:chevron-right
lucide:chevron-left
lucide:lock-keyhole
lucide:shield
lucide:download
lucide:upload
lucide:trash-2
```

### Fingerabdruck

Der Fingerabdruck ist ein besonders wichtiger Bestandteil des Lockscreens.

**LOCKED:** Für den Fingerabdruck wird ausschließlich dieses Icon verwendet:

```text
mdi:fingerprint
```

Darstellung:

- groß
- mittig
- Pink
- keine gefüllte Kreisfläche hinter dem eigentlichen Fingerabdruck
- keine alternative Fingerprint-Grafik
- kein selbst gezeichnetes Ersatz-SVG
- keine freie Interpretation der Linienstruktur

Wenn technisch möglich, wird direkt die SVG-Geometrie aus der Iconify-Quelle gerendert.

---

## 7. Bottom Navigation

Die Bottom Navigation besitzt fünf Ziele:

1. **Home**
2. **Einblicke**
3. **Planung**
4. **Verträge**
5. **Mehr**

Icon-Zuordnung:

```text
Home       -> lucide:house
Einblicke  -> lucide:chart-no-axes-column-increasing
Planung    -> lucide:calendar-days
Verträge   -> lucide:file-text
Mehr       -> lucide:ellipsis
```

### Zustand

- inaktiv: neutrales Grau
- aktiv: `--flowy-pink`
- Icon über Label
- keine kräftige Hintergrundfläche für das aktive Tab
- keine Floating-Navigation

**LOCKED:** Position, Reihenfolge und Grundstruktur werden nicht verändert, sofern dies nicht explizit beschlossen wird.

---

## 8. App Bar / Header

Reguläre Unterseiten verwenden:

- Zurück-Pfeil links
- zentrierten Seitentitel
- optional genau eine klar begründete Aktion rechts

Übersichtsseiten können stattdessen einen linksbündigen Titel verwenden.

Keine überladenen Header.

---

## 9. Karten

Karten bestehen aus:

- weißer oder sehr heller Pastellfläche
- 16–20 px Innenabstand
- 18 px Radius
- sehr leichter Border oder extrem zurückhaltendem Schatten

Bevorzugt:

```css
border: 1px solid var(--flowy-border);
box-shadow: 0 2px 10px rgba(30, 30, 31, 0.04);
```

### Finanz-Hauptkarte

Die zentrale verfügbare Summe erhält eine sanft grüne Fläche.

Struktur:

```text
Aktuell verfügbar
892,50 €
von 1.650,00 € in diesem Monat
[ Fortschrittsanzeige ]
53 % genutzt                Noch 757,50 €
```

**LOCKED:** Die Hauptzahl bleibt der visuelle Fokus. Keine zusätzlichen Charts oder KPI-Kacheln direkt daneben.

---

## 10. Buttons

### Primär

- Grün
- weiße Schrift
- volle verfügbare Breite innerhalb des Inhaltsbereichs
- Höhe ca. 48–52 px
- Radius 12–16 px

Beispiele:

- „Sparziel speichern“
- „Sparziel bearbeiten“
- „Plan anpassen“

### Sekundär

- helle neutrale Fläche
- dunkler Text
- kein unnötiger Schatten

### Destruktiv

- Rot/Pink
- nur für tatsächliche irreversible bzw. kritische Aktionen

---

## 11. Formulare

Formulare bleiben einspaltig.

Feldstruktur:

```text
Label
[ Eingabefeld                            ]
```

Regeln:

- Labels oberhalb des Feldes
- ein Control pro Zeile
- keine komplexen Multi-Column-Layouts auf dem Smartphone
- optionale Felder explizit mit „(optional)“ kennzeichnen
- numerische Felder mit passender mobiler Tastatur
- Datumsfelder öffnen einen nativen bzw. app-nativen Date Picker

---

## 12. Kategorien

Kategorien werden als verständliche Kombination aus Icon + Text dargestellt.

Aktuelle visuelle Sprache:

- Wohnen: Haus / Rosa
- Lebensmittel: Einkauf / Grün
- Mobilität: Auto / Blau
- Freizeit: Stern / Lila
- Versicherungen: Schild / Rosa
- Sparen: Sparschwein / Orange bzw. Rosa im Planungskontext
- Strom & Energie: Blitz / Orange
- Internet & Handy: WLAN / Blau
- Gesundheit: Herz / Grün
- Bildung: Abschlusskappe / Lila
- Sonstiges: Ellipsis / neutral

Die Kategorie-Farbe ist eine Orientierungshilfe. Die Bedeutung ergibt sich immer zusätzlich aus Icon und Text.

---

## 13. Sparziele

### Detailansicht

Die freigegebene Struktur ist:

```text
<                  Sparziel                  …

[             Ziel-Icon                       ]

                 Urlaub 2027
                Endlich ans Meer

                  1.200,00 €
                 von 2.000,00 €

[=================------------]
60 % erreicht                     Noch 800,00 €

[ Ziel-Datum                         31.08.2027 ]
[ Monatlich sparen                     100,00 € ]
[ Notizen               Italien, Sonne, Erholung ]

[              Sparziel bearbeiten             ]
```

### Sparziel erstellen

Reihenfolge:

1. Ziel-Icon wählen
2. Titel
3. Zielbetrag
4. Zieldatum (optional)
5. monatlicher Sparbetrag (optional)
6. Notiz (optional)
7. Speichern

**LOCKED:** Keine weiteren Pflichtfelder hinzufügen.

### Finanzlogik

Der Zielbetrag selbst reduziert das verfügbare Monatsbudget nicht.

Nur der für den aktuellen Monat reservierte Sparbetrag fließt ein:

```text
Einnahmen
- Fixkosten
- geplante Ausgaben
- reservierte Sparbeträge
= wirklich verfügbar
```

Sparbeträge müssen in der Planung als eigener Posten sichtbar bleiben und dürfen nicht heimlich unter „Ausgaben“ verschwinden.

---

## 14. Planung

Die Planung besitzt oben einen einfachen Periodenumschalter:

```text
[ Diesen Monat | Nächster Monat ]
```

Darunter folgt eine zentrale Karte:

```text
Voraussichtlich verfügbar
1.120,00 €
```

Anschließend folgen geplante Positionen als klare Liste.

Sparziele erscheinen dort explizit als eigene Zeile, z. B.:

```text
Miete               -650,00 €
Strom                 -60,00 €
Internet & Handy      -40,00 €
Versicherungen       -120,00 €
Sparziele            -100,00 €
Sonstiges            -410,00 €
```

**LOCKED:** Die App erklärt den verfügbaren Betrag über verständliche Positionen. Keine Tabellenkalkulations-Optik.

---

## 15. Einstellungen

Die Einstellungen bleiben bewusst kurz und funktional.

Aktuelle Struktur:

### Allgemein

- Erscheinungsbild
- App sperren
- Biometrie verwenden
- Währung
- Startseite

### Daten

- Exportieren
- Importieren
- Alle Daten löschen

### Über flowy

- Version
- Datenschutz

**LOCKED:** Keine Dashboard-artigen Einstellungs-Kacheln, keine Illustrationen und keine dekorativen Header in den Einstellungen.

### Erscheinungsbild

Eigene Unterseite mit exakt drei Optionen:

- Hell
- Dunkel
- System

Einfacher Single-Choice-Zustand. Keine zusätzlichen Theme-Presets.

---

## 16. Lockscreen

Der Lockscreen ist bewusst reduziert.

Struktur:

```text

                 flowy
        Dein Geld. Dein Leben.
              Ganz einfach.

             [ Fingerprint ]

       Mit Fingerabdruck entsperren


       Alternative Anmeldemethoden
```

### Hintergrund

- warmes Off-White
- sehr dezente organische Pastellflächen in Rosa und Grün an den Rändern
- keine Fotos
- keine Finanzdaten
- keine Karten
- keine zusätzlichen Aktionen

### Fingerprint

Siehe Abschnitt „Icons“.

**LOCKED:** `mdi:fingerprint`, groß, pink und unverändert.

---

## 17. Onboarding

Das Onboarding bleibt kurz.

### Screen 1 — Willkommen

```text
Willkommen bei flowy

Geld verstehen. Ohne Kopfrechnen.

flowy zeigt dir, was dir wirklich zur Verfügung steht –
heute, diesen Monat und später.
```

### Screen 2 — Überblick

Erklärt Einnahmen, Ausgaben, Verträge und Kategorien.

### Screen 3 — Planung

Erklärt den eigentlichen Mehrwert:

> Sieh jederzeit, wie viel Geld dir wirklich zur Verfügung steht – auch in den nächsten Monaten.

### Screen 4 — Start

Kurzer Abschluss mit primärer Aktion „Jetzt starten“ und sekundärer Option „Später einrichten“, sofern ein optionaler Einrichtungsschritt existiert.

**LOCKED:** Das Onboarding darf nicht zu einem langen Fragebogen werden.

---

## 18. Animationen

Animationen dienen nur Orientierung und Feedback.

- Screen-Wechsel: kurz und ruhig
- Bottom-Sheet/Modal: native Bewegung
- Fortschrittswerte dürfen sanft einlaufen
- kein Bounce ohne funktionalen Zweck
- keine Daueranimationen

Empfohlene Dauer:

```text
Micro interaction: 120–180 ms
Screen transition: 180–260 ms
Modal/sheet:        200–300 ms
```

`prefers-reduced-motion` muss berücksichtigt werden.

---

## 19. Accessibility

Die reduzierte Darstellung ist kein Ersatz für Accessibility.

Verbindlich:

- Text und Icons nicht ausschließlich über Farbe unterscheiden
- Touch-Ziele mindestens 44 × 44 CSS px
- semantische Labels für Icon-Buttons
- ausreichender Textkontrast
- dynamische Textvergrößerung soweit technisch sinnvoll
- Zahlen nicht unnötig klein darstellen
- Fehlermeldungen textlich erklären
- Formulare logisch fokussierbar

Für Nutzer mit Dyskalkulie besonders relevant:

- Zahlen mit klarer Gruppierung
- konsistente Währungsdarstellung
- keine unnötig komplexen Prozentangaben
- Ergebnisse in Alltagssprache erklären
- zentrale Summen visuell eindeutig hervorheben
- Rechenlogik nach Möglichkeit nachvollziehbar machen

---

## 20. Was Entwickler nicht improvisieren dürfen

Folgende Punkte sind ausdrücklich **nicht** frei interpretierbar:

1. Grundfarbwelt
2. Bottom-Navigation mit fünf Einträgen
3. Pink als aktiver Navigationszustand
4. Grün als positive/verfügbare Finanzfarbe und Primäraktion
5. Kartenradien und insgesamt weiche Formsprache
6. Iconify als Icon-Schicht
7. `mdi:fingerprint` als Fingerabdrucksymbol
8. Aufbau des Lockscreens
9. reduzierte Einstellungsstruktur
10. Struktur der Sparziel-Detailansicht
11. Sparziele als eigene reservierte Position in der Finanzplanung
12. ruhige, einspaltige Formularstruktur

Wenn eine technische Einschränkung eine Abweichung erforderlich macht, wird **vor der Umsetzung** entschieden, wie damit umgegangen wird.

---

## 21. Implementierungsregel

Bei Unsicherheit gilt:

> **Nicht neu gestalten. Nicht ergänzen. Nicht „verbessern“. Erst klären.**

Neue Screens sollen vorhandene Komponenten und Tokens wiederverwenden. Die bestehende Designsprache hat Vorrang vor Framework-Defaults.
