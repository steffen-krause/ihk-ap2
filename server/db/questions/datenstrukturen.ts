import type { QuestionSeed } from '../seed-types'

export const datenstrukturenQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'grundstrukturen', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Datenstrukturen ihrem Prinzip zu:',
    questionData: { pairs: [
      { left: 'Stack', right: 'LIFO (Last In, First Out)' },
      { left: 'Queue', right: 'FIFO (First In, First Out)' },
      { left: 'Array', right: 'Feste Größe, direkter Indexzugriff O(1)' },
      { left: 'Verkettete Liste', right: 'Dynamische Größe, sequenzieller Zugriff' },
    ]},
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'grundstrukturen', type: 'true_false', difficulty: 'easy',
    questionText: 'Ein Stack arbeitet nach dem FIFO-Prinzip (First In, First Out).',
    questionData: { isTrue: false, explanation: 'Ein Stack arbeitet nach LIFO (Last In, First Out): Das zuletzt hinzugefügte Element wird zuerst entfernt. FIFO ist das Prinzip einer Queue (Warteschlange).' },
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'baeume-graphen', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist ein binärer Suchbaum und wie funktioniert die Suche darin?',
    questionData: { answer: 'Binärer Suchbaum (BST):\n- Jeder Knoten hat max. 2 Kinder (links + rechts)\n- Links: alle Werte kleiner als der Knoten\n- Rechts: alle Werte größer als der Knoten\n\nSuche:\n1. Beginne an der Wurzel\n2. Gesuchter Wert < Knoten → gehe links\n3. Gesuchter Wert > Knoten → gehe rechts\n4. Wert gefunden → fertig\n\nKomplexität:\n- Balanciert: O(log n)\n- Entartet (Liste): O(n)\n\nBeispiel-Baum:\n       8\n      / \\\n     3   10\n    / \\    \\\n   1   6    14\n\nSuche nach 6: 8→3→6 ✓ (3 Schritte statt 6 bei linearer Suche)' },
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'grundstrukturen', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre die Stack-Operationen push, pop und peek.',
    questionData: { answer: 'Stack (Stapel) – LIFO-Prinzip:\n\npush(element):\n- Legt ein Element OBEN auf den Stack\n- Beispiel: push(5) → Stack: [1, 3, 5]\n\npop():\n- Entfernt und gibt das OBERSTE Element zurück\n- Beispiel: pop() → gibt 5 zurück, Stack: [1, 3]\n- Bei leerem Stack → Error/Exception\n\npeek() / top():\n- Gibt das oberste Element zurück, OHNE es zu entfernen\n- Beispiel: peek() → gibt 3 zurück, Stack bleibt [1, 3]\n\nAnwendungsbeispiele:\n- Undo/Redo\n- Browser-Verlauf (Zurück-Button)\n- Aufrufstack bei Funktionsaufrufen\n- Klammerprüfung in Compilern' },
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'grundstrukturen', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welche Datenstruktur eignet sich am besten für einen "Rückgängig machen"-Mechanismus?',
    questionData: { options: ['Queue', 'Stack', 'Array', 'HashMap'], correctIndex: 1 },
    explanation: 'Stack (LIFO): Die letzte Aktion wird zuerst rückgängig gemacht. push(Aktion) bei Ausführung, pop() bei Undo.'
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'grundstrukturen', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Zeitkomplexitäten den Array-Operationen zu:',
    questionData: { pairs: [
      { left: 'Zugriff per Index', right: 'O(1)' },
      { left: 'Suche (unsortiert)', right: 'O(n)' },
      { left: 'Einfügen am Ende', right: 'O(1) amortisiert' },
      { left: 'Einfügen am Anfang', right: 'O(n)' },
    ]},
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'grundstrukturen', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen Array und verketteter Liste?',
    questionData: { answer: 'Array:\n- Zusammenhängender Speicherblock\n- Feste Größe (oder dynamisch mit Kopieren)\n- Direkter Zugriff per Index: O(1)\n- Einfügen/Löschen in der Mitte: O(n)\n- Cache-freundlich (Speicher zusammenhängend)\n\nVerkettete Liste:\n- Knoten verstreut im Speicher\n- Jeder Knoten zeigt auf den nächsten\n- Kein direkter Indexzugriff: O(n)\n- Einfügen/Löschen bei bekannter Position: O(1)\n- Mehr Speicherverbrauch (Pointer)\n\nEinfach verkettet: Knoten → nächster\nDoppelt verkettet: vorheriger ← Knoten → nächster\n\nWahl: Array für häufigen Zugriff, Liste für häufiges Einfügen/Löschen' },
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'grundstrukturen', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Wofür steht FIFO?',
    questionData: { options: ['First In, First Out', 'First In, Fast Out', 'Fully Indexed File Object', 'Final Input, First Output'], correctIndex: 0 },
    explanation: 'FIFO = First In, First Out. Das Prinzip einer Warteschlange (Queue): Wer zuerst ansteht, wird zuerst bedient.'
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'grundstrukturen', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist eine HashMap (Dictionary) und wie funktioniert sie?',
    questionData: { answer: 'HashMap / Dictionary / Assoziatives Array:\n\nPrinzip:\n- Speichert Schlüssel-Wert-Paare (Key-Value)\n- Zugriff per Schlüssel: O(1) im Durchschnitt\n\nFunktionsweise:\n1. Hashfunktion berechnet Index aus dem Schlüssel\n2. hash("Name") → Index 42\n3. Wert wird an Index 42 gespeichert\n\nKollisionen (gleicher Hash für verschiedene Keys):\n- Chaining: Verkettete Liste am Index\n- Open Addressing: Nächsten freien Platz suchen\n\nOperationen:\n- put(key, value): O(1)\n- get(key): O(1)\n- delete(key): O(1)\n- Worst Case (viele Kollisionen): O(n)\n\nBeispiele: Python dict, Java HashMap, JavaScript Object/Map' },
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'baeume-graphen', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Baum-Begriffe ihren Bedeutungen zu:',
    questionData: { pairs: [
      { left: 'Wurzel (Root)', right: 'Oberster Knoten ohne Eltern' },
      { left: 'Blatt (Leaf)', right: 'Knoten ohne Kinder' },
      { left: 'Tiefe (Depth)', right: 'Abstand eines Knotens zur Wurzel' },
      { left: 'Höhe (Height)', right: 'Längster Pfad von der Wurzel zum Blatt' },
    ]},
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'baeume-graphen', type: 'flashcard', difficulty: 'hard',
    questionText: 'Welche Traversierungsarten gibt es bei Bäumen?',
    questionData: { answer: 'Tiefensuche (DFS – Depth First Search):\n\n1. Pre-Order (Wurzel-Links-Rechts):\n   Besuche Wurzel → linker Teilbaum → rechter Teilbaum\n   Beispiel: 8, 3, 1, 6, 10, 14\n\n2. In-Order (Links-Wurzel-Rechts):\n   Besuche linker Teilbaum → Wurzel → rechter Teilbaum\n   Bei BST: Sortierte Ausgabe!\n   Beispiel: 1, 3, 6, 8, 10, 14\n\n3. Post-Order (Links-Rechts-Wurzel):\n   Besuche linker Teilbaum → rechter Teilbaum → Wurzel\n   Beispiel: 1, 6, 3, 14, 10, 8\n\nBreitensuche (BFS – Breadth First Search):\n   Level für Level von oben nach unten\n   Beispiel: 8, 3, 10, 1, 6, 14\n   Verwendet Queue statt Stack' },
    xpReward: 20,
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'baeume-graphen', type: 'true_false', difficulty: 'medium',
    questionText: 'In einem gerichteten Graphen können Kanten nur in eine Richtung durchlaufen werden.',
    questionData: { isTrue: true, explanation: 'Gerichteter Graph (Directed Graph): Kanten haben eine Richtung (A → B ≠ B → A). Ungerichteter Graph: Kanten gelten in beide Richtungen.' },
  },
  {
    topicSlug: 'datenstrukturen', subtopicSlug: 'baeume-graphen', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen einem Baum und einem Graphen?',
    questionData: { options: [
      'Es gibt keinen Unterschied',
      'Ein Baum ist ein zyklenfreier zusammenhängender Graph',
      'Ein Graph kann keine Zyklen haben',
      'Ein Baum hat immer mehr Kanten als Knoten',
    ], correctIndex: 1 },
    explanation: 'Ein Baum ist ein spezieller Graph: zusammenhängend (alle Knoten erreichbar) und zyklenfrei (keine Kreise). Ein Baum mit n Knoten hat genau n-1 Kanten.'
  },
]
