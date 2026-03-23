import type { QuestionSeed } from '../seed-types'

export const pseudocodeQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welche Schleifenart prüft die Bedingung NACH dem ersten Durchlauf?',
    questionData: { options: ['Kopfgesteuerte Schleife (SOLANGE)', 'Fußgesteuerte Schleife (WIEDERHOLE...BIS)', 'Zählergesteuerte Schleife (FÜR)', 'Keine davon'], correctIndex: 1 },
    explanation: 'Die fußgesteuerte Schleife (WIEDERHOLE...BIS) wird mindestens einmal ausgeführt, da die Bedingung erst am Ende geprüft wird.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'true_false', difficulty: 'easy',
    questionText: 'Eine kopfgesteuerte Schleife wird immer mindestens einmal ausgeführt.',
    questionData: { isTrue: false, explanation: 'Eine kopfgesteuerte Schleife (SOLANGE) prüft die Bedingung VOR dem ersten Durchlauf. Ist die Bedingung von Anfang an falsch, wird sie nie ausgeführt.' },
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'fill_blank', difficulty: 'medium',
    questionText: 'Ergänze die Pseudocode-Struktur:\n[BLANK] bedingung [BLANK]\n    anweisung\n[BLANK]',
    questionData: { template: '[BLANK] bedingung [BLANK]\n    anweisung\n[BLANK]', expectedAnswers: ['WENN', 'DANN', 'ENDE WENN'] },
    explanation: 'WENN...DANN...ENDE WENN ist die Grundstruktur einer Verzweigung in IHK-Pseudocode.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'pseudocode', difficulty: 'hard',
    questionText: 'Schreibe Pseudocode, der alle doppelten Einträge aus einem Array entfernt und ein neues Array zurückgibt.',
    questionData: { solution: 'gesehen = leere Menge\nergebnis = leeres Array\nFÜR JEDES element IN array\n    WENN element NICHT IN gesehen DANN\n        füge element zu gesehen hinzu\n        füge element zu ergebnis hinzu\n    ENDE WENN\nENDE FÜR\nRÜCKGABE ergebnis' },
    explanation: 'Typische Prüfungsaufgabe! Nutze eine Menge (Set) um bereits gesehene Elemente zu verfolgen.',
    xpReward: 20,
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'sortieralgorithmen', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welcher Sortieralgorithmus "sucht immer das Minimum im unsortierten Rest"?',
    questionData: { options: ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Merge Sort'], correctIndex: 2 },
    explanation: 'Selection Sort sucht in jedem Durchlauf das kleinste Element im unsortierten Bereich und tauscht es an die nächste Position.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'sortieralgorithmen', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Sortieralgorithmen ihrer Funktionsweise zu:',
    questionData: { pairs: [
      { left: 'Bubble Sort', right: 'Nachbarn vergleichen und tauschen' },
      { left: 'Selection Sort', right: 'Minimum suchen und nach vorne bringen' },
      { left: 'Insertion Sort', right: 'Element an richtige Stelle im sortierten Teil einfügen' },
    ]},
    explanation: 'Alle drei haben im Worst Case O(n²) Komplexität.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'sortieralgorithmen', type: 'true_false', difficulty: 'easy',
    questionText: 'Bubble Sort hat eine Best-Case-Komplexität von O(n), wenn das Array bereits sortiert ist.',
    questionData: { isTrue: true, explanation: 'Mit einer Optimierung (Abbruch wenn keine Tauschung stattfand) ist Bubble Sort O(n) im Best Case.' },
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'sortieralgorithmen', type: 'pseudocode', difficulty: 'hard',
    questionText: 'Schreibe den Pseudocode für Bubble Sort, der ein Array aufsteigend sortiert.',
    questionData: { solution: 'FÜR i = n - 1 BIS 1 MIT SCHRITT -1\n    FÜR j = 0 BIS i - 1 MIT SCHRITT +1\n        WENN array[j] > array[j + 1] DANN\n            tausche array[j] mit array[j + 1]\n        ENDE WENN\n    ENDE FÜR\nENDE FÜR' },
    explanation: 'Das größte Element "blubbert" in jedem Durchlauf ans Ende des unsortierten Bereichs.',
    xpReward: 20,
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'suchalgorithmen', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welche Voraussetzung muss für die binäre Suche erfüllt sein?',
    questionData: { options: ['Das Array muss Zahlen enthalten', 'Das Array muss sortiert sein', 'Das Array darf keine Duplikate haben', 'Das Array muss mindestens 10 Elemente haben'], correctIndex: 1 },
    explanation: 'Die binäre Suche halbiert den Suchbereich in jedem Schritt – das funktioniert nur bei sortierten Daten.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'suchalgorithmen', type: 'flashcard', difficulty: 'easy',
    questionText: 'Was ist die Komplexität der linearen Suche vs. der binären Suche?',
    questionData: { answer: 'Lineare Suche: O(n) – muss im schlimmsten Fall jedes Element prüfen.\nBinäre Suche: O(log n) – halbiert den Suchbereich bei jedem Schritt.\n\nBeispiel: Bei 1.000.000 Elementen braucht lineare Suche bis zu 1.000.000 Vergleiche, binäre Suche nur ~20.' },
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'rekursion', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was passiert bei einer Rekursion ohne Basisfall?',
    questionData: { options: ['Sie gibt 0 zurück', 'Es kommt zu einem Stack Overflow', 'Sie stoppt automatisch nach 100 Aufrufen', 'Der Compiler verhindert die Ausführung'], correctIndex: 1 },
    explanation: 'Ohne Basisfall ruft sich die Funktion endlos selbst auf, bis der Speicher (Stack) voll ist → Stack Overflow.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'rekursion', type: 'pseudocode', difficulty: 'medium',
    questionText: 'Schreibe eine rekursive Funktion in Pseudocode, die die Fakultät von n berechnet (n!).',
    questionData: { solution: 'FUNKTION fakultaet(n)\n    WENN n <= 1 DANN\n        RÜCKGABE 1\n    SONST\n        RÜCKGABE n * fakultaet(n - 1)\n    ENDE WENN\nENDE FUNKTION' },
    explanation: 'Basisfall: n <= 1 → 1. Rekursiv: n * fakultaet(n-1). Beispiel: 5! = 5*4*3*2*1 = 120.'
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welche Pseudocode-Struktur wird verwendet, um eine Fallunterscheidung mit mehreren Fällen zu implementieren?',
    questionData: { options: ['WENN...DANN', 'FALLS...IST...ENDE FALLS', 'SOLANGE...MACHE', 'FÜR JEDES'], correctIndex: 1 },
    explanation: 'FALLS (SWITCH/CASE) erlaubt eine übersichtliche Fallunterscheidung mit mehreren Werten.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'pseudocode', difficulty: 'medium',
    questionText: 'Schreibe Pseudocode, der die Summe aller Zahlen von 1 bis n berechnet (mit einer Schleife).',
    questionData: { solution: 'summe = 0\nFÜR i = 1 BIS n MIT SCHRITT +1\n    summe = summe + i\nENDE FÜR\nRÜCKGABE summe' },
    explanation: 'Alternativ kann die Gaußsche Summenformel n*(n+1)/2 verwendet werden.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'pseudocode', difficulty: 'medium',
    questionText: 'Schreibe Pseudocode, der prüft, ob eine Zahl n eine Primzahl ist.',
    questionData: { solution: 'WENN n < 2 DANN\n    RÜCKGABE FALSCH\nENDE WENN\nFÜR i = 2 BIS Wurzel(n) MIT SCHRITT +1\n    WENN n MOD i = 0 DANN\n        RÜCKGABE FALSCH\n    ENDE WENN\nENDE FÜR\nRÜCKGABE WAHR' },
    explanation: 'Man prüft nur bis zur Wurzel von n, da ein größerer Teiler einen kleineren Gegenteiler hätte.',
    xpReward: 15,
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'fill_blank', difficulty: 'easy',
    questionText: 'Ergänze die Zählergesteuerte Schleife:\n[BLANK] i = 1 [BLANK] 10 MIT SCHRITT +1\n    AUSGABE i\n[BLANK]',
    questionData: { template: '[BLANK] i = 1 [BLANK] 10 MIT SCHRITT +1\n    AUSGABE i\n[BLANK]', expectedAnswers: ['FÜR', 'BIS', 'ENDE FÜR'] },
    explanation: 'FÜR...BIS...MIT SCHRITT...ENDE FÜR ist die Syntax der Zählergesteuerten Schleife.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'pseudocode', difficulty: 'hard',
    questionText: 'Schreibe Pseudocode, der das Maximum und Minimum eines Arrays gleichzeitig findet.',
    questionData: { solution: 'min = array[0]\nmax = array[0]\nFÜR i = 1 BIS Länge(array) - 1 MIT SCHRITT +1\n    WENN array[i] < min DANN\n        min = array[i]\n    ENDE WENN\n    WENN array[i] > max DANN\n        max = array[i]\n    ENDE WENN\nENDE FÜR\nRÜCKGABE min, max' },
    explanation: 'Man initialisiert min und max mit dem ersten Element und vergleicht dann alle weiteren.',
    xpReward: 20,
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'true_false', difficulty: 'medium',
    questionText: 'Die Anweisung "n MOD 2 = 0" prüft, ob eine Zahl gerade ist.',
    questionData: { isTrue: true, explanation: 'MOD ist der Modulo-Operator (Rest der Division). n MOD 2 ergibt 0 bei geraden und 1 bei ungeraden Zahlen.' },
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'sortieralgorithmen', type: 'pseudocode', difficulty: 'hard',
    questionText: 'Schreibe den Pseudocode für Insertion Sort.',
    questionData: { solution: 'FÜR i = 1 BIS n - 1 MIT SCHRITT +1\n    aktuell = array[i]\n    j = i - 1\n    SOLANGE j >= 0 UND array[j] > aktuell\n        array[j + 1] = array[j]\n        j = j - 1\n    ENDE SOLANGE\n    array[j + 1] = aktuell\nENDE FÜR' },
    explanation: 'Insertion Sort "schiebt" Elemente nach rechts, um Platz für das aktuelle Element zu machen.',
    xpReward: 20,
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'sortieralgorithmen', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welcher Sortieralgorithmus hat im Worst Case eine Komplexität von O(n log n)?',
    questionData: { options: ['Bubble Sort', 'Selection Sort', 'Merge Sort', 'Insertion Sort'], correctIndex: 2 },
    explanation: 'Merge Sort hat immer O(n log n), da das Array rekursiv halbiert und dann zusammengeführt wird.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'sortieralgorithmen', type: 'true_false', difficulty: 'medium',
    questionText: 'Selection Sort ist ein stabiles Sortierverfahren.',
    questionData: { isTrue: false, explanation: 'Selection Sort ist NICHT stabil – gleiche Elemente können ihre relative Reihenfolge verlieren. Insertion Sort und Merge Sort sind stabil.' },
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'sortieralgorithmen', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was bedeutet "stabil" bei Sortieralgorithmen?',
    questionData: { answer: 'Ein stabiler Sortieralgorithmus bewahrt die relative Reihenfolge von Elementen mit gleichem Schlüsselwert.\n\nBeispiel: Sortierung nach Note:\nVorher: (Anna, 2), (Ben, 1), (Clara, 2)\nStabil: (Ben, 1), (Anna, 2), (Clara, 2) — Anna bleibt vor Clara\nInstabil: (Ben, 1), (Clara, 2), (Anna, 2) — Reihenfolge kann sich ändern\n\nStabile Verfahren: Insertion Sort, Merge Sort, Bubble Sort\nInstabile Verfahren: Selection Sort, Quicksort (Standard), Heapsort' },
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'suchalgorithmen', type: 'pseudocode', difficulty: 'medium',
    questionText: 'Schreibe den Pseudocode für die lineare Suche in einem Array.',
    questionData: { solution: 'FUNKTION linearesSuchen(array, gesucht)\n    FÜR i = 0 BIS Länge(array) - 1 MIT SCHRITT +1\n        WENN array[i] = gesucht DANN\n            RÜCKGABE i\n        ENDE WENN\n    ENDE FÜR\n    RÜCKGABE -1\nENDE FUNKTION' },
    explanation: 'Die lineare Suche prüft jedes Element nacheinander. -1 bedeutet "nicht gefunden".'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'suchalgorithmen', type: 'pseudocode', difficulty: 'hard',
    questionText: 'Schreibe den Pseudocode für die binäre Suche (iterativ).',
    questionData: { solution: 'FUNKTION binaereSuche(array, gesucht)\n    links = 0\n    rechts = Länge(array) - 1\n    SOLANGE links <= rechts\n        mitte = (links + rechts) / 2 (ganzzahlig)\n        WENN array[mitte] = gesucht DANN\n            RÜCKGABE mitte\n        SONST WENN array[mitte] < gesucht DANN\n            links = mitte + 1\n        SONST\n            rechts = mitte - 1\n        ENDE WENN\n    ENDE SOLANGE\n    RÜCKGABE -1\nENDE FUNKTION' },
    explanation: 'Die binäre Suche halbiert den Suchbereich bei jedem Schritt → O(log n).',
    xpReward: 20,
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'suchalgorithmen', type: 'true_false', difficulty: 'easy',
    questionText: 'Die lineare Suche funktioniert nur auf sortierten Arrays.',
    questionData: { isTrue: false, explanation: 'Die lineare Suche funktioniert auf sortierten UND unsortierten Arrays – sie prüft einfach jedes Element nacheinander.' },
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'rekursion', type: 'pseudocode', difficulty: 'hard',
    questionText: 'Schreibe eine rekursive Funktion, die die Fibonacci-Zahl für n berechnet.',
    questionData: { solution: 'FUNKTION fibonacci(n)\n    WENN n <= 0 DANN\n        RÜCKGABE 0\n    SONST WENN n = 1 DANN\n        RÜCKGABE 1\n    SONST\n        RÜCKGABE fibonacci(n - 1) + fibonacci(n - 2)\n    ENDE WENN\nENDE FUNKTION' },
    explanation: 'Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13... Jede Zahl ist die Summe der zwei vorherigen. Die naive Rekursion hat O(2^n) – exponentiell langsam!',
    xpReward: 20,
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'rekursion', type: 'true_false', difficulty: 'medium',
    questionText: 'Jede rekursive Funktion kann auch iterativ (mit Schleifen) geschrieben werden.',
    questionData: { isTrue: true, explanation: 'Jede Rekursion lässt sich in eine iterative Lösung umwandeln (ggf. mit explizitem Stack). Umgekehrt gilt das auch.' },
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'rekursion', type: 'flashcard', difficulty: 'medium',
    questionText: 'Welche zwei Bestandteile hat jede korrekte rekursive Funktion?',
    questionData: { answer: '1. Basisfall (Abbruchbedingung):\n- Stoppt die Rekursion\n- Gibt direkt einen Wert zurück\n- Beispiel: WENN n <= 1 DANN RÜCKGABE 1\n\n2. Rekursiver Aufruf:\n- Ruft die Funktion mit "kleinerem" Problem auf\n- Muss sich dem Basisfall nähern\n- Beispiel: RÜCKGABE n * fakultaet(n - 1)\n\nFehlt der Basisfall → Endlosrekursion → Stack Overflow\nNähert sich der Aufruf nicht dem Basisfall → ebenfalls Endlosrekursion' },
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'pseudocode', difficulty: 'medium',
    questionText: 'Schreibe Pseudocode, der einen String umkehrt (z.B. "Hallo" → "ollaH").',
    questionData: { solution: 'ergebnis = ""\nFÜR i = Länge(text) - 1 BIS 0 MIT SCHRITT -1\n    ergebnis = ergebnis + text[i]\nENDE FÜR\nRÜCKGABE ergebnis' },
    explanation: 'Man iteriert rückwärts durch den String und baut einen neuen String auf.'
  },
  {
    topicSlug: 'pseudocode', subtopicSlug: 'kontrollstrukturen', type: 'pseudocode', difficulty: 'hard',
    questionText: 'Schreibe Pseudocode für den Euklidischen Algorithmus (ggT von zwei Zahlen a und b).',
    questionData: { solution: 'FUNKTION ggT(a, b)\n    SOLANGE b != 0\n        rest = a MOD b\n        a = b\n        b = rest\n    ENDE SOLANGE\n    RÜCKGABE a\nENDE FUNKTION' },
    explanation: 'Der Euklidische Algorithmus berechnet den größten gemeinsamen Teiler. Beispiel: ggT(48, 18) → 48 MOD 18=12 → 18 MOD 12=6 → 12 MOD 6=0 → ggT=6',
    xpReward: 20,
  },
]
