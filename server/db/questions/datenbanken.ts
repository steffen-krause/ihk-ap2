import type { QuestionSeed } from '../seed-types'

export const datenbankenQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'datenbanken', subtopicSlug: 'er-modell', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'In einem ER-Modell stellt ein Rechteck dar:',
    questionData: { options: ['Eine Beziehung', 'Ein Attribut', 'Eine Entität', 'Einen Primärschlüssel'], correctIndex: 2 },
    explanation: 'Rechteck = Entität (Entity), Raute = Beziehung (Relationship), Ellipse = Attribut.'
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'er-modell', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die ER-Symbole ihren Bedeutungen zu:',
    questionData: { pairs: [
      { left: 'Rechteck', right: 'Entität (Tabelle)' },
      { left: 'Raute', right: 'Beziehung (Relation)' },
      { left: 'Ellipse', right: 'Attribut (Spalte)' },
      { left: 'Unterstrichene Ellipse', right: 'Primärschlüssel' },
    ]},
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'er-modell', type: 'flashcard', difficulty: 'easy',
    questionText: 'Was ist der Unterschied zwischen 1:n und n:m Beziehungen?',
    questionData: { answer: '1:n (Eins-zu-Viele): Ein Datensatz der einen Tabelle kann mit vielen Datensätzen der anderen verknüpft sein.\nBeispiel: Ein Kunde kann viele Bestellungen haben.\nUmsetzung: Fremdschlüssel in der n-Seite.\n\nn:m (Viele-zu-Viele): Datensätze beider Tabellen können mit vielen der anderen verknüpft sein.\nBeispiel: Studenten belegen Kurse.\nUmsetzung: Zwischentabelle (Assoziationstabelle) mit zwei Fremdschlüsseln.' },
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'normalisierung', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Wann befindet sich eine Tabelle in der 2. Normalform (2NF)?',
    questionData: { options: [
      'Wenn alle Attribute atomar sind',
      'Wenn sie in 1NF ist und alle Nicht-Schlüssel-Attribute voll funktional vom gesamten Primärschlüssel abhängen',
      'Wenn keine transitiven Abhängigkeiten existieren',
      'Wenn alle Spalten einen Primärschlüssel haben',
    ], correctIndex: 1 },
    explanation: '1NF = atomare Attribute. 2NF = 1NF + volle funktionale Abhängigkeit vom gesamten Schlüssel. 3NF = 2NF + keine transitiven Abhängigkeiten.'
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'normalisierung', type: 'matching', difficulty: 'hard',
    questionText: 'Ordne die Normalformen ihren Bedingungen zu:',
    questionData: { pairs: [
      { left: '1. Normalform', right: 'Alle Attribute sind atomar (keine Listen/Mengen)' },
      { left: '2. Normalform', right: 'Volle funktionale Abhängigkeit vom gesamten Schlüssel' },
      { left: '3. Normalform', right: 'Keine transitiven Abhängigkeiten' },
    ]},
    explanation: 'Merksatz: "Jedes Attribut hängt vom Schlüssel ab, vom ganzen Schlüssel und von nichts anderem als dem Schlüssel."',
    xpReward: 15,
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'referentielle-integritaet', type: 'true_false', difficulty: 'easy',
    questionText: 'Ein Fremdschlüssel darf auf einen Wert verweisen, der in der referenzierten Tabelle nicht existiert.',
    questionData: { isTrue: false, explanation: 'Referentielle Integrität bedeutet: Jeder Fremdschlüsselwert muss als Primärschlüssel in der referenzierten Tabelle existieren (oder NULL sein).' },
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'referentielle-integritaet', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was passiert bei ON DELETE CASCADE, wenn der referenzierte Datensatz gelöscht wird?',
    questionData: { options: ['Die Löschung wird verhindert', 'Der Fremdschlüssel wird auf NULL gesetzt', 'Alle referenzierenden Datensätze werden ebenfalls gelöscht', 'Es passiert nichts'], correctIndex: 2 },
    explanation: 'CASCADE = Kaskadierung: Löschung/Änderung wird auf alle abhängigen Datensätze übertragen. RESTRICT würde die Löschung verhindern.'
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'transaktionen', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die ACID-Eigenschaften ihren Bedeutungen zu:',
    questionData: { pairs: [
      { left: 'Atomicity', right: 'Alles oder nichts – Transaktion ganz oder gar nicht' },
      { left: 'Consistency', right: 'DB ist vor und nach Transaktion in konsistentem Zustand' },
      { left: 'Isolation', right: 'Transaktionen beeinflussen sich nicht gegenseitig' },
      { left: 'Durability', right: 'Abgeschlossene Transaktionen bleiben dauerhaft gespeichert' },
    ]},
    explanation: 'ACID garantiert zuverlässige Datenbankoperationen.',
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'transaktionen', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre COMMIT und ROLLBACK im Kontext von Transaktionen.',
    questionData: { answer: 'COMMIT: Bestätigt alle Änderungen einer Transaktion dauerhaft. Ab diesem Punkt sind die Änderungen für andere sichtbar und können nicht mehr rückgängig gemacht werden.\n\nROLLBACK: Macht alle Änderungen seit dem letzten COMMIT (oder dem Beginn der Transaktion) rückgängig. Die DB kehrt zum Zustand vor der Transaktion zurück.\n\nBeispiel Banküberweisung:\nBEGIN TRANSACTION;\nUPDATE konten SET saldo = saldo - 100 WHERE id = 1;\nUPDATE konten SET saldo = saldo + 100 WHERE id = 2;\n-- Alles OK? → COMMIT;\n-- Fehler? → ROLLBACK;' },
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'datenbanken', subtopicSlug: 'er-modell', type: 'true_false', difficulty: 'medium',
    questionText: 'Eine schwache Entität kann ohne ihre zugehörige starke Entität existieren.',
    questionData: { isTrue: false, explanation: 'Eine schwache Entität ist existenzabhängig von einer starken Entität. Beispiel: "Raum" (schwach) existiert nicht ohne "Gebäude" (stark).' },
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'er-modell', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Wie wird eine n:m-Beziehung im relationalen Modell umgesetzt?',
    questionData: { options: [
      'Durch einen Fremdschlüssel in einer der beiden Tabellen',
      'Durch eine Zwischentabelle mit den Primärschlüsseln beider Tabellen',
      'Durch Zusammenlegung der beiden Tabellen',
      'Durch doppelte Einträge in beiden Tabellen',
    ], correctIndex: 1 },
    explanation: 'n:m-Beziehungen benötigen eine Assoziationstabelle (Zwischentabelle), die die Primärschlüssel beider Tabellen als Fremdschlüssel enthält.'
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'er-modell', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind Primärschlüssel, Fremdschlüssel und Kandidatenschlüssel?',
    questionData: { answer: 'Primärschlüssel (Primary Key):\n- Eindeutige Identifikation jeder Zeile\n- Darf nicht NULL sein\n- Nur einer pro Tabelle\n- Beispiel: KundenNr\n\nFremdschlüssel (Foreign Key):\n- Verweist auf den Primärschlüssel einer anderen Tabelle\n- Stellt referentielle Integrität sicher\n- Können NULL sein (optional)\n- Beispiel: KundenNr in Tabelle Bestellungen\n\nKandidatenschlüssel:\n- Alle Spalten(-kombinationen), die als Primärschlüssel dienen KÖNNTEN\n- Eindeutig und minimal\n- Beispiel: KundenNr und Email sind beide Kandidaten\n- Der gewählte wird Primärschlüssel, die anderen Alternativschlüssel' },
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'normalisierung', type: 'flashcard', difficulty: 'hard',
    questionText: 'Zeige ein Beispiel für die Normalisierung von der unnormalisierten Form bis zur 3. Normalform.',
    questionData: { answer: 'Unnormalisiert:\n| BestellNr | Kunde | Artikel1 | Artikel2 |\n→ Problem: Wiederholungsgruppen\n\n1NF (atomar):\n| BestellNr | Kunde | Artikel |\n| 1 | Müller | Laptop |\n| 1 | Müller | Maus |\n→ Jede Spalte enthält nur einen Wert\n\n2NF (volle Abhängigkeit):\nBestellungen(BestellNr, KundenNr)\nBestellpositionen(BestellNr, Artikel)\nKunden(KundenNr, Name)\n→ Kunde hängt nur von BestellNr ab, nicht von Artikel\n\n3NF (keine transitive Abhängigkeit):\nFalls: PLZ → Stadt (Stadt hängt transitiv vom Schlüssel ab)\n→ Eigene Tabelle: PLZ_Stadt(PLZ, Stadt)' },
    xpReward: 20,
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'normalisierung', type: 'true_false', difficulty: 'medium',
    questionText: 'Eine Tabelle in 3NF ist automatisch auch in 1NF und 2NF.',
    questionData: { isTrue: true, explanation: 'Die Normalformen bauen aufeinander auf: 3NF setzt 2NF voraus, 2NF setzt 1NF voraus. Daher ist 3NF immer auch 2NF und 1NF.' },
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'normalisierung', type: 'multiple_choice', difficulty: 'hard',
    questionText: 'Welches Problem entsteht durch fehlende Normalisierung NICHT?',
    questionData: { options: [
      'Einfüge-Anomalie (Insert)',
      'Lösch-Anomalie (Delete)',
      'Änderungs-Anomalie (Update)',
      'Lese-Anomalie (Select)',
    ], correctIndex: 3 },
    explanation: 'Die drei Anomalien sind: Einfüge-, Lösch- und Änderungs-Anomalie. "Lese-Anomalie" gibt es nicht als Begriff der Normalisierung.',
    xpReward: 15,
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'referentielle-integritaet', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Fremdschlüssel-Aktionen ihren Bedeutungen zu:',
    questionData: { pairs: [
      { left: 'CASCADE', right: 'Änderung/Löschung wird an abhängige Datensätze weitergegeben' },
      { left: 'SET NULL', right: 'Fremdschlüssel wird auf NULL gesetzt' },
      { left: 'RESTRICT', right: 'Löschung/Änderung wird verhindert' },
      { left: 'SET DEFAULT', right: 'Fremdschlüssel wird auf den Standardwert gesetzt' },
    ]},
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'referentielle-integritaet', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind die verschiedenen Arten von Integritätsbedingungen in Datenbanken?',
    questionData: { answer: '1. Entitätsintegrität:\n- Jede Tabelle hat einen Primärschlüssel\n- Primärschlüssel darf nicht NULL sein\n\n2. Referentielle Integrität:\n- Fremdschlüssel verweisen auf existierende Primärschlüssel\n- Oder sind NULL (falls erlaubt)\n\n3. Domänenintegrität:\n- Werte müssen zum Datentyp passen\n- CHECK-Constraints (z.B. ALTER >= 0)\n\n4. Benutzerdefinierte Integrität:\n- Geschäftsregeln als Constraints\n- Trigger, Stored Procedures\n- Beispiel: Bestelldatum muss in der Zukunft liegen' },
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'transaktionen', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welches Isolationslevel in SQL erlaubt "Dirty Reads"?',
    questionData: { options: ['READ UNCOMMITTED', 'READ COMMITTED', 'REPEATABLE READ', 'SERIALIZABLE'], correctIndex: 0 },
    explanation: 'READ UNCOMMITTED ist das niedrigste Level – man kann Daten lesen, die von einer anderen Transaktion noch nicht bestätigt (committed) wurden.'
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'transaktionen', type: 'true_false', difficulty: 'medium',
    questionText: 'Ein Deadlock entsteht, wenn zwei Transaktionen gegenseitig auf die Freigabe von Sperren warten.',
    questionData: { isTrue: true, explanation: 'Deadlock: Transaktion A sperrt Ressource 1 und wartet auf Ressource 2, Transaktion B sperrt Ressource 2 und wartet auf Ressource 1. Keiner kann fortfahren.' },
  },
  {
    topicSlug: 'datenbanken', subtopicSlug: 'er-modell', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welchen Kardinalitätstyp hat die Beziehung "Ein Schüler hat EINE Schülernummer"?',
    questionData: { options: ['1:1', '1:n', 'n:m', 'n:1'], correctIndex: 0 },
    explanation: '1:1 – jedem Schüler ist genau eine Schülernummer zugeordnet und umgekehrt.'
  },
]
