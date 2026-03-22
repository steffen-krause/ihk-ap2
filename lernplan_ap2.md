# IHK AP2 Lernplan – Fachinformatiker Anwendungsentwicklung (Sommer 2026)

> **Priorisierung basiert auf:** Statistischer Auswertung aller bisherigen IHK-Prüfungen seit 2020 (Punkte & Häufigkeit), dem aktuellen Prüfungskatalog ab 2025, sowie deinen persönlichen Stärken/Schwächen.

---

## 📋 Prüfungsstruktur AP2 (Überblick)

| Prüfungsbereich | Dauer | Anteil Gesamtnote | Bestehensgrenze |
|---|---|---|---|
| Betriebliche Projektarbeit | — | 50% | mind. 50% |
| **GA1: Planen eines Softwareproduktes** | **90 min** | **10%** | **mind. 50%** |
| **GA2: Entwicklung und Umsetzung von Algorithmen** | **90 min** | **10%** | **mind. 50%** |
| **WiSo** | **60 min (MC)** | **10%** | **mind. 50%** |

**Wichtig:** Jeder Bereich muss einzeln bestanden werden (min. 50 Punkte). Du darfst in höchstens zwei Bereichen unter 50 Punkte haben, aber kein Bereich darf unter 30 Punkte fallen.

---

## Prioritätsstufen

- 🔴 **PRIO 1 – SOFORT LERNEN** (meiste Punkte + deine Schwäche)
- 🟠 **PRIO 2 – WICHTIG** (häufig geprüft, solide Grundlage nötig)
- 🟡 **PRIO 3 – MITTEL** (regelmäßig geprüft, aber weniger Punkte)
- 🟢 **PRIO 4 – NICE TO HAVE** (selten / deine Stärke, überfliegen reicht)

---

---

# 🔴 PRIO 1 – Pseudocode & Algorithmen

> **Warum #1?** Pseudocode ist mit weitem Abstand das punktereichste Einzelthema aller bisherigen AP2-Prüfungen. Typisch: Eine volle DIN-A4-Seite Pseudocode-Aufgabe für 20-25 Punkte. Du sagst, du kannst es lesen, brauchst aber lang → hier ist Übung der Schlüssel.

## Grundregeln für Pseudocode in der IHK-Prüfung

**Faustregel:** Der Pseudocode muss für Dritte lesbar sein, die deine Programmiersprache NICHT kennen. Kein JS/PHP-Syntax nötig – allgemeinverständlich schreiben.

### Kontrollstrukturen – So schreibst du sie in der Prüfung

```
// Verzweigung
WENN bedingung DANN
    anweisung
SONST
    anweisung
ENDE WENN

// Schleife (zählergesteuert)
FÜR i = 0 BIS n - 1 MIT SCHRITT +1
    anweisung
ENDE FÜR

// Schleife (kopfgesteuert)
SOLANGE bedingung
    anweisung
ENDE SOLANGE

// Schleife (fußgesteuert)
WIEDERHOLE
    anweisung
BIS bedingung

// Fallunterscheidung
FALLS variable
    FALL wert1: anweisung
    FALL wert2: anweisung
    SONST: anweisung
ENDE FALLS
```

### Sortieralgorithmen (im neuen Prüfungskatalog ab 2025 explizit!)

**Faustregel Komplexität:**
- Bubble Sort, Selection Sort, Insertion Sort → alle O(n²) im Worst Case
- Bei kleinen Datenmengen reicht das aus

#### Bubble Sort
**Idee:** Vergleiche immer zwei Nachbarn, tausche wenn falsch. Das größte Element "blubbert" ans Ende.

```
FÜR i = n - 1 BIS 1 MIT SCHRITT -1
    FÜR j = 0 BIS i - 1 MIT SCHRITT +1
        WENN array[j] > array[j + 1] DANN
            tausche array[j] mit array[j + 1]
        ENDE WENN
    ENDE FÜR
ENDE FÜR
```
**Faustregel:** Bubble Sort = "Paarweise vergleichen, Großes nach rechts blubbern lassen"

#### Selection Sort
**Idee:** Suche das kleinste Element im unsortierten Rest und tausche es an die nächste Position.

```
FÜR i = 0 BIS n - 2 MIT SCHRITT +1
    minIndex = i
    FÜR j = i + 1 BIS n - 1 MIT SCHRITT +1
        WENN array[j] < array[minIndex] DANN
            minIndex = j
        ENDE WENN
    ENDE FÜR
    WENN minIndex != i DANN
        tausche array[i] mit array[minIndex]
    ENDE WENN
ENDE FÜR
```
**Faustregel:** Selection Sort = "Immer das Minimum suchen und nach vorne holen"

#### Insertion Sort
**Idee:** Wie Karten sortieren auf der Hand – nimm das nächste Element und füge es an die richtige Stelle im bereits sortierten Teil ein.

```
FÜR i = 1 BIS n - 1 MIT SCHRITT +1
    element = array[i]
    j = i - 1
    SOLANGE j >= 0 UND array[j] > element
        array[j + 1] = array[j]
        j = j - 1
    ENDE SOLANGE
    array[j + 1] = element
ENDE FÜR
```
**Faustregel:** Insertion Sort = "Karten einsortieren – nimm eins rechts, schieb alles Größere nach rechts"

### Suchalgorithmen

#### Lineare Suche
```
FÜR i = 0 BIS länge(array) - 1 MIT SCHRITT +1
    WENN array[i] = gesucht DANN
        RÜCKGABE i
    ENDE WENN
ENDE FÜR
RÜCKGABE -1    // nicht gefunden
```
**Komplexität:** O(n) – muss im schlimmsten Fall alles durchgehen.

#### Binäre Suche
**Voraussetzung:** Array MUSS sortiert sein!

```
links = 0
rechts = länge(array) - 1
SOLANGE links <= rechts
    mitte = links + abrunden((rechts - links) / 2)
    WENN array[mitte] = gesucht DANN
        RÜCKGABE mitte
    ENDE WENN
    WENN array[mitte] < gesucht DANN
        links = mitte + 1
    SONST
        rechts = mitte - 1
    ENDE WENN
ENDE SOLANGE
RÜCKGABE -1    // nicht gefunden
```
**Komplexität:** O(log n) – halbiert den Suchbereich jedes Mal.

**Faustregel:** "Binäre Suche = Telefonbuch aufschlagen: Zu weit vorne? Hintere Hälfte nehmen."

### Rekursion

**Faustregel:** Jede Rekursion braucht:
1. **Basisfall** (Abbruchbedingung) → sonst Stack Overflow
2. **Rekursiver Aufruf** der sich dem Basisfall nähert

```
FUNKTION fakultaet(n)
    WENN n <= 1 DANN
        RÜCKGABE 1              // Basisfall
    SONST
        RÜCKGABE n * fakultaet(n - 1)   // Rekursiver Aufruf
    ENDE WENN
ENDE FUNKTION
```

**Vorteile:** Elegant für Bäume, Graphen, verschachtelte Strukturen
**Nachteile:** Hoher Speicherverbrauch (Stack), Gefahr von Stack Overflow

### Typische Prüfungsaufgaben (zum Üben)

**Übung 1:** Schreibe Pseudocode, der aus einem Array alle doppelten Einträge entfernt.

<details>
<summary>Lösung aufklappen</summary>

```
gesehen = leere Menge
ergebnis = leeres Array
FÜR JEDES element IN array
    WENN element NICHT IN gesehen DANN
        füge element zu gesehen hinzu
        füge element zu ergebnis hinzu
    ENDE WENN
ENDE FÜR
RÜCKGABE ergebnis
```
</details>

**Übung 2:** Schreibe Pseudocode für die Berechnung des Durchschnitts aller Werte in einem Array.

<details>
<summary>Lösung aufklappen</summary>

```
summe = 0
FÜR i = 0 BIS länge(array) - 1 MIT SCHRITT +1
    summe = summe + array[i]
ENDE FÜR
durchschnitt = summe / länge(array)
RÜCKGABE durchschnitt
```
</details>

**Übung 3:** Schreibe Pseudocode für die Authentifizierung eines Benutzers (mit Fehlversuche-Zähler).

<details>
<summary>Lösung aufklappen</summary>

```
maxVersuche = 3
versuch = 0
SOLANGE versuch < maxVersuche
    eingabeName = leseEingabe("Benutzername")
    eingabePasswort = leseEingabe("Passwort")
    WENN prüfeAnmeldedaten(eingabeName, eingabePasswort) = wahr DANN
        RÜCKGABE "Anmeldung erfolgreich"
    SONST
        versuch = versuch + 1
        ausgabe("Falsches Passwort. Noch " + (maxVersuche - versuch) + " Versuche.")
    ENDE WENN
ENDE SOLANGE
RÜCKGABE "Konto gesperrt"
```
</details>

---

# 🔴 PRIO 1 – SQL

> **Warum #1?** SQL ist das zweitpunktereichste Einzelthema. SELECT-Abfragen machen den Großteil aus. Ab 2025 gibt es sogar ein eigenes SQL-Beiblatt in der Prüfung. Du sagst, du musst lange nachdenken → hier hilft ein festes Schema.

## SQL-Kategorien – Faustregel

| Kategorie | Bedeutung | Befehle | Faustregel |
|---|---|---|---|
| **DDL** | Data Definition Language | CREATE, ALTER, DROP, TRUNCATE | "**D**efiniert die **D**atenbank**L**andschaft" |
| **DML** | Data Manipulation Language | INSERT, UPDATE, DELETE | "**M**anipuliert die **D**aten" |
| **DQL** | Data Query Language | SELECT | "**Q**uery = Abfrage" |
| **DCL** | Data Control Language | GRANT, REVOKE | "**C**ontrolliert die Rechte" |
| **TCL** | Transaction Control Language | BEGIN, COMMIT, ROLLBACK, SAVEPOINT | "**T**ransaktionen steuern" |

## SELECT – Das Schweizer Taschenmesser

**Faustregel für die Reihenfolge (auswendig lernen!):**

```
SELECT   spalte(n)          -- WAS will ich sehen?
FROM     tabelle             -- WOHER kommen die Daten?
JOIN     tabelle2 ON ...     -- MIT welcher Tabelle verknüpfen?
WHERE    bedingung           -- WELCHE Zeilen filtern? (vor Gruppierung)
GROUP BY spalte              -- WONACH gruppieren?
HAVING   bedingung           -- WELCHE Gruppen filtern? (nach Gruppierung)
ORDER BY spalte ASC/DESC     -- WIE sortieren?
LIMIT    anzahl              -- WIE VIELE Ergebnisse?
```

**Merksatz für die Reihenfolge:** **S**chöne **F**rauen **J**oggen **W**enig, **G**roße **H**aben **O**ft **L**ust
(SELECT FROM JOIN WHERE GROUP BY HAVING ORDER BY LIMIT)

### WHERE vs. HAVING

**Faustregel:**
- `WHERE` filtert **einzelne Zeilen** (vor der Gruppierung)
- `HAVING` filtert **Gruppen** (nach GROUP BY, funktioniert mit Aggregatfunktionen)

```sql
-- Alle Kunden aus Hamburg mit mehr als 5 Bestellungen
SELECT kunde_id, COUNT(*) AS anzahl
FROM bestellungen
WHERE stadt = 'Hamburg'          -- filtert Zeilen VOR Gruppierung
GROUP BY kunde_id
HAVING COUNT(*) > 5;             -- filtert Gruppen NACH Gruppierung
```

### Aggregatfunktionen

| Funktion | Was sie tut | Beispiel |
|---|---|---|
| `COUNT(*)` | Zählt alle Zeilen | `SELECT COUNT(*) FROM kunden;` |
| `COUNT(spalte)` | Zählt nicht-NULL-Werte | `SELECT COUNT(email) FROM kunden;` |
| `SUM(spalte)` | Summe | `SELECT SUM(preis) FROM bestellungen;` |
| `AVG(spalte)` | Durchschnitt | `SELECT AVG(gehalt) FROM mitarbeiter;` |
| `MIN(spalte)` | Kleinster Wert | `SELECT MIN(preis) FROM produkte;` |
| `MAX(spalte)` | Größter Wert | `SELECT MAX(preis) FROM produkte;` |

### JOINs – Die 4 wichtigsten

**Faustregel:** Stell dir zwei Kreise vor (Venn-Diagramm):

```
INNER JOIN  = Nur die Schnittmenge (beide Tabellen haben passende Daten)
LEFT JOIN   = Alles links + Schnittmenge (linke Tabelle komplett, rechts NULL wenn kein Match)
RIGHT JOIN  = Alles rechts + Schnittmenge (rechte Tabelle komplett, links NULL wenn kein Match)
CROSS JOIN  = Kartesisches Produkt (jede Zeile mit jeder → selten gewollt!)
```

```sql
-- INNER JOIN: Nur Kunden MIT Bestellungen
SELECT k.name, b.datum
FROM kunden k
INNER JOIN bestellungen b ON k.id = b.kunde_id;

-- LEFT JOIN: ALLE Kunden, auch die ohne Bestellungen
SELECT k.name, b.datum
FROM kunden k
LEFT JOIN bestellungen b ON k.id = b.kunde_id;

-- Trick: Kunden OHNE Bestellungen finden
SELECT k.name
FROM kunden k
LEFT JOIN bestellungen b ON k.id = b.kunde_id
WHERE b.id IS NULL;
```

### Subqueries

```sql
-- Alle Produkte teurer als der Durchschnitt
SELECT name, preis
FROM produkte
WHERE preis > (SELECT AVG(preis) FROM produkte);

-- Alle Kunden, die MINDESTENS eine Bestellung haben
SELECT name FROM kunden
WHERE id IN (SELECT kunde_id FROM bestellungen);
```

### DDL – Tabellen erstellen und ändern

```sql
-- Tabelle erstellen
CREATE TABLE mitarbeiter (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    vorname     VARCHAR(50) NOT NULL,
    nachname    VARCHAR(100) NOT NULL,
    gehalt      DECIMAL(10,2),
    abteilung_id INT,
    FOREIGN KEY (abteilung_id) REFERENCES abteilungen(id)
);

-- Spalte hinzufügen
ALTER TABLE mitarbeiter ADD email VARCHAR(255);

-- Spalte ändern
ALTER TABLE mitarbeiter MODIFY gehalt DECIMAL(12,2) NOT NULL;

-- Spalte löschen
ALTER TABLE mitarbeiter DROP COLUMN email;

-- Tabelle löschen
DROP TABLE mitarbeiter;

-- Nur Daten löschen, Struktur behalten
TRUNCATE TABLE mitarbeiter;
```

### DML – Daten manipulieren

```sql
-- Einfügen
INSERT INTO mitarbeiter (vorname, nachname, gehalt) VALUES ('Max', 'Meier', 45000.00);

-- Aktualisieren (IMMER mit WHERE, sonst alles geändert!)
UPDATE mitarbeiter SET gehalt = 50000.00 WHERE id = 1;

-- Löschen (IMMER mit WHERE!)
DELETE FROM mitarbeiter WHERE id = 1;
```

### LIKE-Syntax (Platzhalter)

| Platzhalter | Bedeutung | Beispiel | Findet |
|---|---|---|---|
| `%` | Beliebig viele Zeichen | `LIKE 'M%'` | Max, Müller, Maria |
| `_` | Genau ein Zeichen | `LIKE 'M__er'` | Meier, Mayer |

### Mengoperationen

```sql
-- UNION: Ergebnisse zusammenführen (ohne Duplikate)
SELECT name FROM kunden_de UNION SELECT name FROM kunden_at;

-- UNION ALL: Mit Duplikaten
SELECT name FROM kunden_de UNION ALL SELECT name FROM kunden_at;
```

**Voraussetzung:** Beide SELECTs müssen gleich viele Spalten mit kompatiblen Datentypen haben.

### SQL Injection (als Sicherheitsthema!)

**Was ist das?** Angreifer schleust SQL-Code über Benutzereingaben ein.

**Klassisches Beispiel:**
```
Eingabe Benutzername: ' OR '1'='1
→ SELECT * FROM users WHERE name = '' OR '1'='1'
→ Gibt ALLE User zurück!
```

**Gegenmaßnahmen:**
1. **Prepared Statements / Parametrisierte Abfragen** (wichtigste Maßnahme!)
2. Eingabevalidierung
3. Minimale Datenbankrechte (Least Privilege)

### Übungsaufgaben SQL

**Übung 1:** Gegeben: Tabellen `kunden(id, name, stadt)` und `bestellungen(id, kunde_id, datum, betrag)`.
Finde alle Kunden aus Hamburg, die mehr als 1000€ insgesamt bestellt haben, sortiert nach Gesamtbetrag absteigend.

<details>
<summary>Lösung</summary>

```sql
SELECT k.name, SUM(b.betrag) AS gesamt
FROM kunden k
INNER JOIN bestellungen b ON k.id = b.kunde_id
WHERE k.stadt = 'Hamburg'
GROUP BY k.name
HAVING SUM(b.betrag) > 1000
ORDER BY gesamt DESC;
```
</details>

**Übung 2:** Erstelle eine Tabelle `projekte` mit ID (Auto-Increment), Name (max 100 Zeichen, Pflichtfeld), Startdatum und einem Fremdschlüssel auf `mitarbeiter(id)`.

<details>
<summary>Lösung</summary>

```sql
CREATE TABLE projekte (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(100) NOT NULL,
    startdatum      DATE,
    mitarbeiter_id  INT,
    FOREIGN KEY (mitarbeiter_id) REFERENCES mitarbeiter(id)
);
```
</details>

---

# 🔴 PRIO 1 – Datenbanken (Theorie & Modellierung)

> **Warum #1?** Datenbanken sind der häufigste Themencluster in der AP2, der in fast JEDER Prüfung und in BEIDEN Prüfungsteilen (GA1 und GA2) vorkommt. Durchfallgefahr bei Nicht-Können!

## ER-Modell (Entity-Relationship-Modell)

**Bestandteile:**
- **Entität** = ein Objekt/Ding (z.B. Kunde, Produkt) → Rechteck
- **Attribut** = Eigenschaft einer Entität (z.B. Name, Preis) → Oval
- **Beziehung** = Verknüpfung zwischen Entitäten → Raute
- **Kardinalität** = Wie viele? (1:1, 1:n, m:n)

### Kardinalitäten – Faustregel

| Kardinalität | Beispiel | Merkhilfe |
|---|---|---|
| **1:1** | Person ↔ Personalausweis | "Jeder hat genau einen" |
| **1:n** | Abteilung ↔ Mitarbeiter | "Einer hat viele" |
| **m:n** | Student ↔ Kurs | "Viele haben viele" → braucht Zwischentabelle! |

**Faustregel m:n:** Eine m:n-Beziehung wird im relationalen Modell IMMER in eine Zwischentabelle (Assoziationstabelle) aufgelöst. Diese enthält die Fremdschlüssel beider Tabellen als zusammengesetzten Primärschlüssel.

### Vom ER-Modell zum Relationalen Modell

1. Jede Entität wird zu einer **Tabelle**
2. Jedes Attribut wird zu einer **Spalte**
3. Jeder Entitätstyp bekommt einen **Primärschlüssel**
4. 1:n-Beziehungen: Fremdschlüssel auf der "n-Seite"
5. m:n-Beziehungen: Neue Zwischentabelle

### Schlüsseltypen

| Schlüssel | Erklärung | Faustregel |
|---|---|---|
| **Primärschlüssel** | Identifiziert Zeile eindeutig, nie NULL | "Der Fingerabdruck der Zeile" |
| **Fremdschlüssel** | Verweist auf Primärschlüssel einer anderen Tabelle | "Der Zeigefinger auf eine andere Tabelle" |
| **Kandidatenschlüssel** | Könnte Primärschlüssel sein (eindeutig + minimal) | "Die Bewerber für den PK-Job" |
| **Alternativschlüssel** | Kandidatenschlüssel, der nicht PK wurde | "Der Zweitplatzierte" |
| **Zusammengesetzter Schlüssel** | Mehrere Spalten bilden zusammen den PK | "Teamarbeit nötig für Eindeutigkeit" |

## Normalisierung (1NF → 2NF → 3NF)

**Mega-Merksatz:** "**The key, the whole key, and nothing but the key** – so help me Codd."

### 1. Normalform (1NF)
**Bedingung:** Jedes Attribut enthält nur **atomare** (unteilbare) Werte.

❌ Falsch: `Adresse = "Musterstr. 1, 49074 Osnabrück"`
✅ Richtig: `Straße = "Musterstr. 1"`, `PLZ = "49074"`, `Stadt = "Osnabrück"`

**Faustregel:** "Keine Listen, keine Kommas in einer Zelle. Jede Zelle = ein Wert."

### 2. Normalform (2NF)
**Bedingung:** 1NF + jedes Nicht-Schlüssel-Attribut hängt vom **gesamten** Primärschlüssel ab (nicht nur einem Teil).

*Relevant nur bei zusammengesetzten Primärschlüsseln!*

❌ Falsch: PK = (KursID, StudentID), aber `Kursname` hängt nur von `KursID` ab.
✅ Richtig: `Kursname` in eigene Tabelle `Kurse` auslagern.

**Faustregel:** "Hängt es nur von einem TEIL des Schlüssels ab? → Eigene Tabelle!"

### 3. Normalform (3NF)
**Bedingung:** 2NF + keine **transitiven Abhängigkeiten** unter Nicht-Schlüssel-Attributen.

❌ Falsch: Mitarbeiter-Tabelle mit `AbteilungsID`, `Abteilungsname`, `Abteilungsleiter`
→ `Abteilungsname` hängt von `AbteilungsID` ab, nicht vom PK der Mitarbeiter.
✅ Richtig: `Abteilungsname` und `Abteilungsleiter` in Tabelle `Abteilungen` auslagern.

**Faustregel:** "Nicht-Schlüssel-Attribute dürfen nicht von anderen Nicht-Schlüssel-Attributen abhängen."

## Anomalien

| Anomalie | Problem | Beispiel |
|---|---|---|
| **Einfüge-Anomalie** | Daten können nicht eingefügt werden, weil PK-Teile fehlen | Neuer Kurs kann nicht angelegt werden, weil noch kein Student angemeldet ist |
| **Änderungs-Anomalie** | Änderung muss an vielen Stellen gleichzeitig erfolgen | Adressänderung eines Kunden muss in 50 Bestellzeilen geändert werden |
| **Lösch-Anomalie** | Beim Löschen gehen ungewollt andere Daten verloren | Letzte Bestellung löschen → Kundendaten sind auch weg |

**Faustregel:** "Anomalien = Symptome mangelnder Normalisierung. Lösung: Normalisieren!"

## Referentielle Integrität

Stellt sicher, dass Fremdschlüssel immer auf existierende Primärschlüssel verweisen.

**Was passiert beim Löschen eines referenzierten Datensatzes?**

| Constraint | Verhalten |
|---|---|
| `CASCADE` | Abhängige Datensätze werden mitgelöscht |
| `RESTRICT` / `NO ACTION` | Löschen wird verhindert |
| `SET NULL` | Fremdschlüssel wird auf NULL gesetzt |

## ACID-Prinzipien (Transaktionen)

| Buchstabe | Bedeutung | Faustregel |
|---|---|---|
| **A**tomicity | Alles oder nichts | "Ganz oder gar nicht – wie eine Überweisung" |
| **C**onsistency | DB ist vorher und nachher in gültigem Zustand | "Regeln werden nie gebrochen" |
| **I**solation | Transaktionen stören sich nicht gegenseitig | "Jeder arbeitet in seiner eigenen Blase" |
| **D**urability | Nach Commit bleiben Daten auch bei Stromausfall | "Was gespeichert ist, bleibt gespeichert" |

## Datenbankmodelle (kurz)

| Modell | Merkmal | Beispiele |
|---|---|---|
| **Relational** | Tabellen mit Beziehungen | MySQL, PostgreSQL, MariaDB, MS SQL |
| **Dokumentenorientiert** | JSON-ähnliche Dokumente | MongoDB, CouchDB |
| **Key-Value** | Schlüssel-Wert-Paare, ultra schnell | Redis, DynamoDB |
| **Spaltenorientiert** | Spaltenweise Speicherung | Cassandra, HBase |
| **Graphendatenbank** | Knoten & Kanten (Beziehungen) | Neo4j, Amazon Neptune |

### CAP-Theorem
Ein verteiltes System kann nur 2 von 3 Eigenschaften gleichzeitig garantieren:
- **C**onsistency (alle sehen dieselben Daten)
- **A**vailability (System antwortet immer)
- **P**artition Tolerance (läuft trotz Netzwerkausfall weiter)

**Faustregel:** "CAP = Pick 2 out of 3. Relationale DB → CA. NoSQL → oft AP oder CP."

### ACID vs. BASE

| ACID (Relational) | BASE (NoSQL) |
|---|---|
| Strenge Konsistenz | Eventual Consistency |
| Transaktionssicher | Verfügbarkeit priorisiert |
| Für kritische Daten (Bankwesen) | Für verteilte, hoch verfügbare Systeme |

## Datenbank-Objekte (Kurzübersicht)

| Objekt | Was ist das? |
|---|---|
| **Index** | Beschleunigt Abfragen (wie ein Buchindex) |
| **View** | Gespeicherte SELECT-Abfrage als "virtuelle Tabelle" |
| **Stored Procedure** | Gespeichertes SQL-Programm in der DB |
| **Trigger** | Automatisch ausgeführtes Programm bei INSERT/UPDATE/DELETE |
| **Sequence** | Generiert fortlaufende Nummern |

---

# 🔴 PRIO 1 – UML-Diagramme

> **Warum #1?** UML bringt mit am meisten Punkte. Aktivitätsdiagramm ist das punktereichste UML-Diagramm. Ab 2025: Struktogramm und PAP sind GESTRICHEN – stattdessen Aktivitätsdiagramm!

## Die 5 prüfungsrelevanten UML-Diagramme

### 1. Aktivitätsdiagramm (meiste Punkte!)

**Zweck:** Algorithmen / Abläufe grafisch darstellen (Ersatz für PAP und Struktogramm!)

**Elemente:**
- ● Startknoten (ausgefüllter Kreis)
- ◉ Endknoten (Kreis mit Ring)
- ▭ Aktion (abgerundetes Rechteck)
- ◇ Entscheidung (Raute mit [Bedingungen])
- ═ Parallelisierung / Synchronisation (dicker Balken, Fork/Join)
- → Kontrollfluss (Pfeil)

**Faustregel:** "Aktivitätsdiagramm = Flussdiagramm auf Steroiden. Startpunkt → Aktionen → Entscheidungen → Endpunkt."

### 2. Klassendiagramm (zweithäufigste Punkte bei UML)

**Aufbau einer Klasse:**

```
┌───────────────────┐
│     Klassenname    │
├───────────────────┤
│ - attribut: Typ   │  (- = private)
│ + attribut: Typ   │  (+ = public)
│ # attribut: Typ   │  (# = protected)
├───────────────────┤
│ + methode(): Typ  │
│ - methode(): void │
└───────────────────┘
```

**Beziehungen:**

| Pfeil | Bedeutung | Beispiel |
|---|---|---|
| ——→ | Assoziation (kennt) | Kunde → Bestellung |
| ◇——→ | Aggregation (hat, Teil von, aber unabhängig) | Team ◇→ Spieler |
| ◆——→ | Komposition (besteht aus, existenzabhängig) | Haus ◆→ Zimmer |
| ——▷ | Vererbung (ist ein) | Hund ——▷ Tier |
| - - -▷ | Implementierung (Interface) | Klasse - - -▷ Interface |

**Faustregel Aggregation vs. Komposition:**
- **Aggregation** (leere Raute): "Kann auch ohne das Ganze existieren" (Spieler existiert auch ohne Team)
- **Komposition** (volle Raute): "Stirbt mit dem Ganzen" (Zimmer existiert nicht ohne Haus)

### 3. Sequenzdiagramm

**Zweck:** Zeitliche Abfolge von Nachrichten zwischen Objekten darstellen.

**Elemente:**
- Objekte oben als Rechtecke mit :Klassenname
- Senkrechte gestrichelte Lebenslinien
- Waagerechte Pfeile = Nachrichten/Methodenaufrufe
- Aktivierungsbalken = Objekt ist aktiv
- Gestrichelte Rückpfeile = Rückgabewert

### 4. Anwendungsfalldiagramm (Use-Case)

**Elemente:**
- Strichmännchen = Akteur (Benutzer, externes System)
- Ovale = Anwendungsfälle (Was kann der Nutzer tun?)
- Systemgrenze = Rahmen um die Ovale
- Linien = Beziehungen (include, extend)

**Faustregel:** `<<include>>` = wird IMMER aufgerufen. `<<extend>>` = wird OPTIONAL aufgerufen.

### 5. Zustandsdiagramm

**Zweck:** Alle möglichen Zustände eines Objekts und die Übergänge zwischen ihnen.

**Elemente:**
- Zustände als abgerundete Rechtecke
- Pfeile = Übergänge mit [Bedingung] / Ereignis
- Startpunkt ● und Endpunkt ◉

**Beispiel:** Bestellung → [bezahlt] → in Bearbeitung → [versendet] → Unterwegs → [angekommen] → Abgeschlossen

---

# 🟠 PRIO 2 – Testen & Qualitätssicherung

> Regelmäßig geprüft, oft als Teil größerer Aufgaben. Ab 2025 neu: TDD, Last-/Performancetests explizit im Katalog.

## Testarten (nach Scope)

| Testart | Was wird getestet? | Rolle in der Testpyramide |
|---|---|---|
| **Unit-Test** | Einzelne Methode/Funktion | Basis (viele, schnell, günstig) |
| **Integrationstest** | Zusammenspiel mehrerer Module | Mitte |
| **Systemtest / E2E** | Gesamtes System aus Benutzersicht | Spitze (wenige, langsam, teuer) |
| **Akzeptanztest** | Erfüllt es die Geschäftsanforderungen? | Abnahme durch Kunden |

**Faustregel Testpyramide:** "Viele Unit-Tests unten, wenige E2E-Tests oben. Je höher, desto teurer."

## Testverfahren

| Verfahren | Kenntnis des Codes? | Was wird geprüft? |
|---|---|---|
| **Black Box** | Nein | Nur Ein-/Ausgabe, keine Codekenntnis |
| **White Box** | Ja | Interner Code, Abdeckung, Pfade |

### Überdeckungstests (White Box) – ab 2025 wichtig!

| Level | Name | Was wird abgedeckt? | Wann verwenden |
|---|---|---|---|
| C0 | Anweisungsüberdeckung | Jede Codezeile mindestens 1x ausgeführt | Nur Anweisungen, keine Verzweigungen |
| C1 | Entscheidungsüberdeckung | Jedes if/else einmal true und einmal false | Mehrere if/else-Pfade |
| C2 | Bedingungsüberdeckung | Jede Teilbedingung einmal true/false | Komplexe boolesche Ausdrücke |

**Faustregel:** "C0 < C1 < C2 → je höher, desto gründlicher aber aufwändiger."

### Testfallermittlung (Black Box)

- **Äquivalenzklassen:** Eingaben in Klassen teilen (gültig/ungültig). Pro Klasse reicht EIN Testfall.
- **Grenzwertanalyse:** An den Grenzen der Äquivalenzklassen testen (Ränder sind fehleranfällig!).

**Beispiel:** Eingabe Alter (gültig: 0-150)
- Äquivalenzklassen: {<0}, {0-150}, {>150}
- Grenzwerte: -1, 0, 1, 149, 150, 151

## Test-Doubles

| Typ | Was ist das? |
|---|---|
| **Stub** | Liefert vordefinierte Antworten (passiv) |
| **Mock** | Überprüft, ob bestimmte Aufrufe passiert sind (aktiv) |

**Faustregel:** "Stub = Fälschung die antwortet. Mock = Spion der mithört."

## TDD (Test Driven Development) – NEU ab 2025

**Zyklus:** Red → Green → Refactor
1. **Red:** Test schreiben, der fehlschlägt
2. **Green:** Minimalen Code schreiben, damit Test besteht
3. **Refactor:** Code verbessern, alle Tests müssen weiter grün sein

## Qualitätsmanagement

### PDCA-Zyklus
**P**lan → **D**o → **C**heck → **A**ct (und dann wieder von vorne)

| Phase | Was passiert? |
|---|---|
| Plan | Problem analysieren, Maßnahmen planen |
| Do | Maßnahmen umsetzen (erst im Kleinen) |
| Check | Ergebnisse prüfen (Soll-Ist-Vergleich) |
| Act | Bei Erfolg: Standardisieren. Bei Misserfolg: Neuer Durchlauf |

### KVP (Kontinuierlicher Verbesserungsprozess)
= Stetige kleine Verbesserungen statt großer Umbrüche. Grundprinzip von ISO 9001.

### Softwarequalität nach ISO 25010 (Kurzform)

Die 8 Hauptmerkmale (Akronym: **FP-CURMS-P**):

1. **F**unctional Suitability (Funktionale Eignung)
2. **P**erformance Efficiency (Leistungseffizienz)
3. **C**ompatibility (Kompatibilität)
4. **U**sability (Gebrauchstauglichkeit)
5. **R**eliability (Zuverlässigkeit)
6. **M**aintainability (Wartbarkeit)
7. **S**ecurity (Sicherheit)
8. **P**ortability (Übertragbarkeit)

---

# 🟠 PRIO 2 – IT-Sicherheit & Datenschutz

> Kommt regelmäßig dran, ab 2025 mit konkreten Bedrohungsszenarien (MitM, SQL-Injection, DDoS).

## CIA-Triade (Schutzziele)

| Schutzziel | Bedeutung | Bedrohung |
|---|---|---|
| **C**onfidentiality (Vertraulichkeit) | Nur Berechtigte sehen die Daten | Datendiebstahl, Abhören |
| **I**ntegrity (Integrität) | Daten sind unverändert und korrekt | Manipulation, Man-in-the-Middle |
| **A**vailability (Verfügbarkeit) | System ist erreichbar wenn nötig | DDoS, Ransomware, Stromausfall |

## Bedrohungsszenarien (ab 2025 explizit!)

| Angriff | Was passiert? | Gegenmaßnahme |
|---|---|---|
| **SQL-Injection** | SQL-Code über Benutzereingabe eingeschleust | Prepared Statements, Eingabevalidierung |
| **Man-in-the-Middle** | Angreifer fängt Kommunikation ab/verändert | Verschlüsselung (TLS/HTTPS), Zertifikate |
| **DDoS** | Massenhafte Anfragen legen Server lahm | Firewall, CDN, Traffic-Filterung, Rate Limiting |
| **XSS** | Schadcode in Webseite eingeschleust | Output-Encoding, Content Security Policy |
| **CSRF** | Opfer führt ungewollt Aktion aus | CSRF-Tokens, SameSite-Cookies |
| **Phishing** | Gefälschte E-Mails/Websites | Schulung, 2FA, E-Mail-Filter |
| **Ransomware** | Daten verschlüsselt, Lösegeld gefordert | Backups, Updates, Awareness |

## Zutritt / Zugang / Zugriff

**Faustregel:** Von physisch nach digital:

| Ebene | Was? | Beispiele |
|---|---|---|
| **Zutritt** | Wer darf ins Gebäude/Raum? | Schlüsselkarte, Alarmanlage, Videoüberwachung |
| **Zugang** | Wer darf an das System? | Passwort, Biometrie, 2FA |
| **Zugriff** | Wer darf welche Daten sehen/ändern? | Rollen/Rechte-Konzept, Dateiberechtigungen |

## Verschlüsselung

| Art | Wie funktioniert es? | Beispiel |
|---|---|---|
| **Symmetrisch** | Ein Schlüssel für Ver- UND Entschlüsselung | AES (schnell, für große Datenmengen) |
| **Asymmetrisch** | Öffentlicher + privater Schlüssel | RSA, TLS/HTTPS (sichererer Schlüsseltausch) |
| **Hashverfahren** | Einweg-Prüfsumme (nicht umkehrbar!) | SHA-256, bcrypt (Passwörter!) |

**Faustregel:** "Symmetrisch = schnell, ein Schlüssel. Asymmetrisch = sicher, zwei Schlüssel. Hash = Einweg."

## TOM (Technisch-Organisatorische Maßnahmen)

**Technisch:** Firewall, Verschlüsselung, Zugriffskontrolle, Backup, USV
**Organisatorisch:** Schulungen, Richtlinien, Besucherregeln, Clean Desk Policy

## Schutzbedarfskategorien (BSI)

| Kategorie | Max. finanzieller Schaden | Max. Ausfallzeit |
|---|---|---|
| Normal | < 50.000 € | > 24h akzeptabel |
| Hoch | 50.000 – 500.000 € | < 24h |
| Sehr hoch | > 500.000 € | < 2h |

## Datenschutz (DSGVO)

### 7 Grundsätze (Art. 5 DSGVO)

1. **Rechtmäßigkeit** – Du brauchst eine Rechtsgrundlage (Einwilligung, Vertrag, etc.)
2. **Zweckbindung** – Daten nur für den angegebenen Zweck nutzen
3. **Datenminimierung** – Nur erheben, was nötig ist
4. **Richtigkeit** – Daten müssen korrekt sein
5. **Speicherbegrenzung** – Nur so lange speichern wie nötig
6. **Integrität & Vertraulichkeit** – Angemessener Schutz der Daten
7. **Rechenschaftspflicht** – Du musst Einhaltung nachweisen können

### Betroffenenrechte
Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit

**Strafen:** Bis zu 20 Mio. € oder 4% des weltweiten Jahresumsatzes!

---

# 🟠 PRIO 2 – Netzwerktechnik

> Nicht so häufig wie SQL/Pseudocode in AP2, aber regelmäßig dran. Dein Subnetting ist eingerostet → hier auffrischen.

## OSI-Schichtenmodell

**Merksatz:** "**P**lease **D**o **N**ot **T**hrow **S**alami **P**izza **A**way" (von unten nach oben)

| Nr. | Schicht | Englisch | Protokolle/Geräte | Faustregel |
|---|---|---|---|---|
| 7 | Anwendung | Application | HTTP, FTP, SMTP, DNS | "Was der User sieht" |
| 6 | Darstellung | Presentation | SSL/TLS, JPEG, ASCII | "Übersetzer" |
| 5 | Sitzung | Session | NetBIOS, RPC | "Sitzungsmanager" |
| 4 | Transport | Transport | TCP, UDP | "Zuverlässigkeit" |
| 3 | Vermittlung | Network | IP, ICMP, Router | "Wegfindung" |
| 2 | Sicherung | Data Link | Ethernet, MAC, Switch, Bridge | "Fehlererkennung auf der Leitung" |
| 1 | Bitübertragung | Physical | Kabel, Hub, Repeater | "Nullen und Einsen auf dem Draht" |

## TCP vs. UDP

| Eigenschaft | TCP | UDP |
|---|---|---|
| Verbindung | Verbindungsorientiert (Handshake) | Verbindungslos |
| Zuverlässigkeit | Ja (Bestätigung, Neuübertragung) | Nein (Fire and forget) |
| Reihenfolge | Garantiert | Nicht garantiert |
| Geschwindigkeit | Langsamer | Schneller |
| Einsatz | Web (HTTP), E-Mail, Dateitransfer | Streaming, VoIP, DNS, Gaming |

**Faustregel:** "TCP = Einschreiben (sicher, langsam). UDP = Postkarte (schnell, unsicher)."

## Wichtige Ports

| Port | Dienst |
|---|---|
| 20/21 | FTP |
| 22 | SSH |
| 25 | SMTP (E-Mail senden) |
| 53 | DNS |
| 80 | HTTP |
| 443 | HTTPS |
| 143 | IMAP |
| 110 | POP3 |
| 3306 | MySQL |
| 3389 | RDP |

## Subnetting – Auffrischung

### IPv4-Adresse
= 4 Oktette à 8 Bit = 32 Bit gesamt. Beispiel: `192.168.1.100`

### Subnetzmaske
Teilt die IP in **Netzanteil** und **Hostanteil**.

| CIDR | Subnetzmaske | Anzahl Hosts | Faustregel |
|---|---|---|---|
| /24 | 255.255.255.0 | 254 | "Kleines Netz" (Standard-LAN) |
| /25 | 255.255.255.128 | 126 | "Halbes /24" |
| /26 | 255.255.255.192 | 62 | "Viertel /24" |
| /27 | 255.255.255.224 | 30 | |
| /28 | 255.255.255.240 | 14 | |
| /16 | 255.255.0.0 | 65.534 | "Großes Netz" |

**Faustregel Anzahl Hosts:** $2^{(32 - \text{CIDR})} - 2$
(Minus 2: Netzadresse + Broadcast)

**Beispiel:** /26 → $2^{(32-26)} - 2 = 2^6 - 2 = 64 - 2 = 62$ Hosts

### Subnetting-Schnellmethode

Gegeben: `192.168.1.0/26`
1. Subnetzmaske: /26 → letztes Oktett: 256 - 192 = **64** (Blockgröße)
2. Subnetze: .0, .64, .128, .192
3. Subnetz `192.168.1.0/26`:
   - Netzadresse: 192.168.1.0
   - Erster Host: 192.168.1.1
   - Letzter Host: 192.168.1.62
   - Broadcast: 192.168.1.63

## Netzwerk-Geräte

| Gerät | OSI-Schicht | Funktion |
|---|---|---|
| **Hub** | 1 (Physical) | Verteilt Daten an ALLE (dumm) |
| **Switch** | 2 (Data Link) | Leitet an richtigen Port weiter (MAC-Adressen) |
| **Router** | 3 (Network) | Verbindet Netze, leitet über IP weiter |
| **Bridge** | 2 (Data Link) | Verbindet zwei Netzwerksegmente |

## Verfügbarkeit berechnen

$$\text{Verfügbarkeit} = \frac{\text{Betriebszeit}}{\text{Betriebszeit} + \text{Ausfallzeit}} \times 100\%$$

$$\text{MTBF} = \frac{\text{Gesamte Betriebszeit}}{\text{Anzahl Ausfälle}}$$

$$\text{MTTR} = \frac{\text{Gesamte Reparaturzeit}}{\text{Anzahl Ausfälle}}$$

**Faustregel:** Verfügbarkeit = MTBF / (MTBF + MTTR)

---

# 🟡 PRIO 3 – Softwareentwicklung & Vorgehensmodelle

> Das ist deine Stärke – trotzdem kurz wiederholen, weil es regelmäßig drankommt.

## Vorgehensmodelle

### Wasserfall
Phasen strikt nacheinander: Anforderung → Entwurf → Implementierung → Test → Betrieb
**Vorteil:** Einfach, klare Struktur
**Nachteil:** Kein Zurück, spät Feedback, Fehler erst am Ende entdeckt

### V-Modell
Wie Wasserfall, aber jede Entwicklungsphase hat eine korrespondierende **Testphase**.
Links: Spezifikation, Rechts: Validierung. V-Form.

### Scrum (NEU ab 2025 explizit im Katalog!)

| Element | Was ist das? |
|---|---|
| **Product Owner** | Verantwortlich für Product Backlog, priorisiert Anforderungen |
| **Scrum Master** | Sorgt dafür, dass Scrum-Regeln eingehalten werden |
| **Dev Team** | Selbstorganisiertes Team, setzt Anforderungen um |
| **Sprint** | Zeitbox (1-4 Wochen) in der ein Inkrement entsteht |
| **Product Backlog** | Priorisierte Liste aller Anforderungen |
| **Sprint Backlog** | Auswahl aus Product Backlog für den Sprint |
| **Daily Standup** | 15-min Meeting: Was hab ich gemacht? Was mache ich? Hindernisse? |
| **Sprint Review** | Demo des Ergebnisses (Was wurde gebaut?) |
| **Sprint Retrospektive** | Prozessverbesserung (Wie können wir besser arbeiten?) |

### Kanban
Board mit Spalten (z.B. To Do → In Progress → Done). Kernprinzip: **WIP-Limits** (Work in Progress begrenzen).

## SOLID-Prinzipien (Kurzform)

| Buchstabe | Prinzip | Faustregel |
|---|---|---|
| **S** | Single Responsibility | "Eine Klasse, ein Grund zur Änderung" |
| **O** | Open/Closed | "Offen für Erweiterung, geschlossen für Änderung" |
| **L** | Liskov Substitution | "Kindklasse muss Elternklasse ersetzen können" |
| **I** | Interface Segregation | "Lieber viele kleine Interfaces als ein fettes" |
| **D** | Dependency Inversion | "Abhängig von Abstraktionen, nicht von Details" |

## Lasten- vs. Pflichtenheft

| | Lastenheft | Pflichtenheft |
|---|---|---|
| **Wer erstellt es?** | Auftraggeber (Kunde) | Auftragnehmer (Entwickler) |
| **Was steht drin?** | WAS soll gemacht werden? | WIE wird es umgesetzt? |
| **Perspektive** | Fachlich | Technisch |
| **Faustregel** | "Wunschzettel des Kunden" | "Antwort des Entwicklers" |

---

# 🟡 PRIO 3 – OOP & Design Patterns

> Deine Stärke – aber trotzdem wichtig für die Prüfung. Design Patterns ab 2025 explizit als "Architektur- UND Design-Pattern".

## OOP-Prinzipien (Kurzwiederholung)

| Prinzip | Erklärung |
|---|---|
| **Kapselung** | Daten verbergen, Zugriff nur über Methoden (getter/setter) |
| **Vererbung** | Klasse erbt Eigenschaften/Methoden einer Elternklasse |
| **Polymorphie** | Gleiche Schnittstelle, unterschiedliches Verhalten |
| **Abstraktion** | Nur relevante Details zeigen, Komplexität verstecken |

### Statisch vs. Nicht-statisch
- **Statisch:** Gehört zur KLASSE, existiert ohne Objekt, für alle Instanzen gleich
- **Nicht-statisch:** Gehört zum OBJEKT, jede Instanz hat eigene Werte

## Design Patterns (die prüfungsrelevantesten)

### Singleton
**Problem:** Es soll nur EINE Instanz einer Klasse geben.
**Lösung:** Privater Konstruktor + statische getInstance()-Methode.
**Beispiel:** Datenbankverbindung, Logger, Konfiguration

### Observer
**Problem:** Viele Objekte sollen über Änderungen informiert werden.
**Lösung:** Subject benachrichtigt alle registrierten Observer.
**Beispiel:** Event-System, Newsletter-Abo

### Factory
**Problem:** Objekterzeugung soll flexibel sein, Aufrufer soll konkreten Typ nicht kennen.
**Lösung:** Eine Methode entscheidet, welches Objekt erzeugt wird.
**Beispiel:** `createButton()` erzeugt je nach Plattform WindowsButton oder MacButton

### MVC (Model-View-Controller)
**Model:** Daten + Geschäftslogik
**View:** Darstellung (UI)
**Controller:** Vermittelt zwischen Model und View, verarbeitet Benutzereingaben

### Adapter
**Problem:** Zwei inkompatible Schnittstellen sollen zusammenarbeiten.
**Lösung:** Adapter übersetzt zwischen den Schnittstellen.
**Beispiel:** Steckdosenadapter (DE-Stecker → UK-Steckdose)

## Architektur-Pattern (NEU ab 2025)

| Pattern | Beschreibung |
|---|---|
| **Monolith** | Alles in einer Codebasis, einfach aber schwer skalierbar |
| **3-Schichten** | Darstellung → Logik → Daten (Standardarchitektur) |
| **Microservices** | Viele kleine, unabhängige Services |
| **MVC** | Model-View-Controller |

---

# 🟡 PRIO 3 – Schnittstellen & Datenaustausch

## Datenformate

| Format | Aufbau | Einsatz | Vorteil |
|---|---|---|---|
| **JSON** | Key-Value-Paare, Arrays | REST APIs, Web | Leichtgewichtig, von JS nativ unterstützt |
| **XML** | Tags wie HTML | SOAP, Konfiguration, B2B | Validierbar (Schema/DTD), self-describing |
| **CSV** | Komma-getrennte Werte | Datenaustausch, Import/Export | Einfachst, überall lesbar |

### JSON-Beispiel
```json
{
    "name": "Max Meier",
    "alter": 25,
    "sprachen": ["JavaScript", "PHP"],
    "adresse": {
        "stadt": "Osnabrück",
        "plz": "49074"
    }
}
```

### XML – Wohlgeformtheit vs. Validität
- **Wohlgeformt:** Korrekte Syntax (Tags geschlossen, verschachtelt, Wurzelelement, Attributwerte in Anführungszeichen)
- **Valide:** Wohlgeformt + entspricht einer DTD/Schema

## REST-API

| Eigenschaft | Bedeutung |
|---|---|
| **Adressierbarkeit** | Jede Ressource hat eine eindeutige URL |
| **Zustandslosigkeit** | Server speichert keinen Client-Zustand |
| **Einheitliche Schnittstelle** | HTTP-Methoden als Operationen |

### HTTP-Methoden

| Methode | CRUD | Idempotent? | Sicher? |
|---|---|---|---|
| GET | Read | Ja | Ja |
| POST | Create | Nein | Nein |
| PUT | Update (komplett) | Ja | Nein |
| PATCH | Update (teilweise) | Nein | Nein |
| DELETE | Delete | Ja | Nein |

**Faustregel:**
- **Idempotent** = Mehrfach aufrufen ergibt dasselbe Ergebnis
- **Sicher** = Verändert keine Daten auf dem Server

### HTTP-Statuscodes

| Code | Bedeutung | Faustregel |
|---|---|---|
| 200 | OK | Alles gut |
| 201 | Created | Neue Ressource erstellt |
| 204 | No Content | OK, aber nichts zurückzugeben |
| 301 | Moved Permanently | Dauerhaft umgezogen |
| 400 | Bad Request | Deine Anfrage war kaputt |
| 401 | Unauthorized | Nicht authentifiziert |
| 403 | Forbidden | Authentifiziert, aber keine Berechtigung |
| 404 | Not Found | Gibt's nicht |
| 500 | Internal Server Error | Serverfehler |

**Faustregel:** 2xx = Erfolg, 3xx = Umleitung, 4xx = Client-Fehler, 5xx = Server-Fehler

---

# 🟡 PRIO 3 – Versionsverwaltung (Git)

## Grundbefehle

| Befehl | Was passiert? |
|---|---|
| `git init` | Neues Repository erstellen |
| `git clone` | Repository kopieren |
| `git add` | Änderungen für Commit vormerken (Staging) |
| `git commit` | Änderungen speichern |
| `git push` | Lokale Commits zum Remote senden |
| `git pull` | Remote-Änderungen holen + mergen |
| `git branch` | Branch erstellen/auflisten |
| `git checkout` / `git switch` | Branch wechseln |
| `git merge` | Branches zusammenführen |
| `git revert` | Commit rückgängig machen (neuer Commit) |
| `git rebase` | Commit-Historie linearisieren |
| `git cherry-pick` | Einzelnen Commit in anderen Branch übernehmen |

**Workflow im Team:**
1. Feature-Branch erstellen
2. Änderungen committen
3. Pull/Merge Request erstellen
4. Code Review
5. Merge in Hauptbranch

**VCS vs. DVCS:**
- **VCS** (zentral, z.B. SVN): Ein Server, alle arbeiten damit
- **DVCS** (verteilt, z.B. Git): Jeder hat eine vollständige Kopie

---

# 🟡 PRIO 3 – Speicherlösungen

## RAID-Level (Kurzübersicht)

| RAID | Prinzip | Min. Platten | Toleranz | Kapazität |
|---|---|---|---|---|
| **0** | Striping (Geschwindigkeit) | 2 | 0 Ausfälle | 100% |
| **1** | Mirroring (Spiegelung) | 2 | 1 Ausfall | 50% |
| **5** | Striping + verteilte Parität | 3 | 1 Ausfall | (n-1)/n |
| **6** | Wie RAID 5, doppelte Parität | 4 | 2 Ausfälle | (n-2)/n |
| **10** | RAID 1 + RAID 0 (Mirror + Stripe) | 4 | 1 pro Spiegel | 50% |
| **JBOD** | Just a Bunch Of Disks (keine Redundanz) | 1 | 0 | 100% |

**Faustregel:** "RAID 0 = schnell, unsicher. RAID 1 = sicher, teuer. RAID 5 = Kompromiss."

## Cloud-Modelle

| Modell | Was wird bereitgestellt? | Beispiel | Faustregel |
|---|---|---|---|
| **IaaS** | Infrastruktur (VMs, Netzwerk, Storage) | AWS EC2, Azure VMs | "Leere Wohnung" |
| **PaaS** | Plattform (Runtime, DB, Middleware) | Heroku, Azure App Service | "Möblierte Wohnung" |
| **SaaS** | Fertige Software | Gmail, Salesforce, Office 365 | "Hotel" |

**Cloud vs. On-Premises:**
- **Cloud:** Flexibel, skalierbar, OpEx (laufende Kosten)
- **On-Premises:** Volle Kontrolle, einmalige Investition (CapEx), Data Sovereignty

## NAS vs. SAN (NEU ab 2025)

| | NAS | SAN |
|---|---|---|
| **Zugriff** | Dateibasis (SMB, NFS) | Blockbasis (Fibre Channel, iSCSI) |
| **Protokoll** | Netzwerk (Ethernet) | Eigenes Speichernetzwerk |
| **Einsatz** | Dateifreigabe, Backup | Datenbanken, VMs, Performance-kritisch |
| **Kosten** | Günstiger | Teurer |

**Faustregel:** "NAS = freigegebener Ordner im Netzwerk. SAN = eigene Festplatte über Netzwerk."

---

# 🟡 PRIO 3 – Softwareergonomie

## 7 Grundsätze der Dialoggestaltung (ISO 9241-110)

**Merke dir diese 7 Begriffe:**

1. **Aufgabenangemessenheit** – Unterstützt bei der Aufgabe, kein Overhead
2. **Selbstbeschreibungsfähigkeit** – Nutzer versteht ohne Handbuch
3. **Steuerbarkeit** – Nutzer bestimmt das Tempo und die Richtung
4. **Erwartungskonformität** – Verhält sich wie erwartet
5. **Fehlertoleranz** – Fehler werden abgefangen, leicht korrigierbar
6. **Individualisierbarkeit** – Anpassbar an Nutzerbedürfnisse
7. **Lernförderlichkeit** – Einfacher Einstieg, Hilfe verfügbar

**Faustregel:** "ASSEFI L" → Aufgabe, Selbstbeschreibung, Steuerbar, Erwartung, Fehler, Individuell, Lernen

## Usability vs. User Experience (UX)

- **Usability:** Kann der Nutzer die Aufgabe effizient erledigen? (Effektivität, Effizienz, Zufriedenheit)
- **UX:** Wie FÜHLT sich die gesamte Interaktion an? (Emotionen, Gesamteindruck, vor/während/nach der Nutzung)

---

# 🟡 PRIO 3 – Programmiersprachen (Theorie)

## Programmierparadigmen

| Paradigma | Beschreibung | Beispielsprachen |
|---|---|---|
| **Imperativ** | Schritt-für-Schritt-Anweisungen | C, Java |
| **Deklarativ** | Was soll passieren (nicht wie) | SQL, HTML |
| **Prozedural** | Imperativ + Funktionen/Prozeduren | C, Pascal |
| **Objektorientiert** | Klassen, Objekte, Vererbung | Java, C#, PHP |
| **Funktional** | Reine Funktionen, Unveränderlichkeit | Haskell, Lisp, Elixir |

## Typisierung

| | Statisch | Dynamisch |
|---|---|---|
| **Prüfzeitpunkt** | Kompilierzeit | Laufzeit |
| **Beispiele** | Java, C#, TypeScript | JavaScript, PHP, Python |

| | Stark | Schwach |
|---|---|---|
| **Typkonvertierung** | Explizit nötig | Automatisch (implizit) |
| **Beispiele** | Java, Python | JavaScript, PHP |

**JavaScript** = dynamisch + schwach typisiert
**PHP** = dynamisch + schwach typisiert

## Compiler vs. Interpreter

| | Compiler | Interpreter |
|---|---|---|
| **Übersetzung** | Gesamter Code auf einmal | Zeile für Zeile |
| **Ausführung** | Schneller (nach Kompilierung) | Langsamer (live übersetzt) |
| **Fehlererkennung** | Vor Ausführung | Während Ausführung |
| **Beispiele** | C, Java (bytecode) | JavaScript, PHP, Python |

## Funktionale Konzepte (Modern JS/PHP)

| Konzept | Erklärung |
|---|---|
| **Lambda/Arrow Function** | Anonyme Funktion: `(x) => x * 2` |
| **Map** | Transformiert jedes Element: `[1,2,3].map(x => x*2)` → `[2,4,6]` |
| **Filter** | Filtert nach Bedingung: `[1,2,3].filter(x => x>1)` → `[2,3]` |
| **Reduce** | Reduziert auf einen Wert: `[1,2,3].reduce((a,b) => a+b, 0)` → `6` |

---

# 🟢 PRIO 4 – WiSo (Wirtschafts- und Sozialkunde)

> Du sagst, WiSo ist deine Schwäche – aber es ist Multiple Choice und nur 20% Gewicht. Lern die häufigsten Themen und nutze Ausschlussverfahren.

## Strategie für WiSo (Multiple Choice)

1. **Ausschlussverfahren:** Offensichtlich falsche Antworten streichen
2. **Absolute Wörter sind verdächtig:** "immer", "nie", "ausschließlich" → oft falsch
3. **Die längste Antwort** ist tendenziell öfter korrekt
4. **Gesunder Menschenverstand** hilft erstaunlich oft

## Häufige WiSo-Themen

### Ausbildungsvertrag & BBiG
- Pflichten Azubi: Lernpflicht, Berufsschulpflicht, Weisungen befolgen, Sorgfalt
- Pflichten Betrieb: Ausbildungspflicht, Vergütung, Freistellung für Berufsschule, Zeugnis
- Probezeit: 1-4 Monate (Pflicht!)
- Kündigung in Probezeit: Jederzeit, ohne Grund, ohne Frist
- Kündigung nach Probezeit: Nur aus wichtigem Grund (fristlos) oder durch Azubi mit 4 Wochen Frist

### Arbeitsrecht Basics
- **Arbeitszeit:** Max. 8h/Tag (Ausnahme: 10h bei Ausgleich in 6 Monaten)
- **Urlaub:** Min. 24 Werktage/Jahr (bei 6-Tage-Woche) bzw. 20 Tage (5-Tage-Woche)
- **Kündigungsfristen:** Regulär 4 Wochen zum 15. oder Monatsende
- **Mutterschutz:** 6 Wochen vor + 8 Wochen nach Geburt
- **Elternzeit:** Bis zu 3 Jahre

### Sozialversicherungen (5 Säulen)

**Merksatz:** "**K**arl **P**flegt **R**entner **A**uf **U**rlaub"

| Versicherung | Beitragshöhe (ca.) | Wer zahlt? |
|---|---|---|
| **K**rankenversicherung | ~14,6% + Zusatz | 50/50 AG/AN |
| **P**flegeversicherung | ~3,4% | 50/50 AG/AN |
| **R**entenversicherung | ~18,6% | 50/50 AG/AN |
| **A**rbeitslosenversicherung | ~2,6% | 50/50 AG/AN |
| **U**nfallversicherung | variabel | 100% Arbeitgeber |

**Faustregel:** Alle 50/50, außer Unfallversicherung (nur AG)!

### Vertragsrecht
- **Willenserklärung:** Angebot + Annahme = Vertrag
- **Geschäftsfähigkeit:**
  - Unter 7: Geschäftsunfähig
  - 7-17: Beschränkt geschäftsfähig (mit Einwilligung der Eltern)
  - Ab 18: Voll geschäftsfähig
- **Kaufvertrag-Störungen:** Mangelhaftlierung → Nacherfüllung → Rücktritt/Minderung/Schadensersatz
- **Mängelarten:** Sachmangel (Ware defekt), Rechtsmangel (Rechte Dritter)

### Betriebliche Mitbestimmung
- **Betriebsrat:** Ab 5 Arbeitnehmer möglich
- **Mitbestimmung:** Arbeitszeit, Überstunden, Urlaub, Kündigungen
- **Personalvertretung:** Öffentlicher Dienst

### Unternehmensformen (Kurzversion)

| Form | Haftung | Mindestkapital |
|---|---|---|
| **Einzelunternehmen** | Unbeschränkt, persönlich | Keins |
| **GbR** | Unbeschränkt, gesamtschuldnerisch | Keins |
| **OHG** | Unbeschränkt, gesamtschuldnerisch | Keins |
| **KG** | Komplementär: unbeschränkt, Kommanditist: beschränkt | Keins |
| **GmbH** | Beschränkt auf Einlage | 25.000 € |
| **UG** | Beschränkt auf Einlage | 1 € |
| **AG** | Beschränkt auf Einlage | 50.000 € |

**Faustregel:** "Personengesellschaften = unbeschränkte Haftung. Kapitalgesellschaften = beschränkt."

---

# 🟢 PRIO 4 – Datenstrukturen (Wiederholung)

| Struktur | Prinzip | Faustregel |
|---|---|---|
| **Array** | Feste Reihenfolge, Index-Zugriff | "Nummierierte Schublade" |
| **Stack** | LIFO (Last In, First Out) | "Bücherstapel" |
| **Queue** | FIFO (First In, First Out) | "Warteschlange im Supermarkt" |
| **Baum** | Hierarchie: Wurzel → Knoten → Blätter | "Stammbaum" |
| **Graph** | Knoten + Kanten (gerichtet/ungerichtet) | "Straßenkarte" |
| **Heap** | Baum mit Priorität (Min/Max an der Spitze) | "Prioritätswarteschlange" |

---

# 🟢 PRIO 4 – Webentwicklung

Da du JS/PHP/HTML/CSS arbeitest, hier nur die prüfungsrelevanten Theorie-Punkte:

- **Dynamische Websites:** Server generiert HTML (PHP, JSP, ASP) vs. Client-seitig (JavaScript/SPA)
- **Responsive Design:** Anpassung an verschiedene Bildschirmgrößen (Media Queries, Flexbox, Grid)
- **Native vs. Hybrid vs. Web-App:**
  - Native: Plattformspezifisch (Swift/Kotlin), beste Performance
  - Hybrid: Ein Code, mehrere Plattformen (React Native, Flutter)
  - Web-App: Läuft im Browser, PWA für Offline-Fähigkeit
- **PWA (Progressive Web App):** Web-App mit nativen Features (Offline, Push, Installierbar)

---

# 📅 Empfohlener 5-Wochen-Lernplan

| Woche | Fokus | Details |
|---|---|---|
| **Woche 1** | 🔴 SQL + Datenbanken | SELECT-Abfragen üben, JOINs, Normalisierung, ER-Modelle zeichnen |
| **Woche 2** | 🔴 Pseudocode + Algorithmen | Sortieralgorithmen in Pseudocode schreiben, Übungsaufgaben lösen |
| **Woche 3** | 🔴 UML + 🟠 Testen | Aktivitätsdiagramm, Klassendiagramm, Testarten, Überdeckung |
| **Woche 4** | 🟠 IT-Sicherheit + Netzwerk + 🟡 Alles Mittlere | Angriffe, CIA, OSI, Subnetting auffrischen, REST, Git, Patterns |
| **Woche 5** | 🟢 WiSo + Gesamtwiederholung | WiSo-Themen durchgehen, alte Prüfungen durchrechnen |

**Täglicher Rhythmus (Empfehlung):**
- 45 min aktives Lernen (Lesen + Verstehen)
- 30 min Übungen (SQL schreiben, Pseudocode schreiben, Diagramme zeichnen)
- 15 min Wiederholung vom Vortag

---

# 🔗 Empfohlene Ressourcen

- **Alte Prüfungen:** Beim U-Form-Verlag kaufen (ca. 20€) → BESTE Vorbereitung laut IHK-Prüfern
- **IT-Berufe-Podcast** von Stefan Macke (IHK-Prüfer): Themenübersichten, Prüfungstipps
- **SQL üben:** sqlzoo.net, w3schools.com/sql
- **Prüfungskatalog** (U-Form-Verlag, 7,10€): Enthält ab 2025 ein SQL-Beiblatt, das der echten Prüfung beiliegt

---

> **Letzte Faustregel für die Prüfung:** Pseudocode und SQL bringen zusammen mehr Punkte als alle anderen Themen. Wenn du nur 2 Wochen hättest: Nur diese beiden üben.
