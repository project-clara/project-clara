# 0) Intro
## 0.1) Hintergrund
Das Dokument ist eine Zusammenfassung der Anforderung an Project Clara.  
Die Anforderung sind mit der Sophisten Schablone angefertig:
https://www.sophist.de/fileadmin/SOPHIST/Puplikationen/Broschueren/SOPHIST_Broschuere_MASTeR.pdf


## 0.2) Nummerierung Requirements
[R|N]\.V\.F\.N  
R = Konstant für Requirement
N = Konstantfür Non functional Requirement

V = V1, V2, V3 etc. Mapping V1 zu semantischer Version sollte davon losgelöst laufen
F = Featurebereich (siehe 1.)
N = Laufende Nummer für identifizierung

## 0.4) Fragen an den Kunden
* Q1) Was ist der funktionale Unterschied zwischen einer Bewertung und einer Umfrage?


# 1) Überblick

**Funktionale Anforderungen**
  1. Userverwaltung
  2. Umfragen
  3. Eventhandling
  4. Reporting

**Nichtfunktionale Anforderungen**
  1. Security
  2. Design

# 2) Anforderungsanalys Umfragen
## 2.1) Feature Übersicht
|Feature                    |V1|V2|V3|V4|Kommentar|
|---------------------------|--|--|--|--|-|
|Anonyme Anlage             |X |X |X |X |Über eine URL lässt sich der Umfrageeditor starten
|Validierung                |X |X |X |X |Option für Mussfeld setzbar
|Berechtigung der Anlage    |  |X |X |X |Beschränkung der Anlage auf Administratoren
|Anzeige der Hilfstexte     |  |X |X |X |
|Bedingungen                |  |  |X |X |Wann wird eine Frage eingeblendet
|Freie Antworten            |X |X |X |X |Beliebiger Text, einzeilig, mehrzeilig
|One of X Antworten         |  |X |X |X |Radiobuttons
|Y of X Antworten           |  |X |X |X |Checkboxen
|Schließen einer Umfrage    |  |  |  |X |Eine Teilnahme ist nicht mehr möglich
|Fragegruppen               |  |  |  |X |
|Zwischenspeichern von Umfragen|  |  |  | X| Der User kann sich abmelden und die Umfrage zu einem späteren Zeitpunkt weiterführen
|Anonyme Teilnahme          |  |  |X |X | 
|Umfragesichtbarkeit        |  |  |X |X |Differenzierung öffentliche, geschützte, private Umfragen
|Anzeigen der Umfragen      |X |X |X |X |
|Teilnahme an Umfragen      |X |X |X |X |
|Dynamisches Layout der Umfrage| |X |X |X |

## 2.2) Stories
### 2.2.1) Stories V1 
|Req#|Req-Beschreibung|
|-|---|
|R1.1.01|Project-Clara muss jedem die Möglichkeit bieten, über einen Umfrage-Editor eine Umfrage mit Titel und Beschreibung anzulegen|
|R1.1.02|Der Umfrage-Editor muss dem Autor die Möglichkeit bieten, Fragen dem Fragebogen hinzuzufügen|  
|R1.1.03|Der Frage-Editor muss dem Autor die Möglichkeit bieten, Fragen mit Fragetext und freien Antworten als Muss oder Kannfragen hinzuzufügen|  
|R1.1.04|Sobald die Umfrage mindestens eine Frage hat, kann der Frage-Editor die Umfrage speichern|  
|R1.1.05|Projekt-Clara muss jedem die Möglichkeit bieten die Umfragen anzuzeigen (Listensicht der Titel und Beschreibungen)|  
|R1.1.06|Die BefragerUI muss jedem die Möglichkeit bieten, Umfragebögen innerhalb einer Session durchzuführen|  
|R1.1.07|Solange ein Umfragebogen leere Mussfelder hat, muss die BefragerUI das abschließen des Umfragebogens verhindern|   
|R1.1.08|Sobald ein Mussfeld nicht ausgefüllt wurde, soll die BefragerUI eine Warnung anzeigen|

### 2.2.2) Stories V2 !!! TODO
Project-Clara muss dem Administrator die Möglichkeit bieten eine Umfrage anzulegen  
Project-Clara   
Project-Clara muss Usern die Möglichkeit bieten an öffentlichen und geschützten Umfragen teilzunehmen (V2)  
Solange ein User eine Umfrage nicht abgeschlossen hat, muss Project-Clara die Möglichkeit bieten, seine Umfrage mit seinem letzten Stand fortzuführen (V3)   
Project-Clara muss dem Administrator die Möglichkeit bieten eine Umfrage abzuschließen, sodass niemand mehr    

## 2.3) Artefakte
### 2.3.1) Fragebogen
**Attribute**

|Attributname|V1|V2|V3|V4|Kommentar|
|------------|--|--|--|--|--|
|Unique Id   |X |X |X |X |
|Titel       |X |X |X |X |
|Beschreibung|X |X |X |X |
|Autor       |  |X |X |X |
|Sichtbarkeit|  |  |X |X |
|User/AnoId  |  |X |X |X |Für V1 SessionID?|

* Sichtbarkeit -> Zugelassene Teilnehmer
  * Öffentlich - Es kann ohne Anmeldung teilgenommen werden (Doodle-Style)
  * Geschützt - User können nach Anmeldung teilnehmen
  * Privat - Nur eingeladene User / Usergruppen können an dem Fragebogen teilnehmen
* Personalisiert/Anonym

### 2.3.2) Fragen
**Attribute**  
|Attributname|V1|V2|V3|V4|Kommentar|
|------------|--|--|--|--|-|
|Unique Id   |X |X |X |X |
|Fragetext   |X |X |X |X |
|Hilfstexte  |  |X |X |X |
|Validierung |X |X |X |X |
|Bedingung   |  |  |X |X | Referenz auf eine Frage -> Operator -> Vergleichswert
|Bedingung   |  |  |  |X | Referenz auf eine Gruppe -> Prädikat (Alle, Einige, Einer, Keiner) -> Operator -> Vergleichtswert
|Antworttyp  |X |X |X |X |Freie, One of X, Y of X Antworten

### 2.3.3) Gruppen !!!! TODO 
**Kontext**  
Dieses Konstrukt gruppiert Fragen. Dadurch können die Umfragen einfacher strukturiert werden

**Attribute**  
* Bedingung (Wann ist die Gruppe sichtbar)
* Validierung (Müssen alle Fragen validiert sein, oder nur eine oder mindestens eine)

### 2.3.4) Bedingungen !!!! TODO

Das System muss Fragen anzeigen wenn die Bedingung mit true evaluiert wurde
Solange keine Bedingung explizit eingetragen wurde, wird das System die Bedingung mit true evaluieren

**Beispiele**  
* ("FrageID",EQ,"Anwortmöglichkeit") -> ("Geschlecht",EQ,"Männlich") -> Funktioniert bei freien Antworten, Radiobox antworten (= die einzige Antwort) und Checkbox Antworten (-> bei nur einer Antwort)
* ("FrageID",IN,"Antwort1","Antwort2") 
* ("FrageID",ANSWERED)

# 3) Anforderungsanalyse Userverwaltung
## 3.1) Feature Übersicht

|Feature                    |V1|V2|V3|V4|Kommentar|
|---------------------------|--|--|--|--|-|
|Cookie-SessionBased User   |X |? |? |? |Bei erster Anmeldung Abfrage nach *Nickname*
|Integrierte Userverwaltung |  |X |X |X |
|Anbindung an AD/LDAP       |  |  |  |X |
|Gruppenverwaltung          |  |X |X |X |
|Anonyme User               |  |  |  |X |Möglichkeit Teilnehmer/User untrackbar zu machen


## 3.2) Stories
### 3.2.1) Stories V1 
|Req#|Req-Beschreibung|
|-|---|
|R1.2.01|Sobald ein Besucher Project-Clara betritt, kann er einen Nickname für sich einstellen (Default UserRandomNumber)
|R1.2.02|Project-Clara muss dem Besucher die Möglichkeit geben, seinen Namen zu ändern

## 3.3) Artefakte
### 3.3.1) User
**Attribute**

|Attributname|V1|V2|V3|V4|Kommentar|
|------------|--|--|--|--|--|
|Unique Id   |X |X |X |X |
|Username    |X |X |X |X |
|User/AnoId  |  |X |X |X |Für V1 SessionID/Cookie?|

# 3) Anforderungsanalyse Eventverwaltung !!! TODO
## 3.1) Feature Übersicht 

|Feature                    |V1|V2|V3|V4|Kommentar|
|---------------------------|--|--|--|--|-|
|Anlegen eines Events       |X |X |X |X |
|Ticket ziehen/reservieren  |X |X |X |X |
|Berechtigung der Anlage    |  |X |X |X |Beschränkung der Anlage auf Administratoren



## 3.2) Stories
### 3.2.1) Stories V1 
|Req#|Req-Beschreibung|
|-|---|
|R1.3.01|Project-Clara muss jedem die Möglichkeit bieten, über einen Event-Editor ein neues Event anzulegen

## 3.3) Artefakte
### 3.3.1) Event !!! TODO
**Attribute**

|Attributname|V1|V2|V3|V4|Kommentar|
|------------|--|--|--|--|--|
|Unique Id   |X |X |X |X |
|Titel       |X |X |X |X |