# Anforderungsübersicht

- Erstellung von zwei Tools
    + User-Tool:
        * Umfragen ausfüllen
        * Anmeldung durchführen
        * Bewertung abgeben
    + Admin-Tool:
        * Umfragen anlegen
        * Auswertung einsehen
        * Rundmailings versenden

## User-Tool

### Umfragen sollen erstellt werden können / Umfragetypen

- Anonym / oder nicht
- Öffentlich / nicht (Doodle like)
- Vorlieben abfragen (Essen, ...)
- Terminplanung
- "Wer will Ticket" -> First Come First Served
- Gamification (Spielähnlich -> noch 3 Schritte dann gibt es einen Punkt... -> Belohnung)

### Umfragen generisch erstellbar

- Fragetyp (Muss, Kann, Verzweigung)
- Antwortmöglichkeiten (Optionen)
- Antwortart (einfach, mehrfach, Klick, Text, ...)
- Hilfetexte
- Eventuell verschiedene Designs
- Oberfläche dynamisch: Seitenzahl, Fragenaufteilung, Gliederung, ...

### Anmeldevorgänge sollen abgebildet werden

- Antwort als Bedingung für Flow / nächste Schritte
- Bestätigung senden
- Terminversand (`.ics` Datei)
- Zusagenauswahl (Wer darf teilnehmen über Admin)

### Bewertung abgeben

- Nach besuchtem Event soll der Teilnehmer seine Bewertung online abgeben können

## Admin Tool

### Adminoberfläche

- Erstellung Umfragen / Anmeldungen (konfigurierbar, dynamisch)
- Auswertung / Reporting / Charts
- Anbindung Active Directory
- Automatische Mailings und Antworten (über Active Directory wählbar, Gruppen)
- Erinnerung an Mitarbeiter mit fehlender Rückmeldung über Auswertung automatisch
- Deadlines setzen, automatisch Reaktion bzw. Nachricht
- Dashboard für Übersicht -> aktuelle Umfragen, Anmeldungen, filterbar, sortierbar
- Historie

### Auswertungen

- Anmeldestatistik
- Antwortstatistik
- Wer hat geantwortet / wer nicht
- Historie der letzten Events
- Wann wurde geantwortet (Zeiträume Mailing bis Antwort)
- Charting

### App dazu

- Apache Cordova
- Zumindest für Verwaltung / Dashboard, für User nicht nötig
- Erstellung?
- Adminstuff...

## Sonstige Ideen / Wichtige Punkte

- Erreichbarkeit von "außen"
- Responsive Design
- Datenhaltung
- Anonymität, wenn gefordert
- Schnell und einfach anzuwenden / auszufüllen, intuitiv
- Muss die User motivieren
- V2: Eventuell erweiterbar für Planung MAG? (Doodle?) Bzw. Termin zur Verfügung stellen und MA können diese buchen?
- V2Ö Eventuell Zugang für MA um Treffen zu organisieren? Berg, Annafest? Zumindest Vorschläge zur Abstimmmung stellen, internen Doodle
- Marketing involvieren, wenn Anforderungen soweit klar sind ob noch Ideen vorhanden sind
- Wäre auch generell cool Mailings damit zu machen... Infos aus der BU, ...
