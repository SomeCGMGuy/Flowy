# flowy

> **Dein Geld. Dein Leben. Ganz einfach.**

flowy ist eine moderne, verständliche Finanz- und Haushaltsbuch-App mit einem klaren Ziel: Sie soll zeigen, **wie viel Geld wirklich zur Verfügung steht** – heute, im laufenden Monat und in kommenden Monaten.

Die App nimmt Nutzerinnen und Nutzern möglichst viel Kopfrechnen ab. Einnahmen, laufende Ausgaben, Verträge, Versicherungen, geplante Kosten und Sparziele werden zu einer verständlichen Finanzplanung zusammengeführt.

flowy richtet sich ausdrücklich **nicht** an ein Geschlecht oder eine bestimmte Personengruppe. Die Anwendung soll besonders zugänglich für Menschen sein, denen klassische Finanz-Apps zu zahlenlastig, kompliziert oder unübersichtlich sind. Dazu gehören auch Menschen mit Dyskalkulie, ohne sie zu stigmatisieren oder die App darauf zu reduzieren.

## Produktprinzip

Die wichtigste Zahl in flowy ist nicht der Kontostand, sondern:

> **Wirklich verfügbar**

Diese Zahl soll beantworten:

> „Wie viel Geld kann ich noch ausgeben, wenn alles berücksichtigt ist, was bereits feststeht oder von mir eingeplant wurde?“

Vereinfacht:

```text
Einnahmen
- Fixkosten
- Verträge und Versicherungen
- geplante variable Ausgaben
- für Sparziele reservierte Beträge
= wirklich verfügbar
```

Sparziele werden dabei nicht als gewöhnliche Ausgabe behandelt. Der monatlich reservierte Betrag reduziert jedoch das frei verfügbare Budget.

## Geplante Kernfunktionen

- Übersicht mit „Aktuell verfügbar“ / „Wirklich verfügbar“
- Einnahmen und Ausgaben erfassen
- wiederkehrende Einnahmen und Ausgaben
- Verträge und Versicherungen verwalten
- Kategorien mit verständlichen Icons
- Monatsplanung
- Vorschau auf kommende Monate
- Sparziele und monatliche Sparbeträge
- klare Trennung zwischen ausgegebenem, reserviertem und verfügbarem Geld
- leicht verständliche Einblicke und Statistiken
- Biometriesperre
- Datenexport und -import
- Hell-, Dunkel- und Systemmodus

## Sparziele

Ein Sparziel besteht mindestens aus:

- Titel
- Zielbetrag
- optionalem Zieldatum
- optionalem monatlichem Sparbetrag
- optionaler Notiz
- einem festen Ziel-Icon aus der flowy-Iconauswahl

Beispiel:

```text
Urlaub 2027
Zielbetrag:       2.000 €
Bereits gespart:  1.200 €
Monatlich:          100 €
Fortschritt:          60 %
```

Die **2.000 € Zielbetrag** werden nicht pauschal von der Monatsplanung abgezogen. Nur die für den jeweiligen Monat geplante Sparrate – im Beispiel 100 € – wird als reserviertes Geld berücksichtigt.

## UX-Ziel

flowy soll nicht wie Buchhaltungssoftware wirken.

Die Oberfläche ist:

- ruhig
- freundlich
- modern
- jung, aber nicht verspielt
- visuell erklärend statt zahlenlastig
- mit wenigen Entscheidungen pro Ansicht
- ohne unnötige Fachbegriffe

Die App soll Informationen schrittweise zeigen und nicht mehrere Ebenen Finanzlogik gleichzeitig auf den Nutzer werfen.

Die verbindliche Designsprache befindet sich in [`docs/UI_GUIDELINES.md`](docs/UI_GUIDELINES.md).

## Technische Basis

Geplant ist eine mobile App auf Basis von:

- **Capacitor** für die native Android-/iOS-Hülle
- Web-Technologien für die UI
- **Iconify** als zentrale Icon-Bibliothek
- lokale Persistenz für Finanzdaten
- biometrische Authentifizierung über eine Capacitor-kompatible native Lösung

Die konkrete Web-UI-Technologie ist noch nicht festgeschrieben. Diese Entscheidung soll die bestehende Designsprache nicht verändern.

## Datenschutz

Finanzdaten sind sensible Daten. Daher gelten für die spätere Implementierung folgende Grundsätze:

- so wenig Datenerhebung wie möglich
- keine unnötigen externen Dienste
- keine Finanzdaten in Telemetrie oder Logs
- lokale Verarbeitung, wo sinnvoll möglich
- Biometrie optional
- klare Export- und Löschmöglichkeiten

## Status

**Frühe Konzept- und Designphase.**

Der aktuelle Stand definiert Produktidee, Kernlogik und UI-Richtung. Implementierungsdetails können sich noch ändern; die in den UI Guidelines ausdrücklich als **LOCKED** markierten Designentscheidungen dürfen dagegen nicht frei interpretiert werden.
