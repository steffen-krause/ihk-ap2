import type { QuestionSeed } from '../seed-types'

export const programmiersprachenQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'programmiersprachen', subtopicSlug: 'paradigmen', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Programmierparadigmen ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: 'Imperativ', right: 'Schritt-für-Schritt-Anweisungen (wie)' },
      { left: 'Deklarativ', right: 'Beschreibt das gewünschte Ergebnis (was)' },
      { left: 'Objektorientiert', right: 'Daten und Methoden in Objekten gebündelt' },
      { left: 'Funktional', right: 'Funktionen als Grundbausteine, keine Seiteneffekte' },
    ]},
  },
  {
    topicSlug: 'programmiersprachen', subtopicSlug: 'compiler-interpreter', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Was ist der Hauptunterschied zwischen Compiler und Interpreter?',
    questionData: { options: [
      'Compiler sind schneller in der Entwicklung',
      'Compiler übersetzen den gesamten Code vor der Ausführung, Interpreter Zeile für Zeile',
      'Interpreter erzeugen Maschinencode, Compiler Bytecode',
      'Es gibt keinen Unterschied',
    ], correctIndex: 1 },
    explanation: 'Compiler: Gesamter Quellcode → Maschinencode → dann ausführen (z.B. C, Go). Interpreter: Zeile für Zeile übersetzen und sofort ausführen (z.B. Python, JS).'
  },
  {
    topicSlug: 'programmiersprachen', subtopicSlug: 'compiler-interpreter', type: 'true_false', difficulty: 'medium',
    questionText: 'Java nutzt sowohl einen Compiler als auch einen Interpreter (JIT-Kompilierung).',
    questionData: { isTrue: true, explanation: 'Java: Quellcode → javac (Compiler) → Bytecode → JVM (Interpreter/JIT-Compiler). Just-In-Time-Kompilierung übersetzt häufig genutzte Bytecode-Stellen zur Laufzeit in nativen Maschinencode.' },
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'programmiersprachen', subtopicSlug: 'paradigmen', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Programmiersprachen ihren Hauptparadigmen zu:',
    questionData: { pairs: [
      { left: 'C', right: 'Imperativ/Prozedural' },
      { left: 'Java', right: 'Objektorientiert' },
      { left: 'Haskell', right: 'Funktional' },
      { left: 'SQL', right: 'Deklarativ' },
    ]},
  },
  {
    topicSlug: 'programmiersprachen', subtopicSlug: 'paradigmen', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen statischer und dynamischer Typisierung?',
    questionData: { answer: 'Statische Typisierung:\n- Typen werden zur Compile-Zeit geprüft\n- Variablentyp muss deklariert werden (oder wird aus dem Wert abgeleitet)\n- Fehler werden früh erkannt\n- Beispiele: Java, C#, TypeScript, Go\n- int x = 42; (Typ fest)\n\nDynamische Typisierung:\n- Typen werden zur Laufzeit geprüft\n- Variable kann verschiedene Typen haben\n- Flexibler, aber fehleranfälliger\n- Beispiele: Python, JavaScript, Ruby, PHP\n- x = 42  → x = "Hallo" (beides erlaubt)\n\nStarke Typisierung: Keine implizite Konvertierung (Python)\nSchwache Typisierung: Automatische Konvertierung (JavaScript: "5" + 3 = "53")' },
  },
  {
    topicSlug: 'programmiersprachen', subtopicSlug: 'paradigmen', type: 'true_false', difficulty: 'easy',
    questionText: 'Python ist eine statisch typisierte Programmiersprache.',
    questionData: { isTrue: false, explanation: 'Python ist dynamisch typisiert – Variablentypen werden zur Laufzeit festgelegt. Man kann x = 42 und dann x = "Hallo" zuweisen.' },
  },
  {
    topicSlug: 'programmiersprachen', subtopicSlug: 'compiler-interpreter', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind die Vorteile und Nachteile von Compiler vs. Interpreter?',
    questionData: { answer: 'Compiler:\n+ Schnellere Ausführung (vorkompiliert)\n+ Fehler werden vor dem Ausführen gefunden\n+ Optimierung des gesamten Codes möglich\n- Kompilierungszeit nötig\n- Plattformspezifischer Output\n- Gesamter Code muss fehlerfrei sein\nBeispiele: C, C++, Go, Rust\n\nInterpreter:\n+ Sofortige Ausführung (kein Build-Schritt)\n+ Plattformunabhängiger Quellcode\n+ Einfacher zum Testen/Debuggen\n- Langsamere Ausführung\n- Fehler erst zur Laufzeit erkannt\n- Interpreter muss installiert sein\nBeispiele: Python, Ruby, PHP\n\nHybrid (Compiler + VM):\nJava (javac → Bytecode → JVM)\nC# (csc → IL → CLR)' },
  },
  {
    topicSlug: 'programmiersprachen', subtopicSlug: 'compiler-interpreter', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Sprachen ihrem Übersetzungsverfahren zu:',
    questionData: { pairs: [
      { left: 'C/C++', right: 'Compiler → Maschinencode' },
      { left: 'Python', right: 'Interpreter' },
      { left: 'Java', right: 'Compiler → Bytecode → JVM (JIT)' },
      { left: 'JavaScript', right: 'JIT-Compiler im Browser (V8)' },
    ]},
  },
  {
    topicSlug: 'programmiersprachen', subtopicSlug: 'paradigmen', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welches Programmierparadigma beschreibt SQL?',
    questionData: { options: ['Imperativ', 'Deklarativ', 'Objektorientiert', 'Funktional'], correctIndex: 1 },
    explanation: 'SQL ist deklarativ: Man beschreibt WAS man haben will (SELECT ... WHERE ...), nicht WIE es geholt werden soll.'
  },
]
