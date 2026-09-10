# AGENTS.md — flowy

Diese Datei enthält verbindliche Arbeitsregeln für Coding-Agents, die an **flowy** arbeiten.

## 1. Vor jeder Änderung

1. Lies `README.md`.
2. Lies vollständig `docs/UI_GUIDELINES.md`.
3. Prüfe den bestehenden Code und die betroffenen Komponenten, bevor du Änderungen vornimmst.
4. Ändere nur das, was für die konkrete Aufgabe notwendig ist.

Wenn Anforderung, Verhalten oder Design nicht eindeutig sind: **nicht improvisieren**. Erst nachfragen.

## 2. UI ist LOCKED

`docs/UI_GUIDELINES.md` ist die verbindliche Designquelle.

- Bestehendes Layout nicht frei interpretieren oder „verbessern“.
- Farben, Abstände, Radien, Karten, Navigation und Typografie konsistent übernehmen.
- Keine neue Designsprache einführen.
- Kein Glassmorphism, keine starken Schatten, keine unnötigen Verläufe oder dekorativen Effekte.
- Einstellungen bewusst schlicht halten.
- Bestehende Komponenten bevorzugen, statt optisch ähnliche Varianten neu zu bauen.
- Icons ausschließlich entsprechend den UI-Guidelines verwenden.
- Der Fingerabdruck des Lockscreens ist besonders geschützt: **`mdi:fingerprint`** verwenden. Nicht durch Emoji, CSS-Nachbau, alternatives Fingerprint-Icon oder eigene SVG-Interpretation ersetzen.

Falls ein benötigter Zustand oder Screen in den Guidelines nicht beschrieben ist, erst Rückfrage stellen, bevor eine neue UI-Lösung entworfen wird.

## 3. Produktprinzip

flowy soll möglichst wenig Kopfrechnen verlangen.

Die zentrale Produktfrage lautet:

> Wie viel Geld steht mir wirklich zur Verfügung, nachdem bekannte und geplante Verpflichtungen berücksichtigt wurden?

Bei Finanzlogik deshalb immer zwischen folgenden Dingen unterscheiden:

- Einnahmen
- tatsächlichen Ausgaben
- Fixkosten / Verträgen / Versicherungen
- geplanten zukünftigen Kosten
- Sparzielen bzw. reserviertem Geld
- wirklich frei verfügbarem Geld

Sparziele sind keine normalen Ausgaben. Eine geplante monatliche Sparrate reduziert jedoch den Betrag, der als frei verfügbar dargestellt wird.

Finanzberechnungen dürfen nicht stillschweigend geändert werden. Änderungen an Berechnungslogik müssen nachvollziehbar und testbar sein.

## 4. Technische Richtung

flowy wird als mobile App mit **Capacitor** entwickelt und soll auf Android und iOS funktionieren.

Grundregeln:

- Mobile-first.
- Plattformunabhängige Weblogik bevorzugen.
- Native Capacitor-Funktionalität nur dort einsetzen, wo sie einen konkreten Mehrwert bietet.
- Safe Areas auf Android und iOS berücksichtigen.
- Keine UI unter Statusbar, Dynamic Island, Notch oder Systemnavigation schieben.
- Touch-Ziele ausreichend groß halten.
- Browser-only-Verhalten vermeiden, wenn es sich in der nativen App unnatürlich anfühlt.
- Icon-Libraries statt handgezeichneter Ersatzicons verwenden; maßgeblich sind die UI-Guidelines.

## 5. Änderungsumfang

Arbeite minimalinvasiv.

Wenn die Aufgabe lautet, einen bestimmten Fehler zu beheben oder ein einzelnes Verhalten zu ändern:

- keine benachbarten Features refactoren,
- keine Texte ohne Auftrag umformulieren,
- keine UI nebenbei verändern,
- keine Dependencies ohne Notwendigkeit austauschen,
- keine Architekturänderung aus Bequemlichkeit durchführen.

Refactoring ist nur zulässig, wenn es für die angeforderte Änderung erforderlich ist oder ausdrücklich beauftragt wurde.

## 6. Branch-Strategie

Kleine, klar begrenzte Bugfixes und Wartungsänderungen können direkt im vorgesehenen Arbeitsbranch umgesetzt werden.

**Größere Features, Experimente und umfangreiche UI-Änderungen gehören auf einen eigenen Feature-Branch.**

Ein experimentelles Feature wird erst nach Prüfung in `main` übernommen. Wird es verworfen, darf `main` dadurch nicht mit Restcode, deaktivierten Komponenten oder ungenutzten Abhängigkeiten belastet werden.

## 7. Commits

Nach einer abgeschlossenen, funktionierenden Änderung einen nachvollziehbaren Commit erstellen.

Bevorzugtes Schema:

```text
feat: kurze Beschreibung
fix: kurze Beschreibung
refactor: kurze Beschreibung
docs: kurze Beschreibung
chore: kurze Beschreibung
```

Keine Sammelcommits für mehrere unabhängige Änderungen.

## 8. Tests und Abschlussprüfung

Vor Abschluss einer Änderung mindestens prüfen:

- Projekt baut ohne neue Fehler.
- Betroffener Workflow funktioniert weiterhin.
- Keine offensichtlichen Regressionen in angrenzenden Bereichen.
- Android- und iOS-relevante Layoutannahmen wurden berücksichtigt.
- Safe Areas funktionieren.
- Navigation und Zurück-Verhalten bleiben konsistent.
- Zahlen und Geldbeträge werden korrekt formatiert.
- Finanzberechnungen sind deterministisch und nachvollziehbar.
- UI entspricht `docs/UI_GUIDELINES.md`.

Wenn automatisierte Tests für die geänderte Logik existieren, müssen sie ausgeführt werden. Für neue relevante Finanzlogik sollen nach Möglichkeit Tests ergänzt werden.

## 9. Keine erfundenen Anforderungen

Ein Coding-Agent darf fehlende Produktentscheidungen nicht selbst festlegen.

Insbesondere nicht eigenmächtig entscheiden:

- neue Kategorien,
- neue Farben,
- neue Navigationseinträge,
- zusätzliche Einstellungsoptionen,
- neue Berechnungsregeln,
- neue Sparziel-Logik,
- neue Onboarding-Schritte,
- alternative Icons,
- neue Abhängigkeiten oder Services.

Wenn eine Entscheidung für die Umsetzung notwendig ist, aber nicht aus README, UI-Guidelines oder bestehendem Code hervorgeht: **Rückfrage stellen.**

## 10. Prioritäten

Bei konkurrierenden Möglichkeiten gilt folgende Reihenfolge:

1. Korrekte Finanzlogik
2. Verständlichkeit für den Nutzer
3. Bestehende UI-Guidelines
4. Konsistentes natives App-Verhalten
5. Einfacher, wartbarer Code
6. Zusätzliche Eleganz oder technische Optimierung

flowy soll nicht möglichst viele Funktionen besitzen. Es soll die vorhandenen Funktionen **verständlich, ruhig und zuverlässig** ausführen.
