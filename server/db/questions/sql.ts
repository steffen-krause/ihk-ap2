import type { QuestionSeed } from '../seed-types'

export const sqlQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'sql', subtopicSlug: 'select-grundlagen', type: 'sql_editor', difficulty: 'easy',
    questionText: 'Schreibe eine SQL-Abfrage, die alle Spalten aus der Tabelle "kunden" zurückgibt, sortiert nach Nachname aufsteigend.',
    questionData: { solution: 'SELECT * FROM kunden ORDER BY nachname ASC;' },
    explanation: 'SELECT * wählt alle Spalten. ORDER BY sortiert, ASC ist aufsteigend (Standard).'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'select-grundlagen', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welches SQL-Schlüsselwort filtert Zeilen VOR der Gruppierung?',
    questionData: { options: ['HAVING', 'WHERE', 'GROUP BY', 'ORDER BY'], correctIndex: 1 },
    explanation: 'WHERE filtert vor GROUP BY, HAVING filtert nach der Gruppierung (auf Aggregatwerte).'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'select-grundlagen', type: 'fill_blank', difficulty: 'easy',
    questionText: 'SELECT name FROM kunden [BLANK] stadt = \'Berlin\' [BLANK] name [BLANK];',
    questionData: { template: 'SELECT name FROM kunden [BLANK] stadt = \'Berlin\' [BLANK] name [BLANK];', expectedAnswers: ['WHERE', 'ORDER BY', 'ASC'] },
    explanation: 'WHERE filtert Zeilen, ORDER BY sortiert, ASC = aufsteigend.'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'joins', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welcher JOIN gibt alle Zeilen der linken Tabelle zurück, auch wenn kein passender Eintrag in der rechten Tabelle existiert?',
    questionData: { options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN'], correctIndex: 1 },
    explanation: 'LEFT JOIN gibt alle Zeilen der linken Tabelle zurück. Felder der rechten Tabelle sind NULL wenn kein Match existiert.'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'joins', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die JOIN-Typen ihrer Beschreibung zu:',
    questionData: { pairs: [
      { left: 'INNER JOIN', right: 'Nur Zeilen mit Match in beiden Tabellen' },
      { left: 'LEFT JOIN', right: 'Alle Zeilen links + Matches rechts (oder NULL)' },
      { left: 'CROSS JOIN', right: 'Kartesisches Produkt aller Zeilen' },
    ]},
  },
  {
    topicSlug: 'sql', subtopicSlug: 'joins', type: 'sql_editor', difficulty: 'medium',
    questionText: 'Schreibe eine SQL-Abfrage, die alle Bestellungen mit dem zugehörigen Kundennamen anzeigt. Tabellen: bestellungen(id, kunden_id, betrag), kunden(id, name).',
    questionData: { solution: 'SELECT b.id, k.name, b.betrag\nFROM bestellungen b\nINNER JOIN kunden k ON b.kunden_id = k.id;' },
    explanation: 'INNER JOIN verbindet die Tabellen über den Fremdschlüssel kunden_id.'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'aggregat', type: 'sql_editor', difficulty: 'medium',
    questionText: 'Zeige für jede Stadt die Anzahl der Kunden und den durchschnittlichen Umsatz. Nur Städte mit mehr als 5 Kunden. Tabelle: kunden(id, name, stadt, umsatz).',
    questionData: { solution: 'SELECT stadt, COUNT(*) AS anzahl, AVG(umsatz) AS durchschnitt\nFROM kunden\nGROUP BY stadt\nHAVING COUNT(*) > 5;' },
    explanation: 'GROUP BY gruppiert, COUNT/AVG sind Aggregatfunktionen, HAVING filtert nach der Gruppierung.',
    xpReward: 15,
  },
  {
    topicSlug: 'sql', subtopicSlug: 'aggregat', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Reihenfolge der SQL-Ausführung: Welche Klausel wird zuerst ausgewertet?',
    questionData: { options: ['SELECT', 'FROM', 'ORDER BY', 'HAVING'], correctIndex: 1 },
    explanation: 'Ausführungsreihenfolge: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'dml-subqueries', type: 'sql_editor', difficulty: 'hard',
    questionText: 'Schreibe eine SQL-Abfrage, die alle Kunden anzeigt, deren Umsatz über dem Durchschnitt liegt. Tabelle: kunden(id, name, umsatz).',
    questionData: { solution: 'SELECT name, umsatz\nFROM kunden\nWHERE umsatz > (SELECT AVG(umsatz) FROM kunden);' },
    explanation: 'Die Subquery berechnet den Durchschnitt, die äußere Query filtert dagegen.',
    xpReward: 20,
  },
  {
    topicSlug: 'sql', subtopicSlug: 'dml-subqueries', type: 'true_false', difficulty: 'easy',
    questionText: 'DELETE FROM kunden; löscht die gesamte Tabelle inklusive der Tabellenstruktur.',
    questionData: { isTrue: false, explanation: 'DELETE löscht nur die Daten (Zeilen), die Tabellenstruktur bleibt erhalten. DROP TABLE löscht die gesamte Tabelle.' },
  },
  {
    topicSlug: 'sql', subtopicSlug: 'dml-subqueries', type: 'fill_blank', difficulty: 'medium',
    questionText: '[BLANK] INTO kunden (name, stadt) [BLANK] (\'Max\', \'Berlin\');',
    questionData: { template: '[BLANK] INTO kunden (name, stadt) [BLANK] (\'Max\', \'Berlin\');', expectedAnswers: ['INSERT', 'VALUES'] },
    explanation: 'INSERT INTO ... VALUES (...) fügt eine neue Zeile ein.'
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'sql', subtopicSlug: 'select-grundlagen', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welches Schlüsselwort entfernt Duplikate aus dem Ergebnis?',
    questionData: { options: ['UNIQUE', 'DISTINCT', 'DIFFERENT', 'SINGLE'], correctIndex: 1 },
    explanation: 'SELECT DISTINCT spalte FROM tabelle; entfernt doppelte Werte aus dem Ergebnis.'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'select-grundlagen', type: 'sql_editor', difficulty: 'easy',
    questionText: 'Schreibe eine SQL-Abfrage, die die Anzahl der Kunden in Berlin zählt. Tabelle: kunden(id, name, stadt).',
    questionData: { solution: 'SELECT COUNT(*) FROM kunden WHERE stadt = \'Berlin\';' },
    explanation: 'COUNT(*) zählt alle Zeilen, WHERE filtert auf Berlin.'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'select-grundlagen', type: 'true_false', difficulty: 'easy',
    questionText: 'Mit LIKE \'%mann%\' findet man alle Werte, die "mann" an beliebiger Stelle enthalten.',
    questionData: { isTrue: true, explanation: '% steht für beliebig viele Zeichen (auch 0). %mann% findet "Herrmann", "Neumann", "mannheim" usw.' },
  },
  {
    topicSlug: 'sql', subtopicSlug: 'select-grundlagen', type: 'fill_blank', difficulty: 'medium',
    questionText: 'SELECT name FROM kunden WHERE name [BLANK] \'M%\' ORDER BY name [BLANK] [BLANK] 5;',
    questionData: { template: 'SELECT name FROM kunden WHERE name [BLANK] \'M%\' ORDER BY name [BLANK] [BLANK] 5;', expectedAnswers: ['LIKE', 'ASC', 'LIMIT'] },
    explanation: 'LIKE für Mustervergleich, ASC für aufsteigende Sortierung, LIMIT begrenzt die Ergebnismenge.'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'select-grundlagen', type: 'sql_editor', difficulty: 'medium',
    questionText: 'Schreibe eine SQL-Abfrage, die alle Kunden anzeigt, deren Name mit "S" beginnt und die zwischen 2020 und 2023 registriert wurden. Tabelle: kunden(id, name, registriert_am).',
    questionData: { solution: 'SELECT * FROM kunden\nWHERE name LIKE \'S%\'\nAND registriert_am BETWEEN \'2020-01-01\' AND \'2023-12-31\';' },
    explanation: 'LIKE \'S%\' filtert Namen die mit S beginnen, BETWEEN wählt einen Wertebereich (inklusive).'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'joins', type: 'sql_editor', difficulty: 'hard',
    questionText: 'Zeige alle Kunden, die KEINE Bestellung haben. Tabellen: kunden(id, name), bestellungen(id, kunden_id, betrag).',
    questionData: { solution: 'SELECT k.name\nFROM kunden k\nLEFT JOIN bestellungen b ON k.id = b.kunden_id\nWHERE b.id IS NULL;' },
    explanation: 'LEFT JOIN + WHERE ... IS NULL findet Datensätze ohne Gegenstück in der rechten Tabelle.',
    xpReward: 20,
  },
  {
    topicSlug: 'sql', subtopicSlug: 'joins', type: 'true_false', difficulty: 'medium',
    questionText: 'Ein NATURAL JOIN verbindet Tabellen automatisch über gleichnamige Spalten.',
    questionData: { isTrue: true, explanation: 'NATURAL JOIN erkennt automatisch Spalten mit gleichem Namen und nutzt diese für den Join. In der Praxis selten verwendet, da fehleranfällig.' },
  },
  {
    topicSlug: 'sql', subtopicSlug: 'joins', type: 'sql_editor', difficulty: 'medium',
    questionText: 'Schreibe eine Abfrage, die Produkte mit ihren Kategorienamen anzeigt, auch wenn ein Produkt keiner Kategorie zugeordnet ist. Tabellen: produkte(id, name, kategorie_id), kategorien(id, name).',
    questionData: { solution: 'SELECT p.name AS produkt, k.name AS kategorie\nFROM produkte p\nLEFT JOIN kategorien k ON p.kategorie_id = k.id;' },
    explanation: 'LEFT JOIN zeigt ALLE Produkte; bei fehlender Kategorie ist k.name NULL.'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'aggregat', type: 'sql_editor', difficulty: 'easy',
    questionText: 'Berechne den Gesamtumsatz und den höchsten Einzelumsatz. Tabelle: bestellungen(id, betrag).',
    questionData: { solution: 'SELECT SUM(betrag) AS gesamtumsatz, MAX(betrag) AS hoechster\nFROM bestellungen;' },
    explanation: 'SUM berechnet die Summe, MAX den größten Wert.'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'aggregat', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Aggregatfunktionen ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: 'COUNT', right: 'Zählt die Anzahl der Zeilen' },
      { left: 'SUM', right: 'Berechnet die Summe' },
      { left: 'AVG', right: 'Berechnet den Durchschnitt' },
      { left: 'MIN/MAX', right: 'Kleinster/Größter Wert' },
    ]},
  },
  {
    topicSlug: 'sql', subtopicSlug: 'aggregat', type: 'sql_editor', difficulty: 'hard',
    questionText: 'Zeige die 3 umsatzstärksten Produkte. Tabellen: produkte(id, name), bestellpositionen(id, produkt_id, menge, einzelpreis).',
    questionData: { solution: 'SELECT p.name, SUM(bp.menge * bp.einzelpreis) AS umsatz\nFROM bestellpositionen bp\nINNER JOIN produkte p ON bp.produkt_id = p.id\nGROUP BY p.name\nORDER BY umsatz DESC\nLIMIT 3;' },
    explanation: 'JOIN + GROUP BY + ORDER BY DESC + LIMIT ist ein klassisches Top-N-Query.',
    xpReward: 20,
  },
  {
    topicSlug: 'sql', subtopicSlug: 'dml-subqueries', type: 'sql_editor', difficulty: 'medium',
    questionText: 'Erhöhe den Preis aller Produkte der Kategorie "Elektronik" um 10%. Tabellen: produkte(id, name, preis, kategorie).',
    questionData: { solution: 'UPDATE produkte\nSET preis = preis * 1.10\nWHERE kategorie = \'Elektronik\';' },
    explanation: 'UPDATE...SET ändert bestehende Datensätze. WHERE begrenzt die Änderung auf bestimmte Zeilen.'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'dml-subqueries', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen DELETE und TRUNCATE?',
    questionData: { options: [
      'Es gibt keinen Unterschied',
      'DELETE kann mit WHERE gefiltert werden, TRUNCATE löscht immer alle Zeilen',
      'TRUNCATE kann mit WHERE gefiltert werden, DELETE nicht',
      'DELETE löscht die Tabellenstruktur, TRUNCATE nicht',
    ], correctIndex: 1 },
    explanation: 'DELETE = zeilenweise Löschung (kann WHERE nutzen, wird geloggt). TRUNCATE = schnelle Komplett-Löschung (kein WHERE, setzt Zähler zurück).'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'dml-subqueries', type: 'sql_editor', difficulty: 'hard',
    questionText: 'Lösche alle Kunden, die seit über 2 Jahren keine Bestellung mehr haben. Tabellen: kunden(id, name), bestellungen(id, kunden_id, datum).',
    questionData: { solution: 'DELETE FROM kunden\nWHERE id NOT IN (\n  SELECT DISTINCT kunden_id\n  FROM bestellungen\n  WHERE datum >= CURRENT_DATE - INTERVAL \'2 years\'\n);' },
    explanation: 'Subquery findet aktive Kunden der letzten 2 Jahre. NOT IN löscht alle anderen.',
    xpReward: 20,
  },
  {
    topicSlug: 'sql', subtopicSlug: 'dml-subqueries', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre den Unterschied zwischen korrelierten und nicht-korrelierten Subqueries.',
    questionData: { answer: 'Nicht-korrelierte Subquery:\n- Wird EINMAL ausgeführt, unabhängig von der äußeren Query\n- Beispiel: WHERE gehalt > (SELECT AVG(gehalt) FROM mitarbeiter)\n\nKorrelierte Subquery:\n- Wird für JEDE Zeile der äußeren Query neu ausgeführt\n- Bezieht sich auf Spalten der äußeren Query\n- Beispiel: WHERE gehalt > (SELECT AVG(gehalt) FROM mitarbeiter m2 WHERE m2.abteilung = m1.abteilung)\n\nPerformance: Nicht-korreliert ist meist schneller, da nur einmal ausgewertet.' },
  },
  {
    topicSlug: 'sql', subtopicSlug: 'select-grundlagen', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welcher Operator prüft, ob ein Wert in einer Liste enthalten ist?',
    questionData: { options: ['CONTAINS', 'IN', 'EXISTS', 'HAS'], correctIndex: 1 },
    explanation: 'WHERE stadt IN (\'Berlin\', \'Hamburg\', \'München\') prüft ob der Wert in der angegebenen Liste ist.'
  },
  {
    topicSlug: 'sql', subtopicSlug: 'select-grundlagen', type: 'flashcard', difficulty: 'easy',
    questionText: 'Was ist der Unterschied zwischen WHERE und HAVING?',
    questionData: { answer: 'WHERE:\n- Filtert einzelne Zeilen VOR der Gruppierung\n- Kann keine Aggregatfunktionen verwenden\n- Beispiel: WHERE alter > 18\n\nHAVING:\n- Filtert Gruppen NACH der Gruppierung\n- Kann Aggregatfunktionen verwenden\n- Beispiel: HAVING COUNT(*) > 5\n\nReihenfolge: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY\n\nBeide können in der gleichen Query vorkommen!' },
  },
]
