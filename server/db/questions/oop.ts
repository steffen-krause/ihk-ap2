import type { QuestionSeed } from '../seed-types'

export const oopQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'oop', subtopicSlug: 'oop-grundlagen', type: 'matching', difficulty: 'easy',
    questionText: 'Ordne die OOP-Konzepte ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: 'Vererbung', right: 'Klasse übernimmt Eigenschaften einer anderen' },
      { left: 'Polymorphismus', right: 'Gleiche Methode, unterschiedliches Verhalten' },
      { left: 'Kapselung', right: 'Zugriff auf Daten nur über definierte Schnittstellen' },
      { left: 'Abstraktion', right: 'Wesentliche Merkmale hervorheben, Details verbergen' },
    ]},
  },
  {
    topicSlug: 'oop', subtopicSlug: 'oop-grundlagen', type: 'true_false', difficulty: 'easy',
    questionText: 'In Java/C# kann eine Klasse von mehreren Klassen gleichzeitig erben (Mehrfachvererbung).',
    questionData: { isTrue: false, explanation: 'Java und C# erlauben nur Einfachvererbung. Mehrfachvererbung ist über Interfaces/Schnittstellen möglich, aber nicht über Klassen.' },
  },
  {
    topicSlug: 'oop', subtopicSlug: 'solid', type: 'matching', difficulty: 'hard',
    questionText: 'Ordne die SOLID-Prinzipien ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: 'S – Single Responsibility', right: 'Eine Klasse hat genau eine Verantwortung' },
      { left: 'O – Open/Closed', right: 'Offen für Erweiterung, geschlossen für Änderung' },
      { left: 'L – Liskov Substitution', right: 'Unterklassen müssen die Basisklasse ersetzen können' },
      { left: 'D – Dependency Inversion', right: 'Abhängigkeit von Abstraktionen statt Implementierungen' },
    ]},
    xpReward: 15,
  },
  {
    topicSlug: 'oop', subtopicSlug: 'design-patterns', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welches Design Pattern stellt sicher, dass eine Klasse nur eine einzige Instanz hat?',
    questionData: { options: ['Factory Pattern', 'Singleton Pattern', 'Observer Pattern', 'Strategy Pattern'], correctIndex: 1 },
    explanation: 'Singleton: Privater Konstruktor + statische getInstance()-Methode → genau eine Instanz im gesamten Programm.'
  },
  {
    topicSlug: 'oop', subtopicSlug: 'design-patterns', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre Singleton, Observer und Factory Pattern kurz.',
    questionData: { answer: 'Singleton:\n- Nur EINE Instanz einer Klasse existiert\n- Privater Konstruktor + statische getInstance()\n- Beispiel: Datenbankverbindung, Logger\n\nObserver (Beobachter):\n- Ein Subjekt benachrichtigt viele Beobachter bei Zustandsänderung\n- Lose Kopplung: Subjekt kennt nur das Observer-Interface\n- Beispiel: Event-System, Newsletter\n\nFactory:\n- Erzeugung von Objekten wird an eine Factory-Methode delegiert\n- Entscheidung welche Klasse instanziiert wird, liegt bei der Factory\n- Beispiel: createButton() → WindowsButton oder MacButton je nach OS' },
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'oop', subtopicSlug: 'oop-grundlagen', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre den Unterschied zwischen Klasse und Objekt.',
    questionData: { answer: 'Klasse:\n- Bauplan/Vorlage (Blueprint)\n- Definiert Attribute und Methoden\n- Existiert zur Compile-Zeit\n- Beispiel: Klasse "Auto" mit Farbe, Geschwindigkeit, fahren()\n\nObjekt (Instanz):\n- Konkrete Ausprägung einer Klasse\n- Hat eigene Werte für Attribute\n- Existiert zur Laufzeit\n- Beispiel: meinAuto = new Auto("rot", 0)\n\nAnalogie:\n- Klasse = Keksausstecher (Form)\n- Objekt = Keks (konkretes Ergebnis)\n\nEine Klasse kann beliebig viele Objekte erzeugen.' },
  },
  {
    topicSlug: 'oop', subtopicSlug: 'oop-grundlagen', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was bedeutet "Polymorphismus" in der OOP?',
    questionData: { options: [
      'Eine Klasse hat viele Attribute',
      'Ein und dieselbe Methode kann in verschiedenen Klassen unterschiedlich implementiert sein',
      'Eine Methode kann nur einmal aufgerufen werden',
      'Klassen können nur von einer Basisklasse erben',
    ], correctIndex: 1 },
    explanation: 'Polymorphismus = "Vielgestaltigkeit". Methode tier.gibLaut() → Hund: "Wuff", Katze: "Miau" – gleiche Schnittstelle, unterschiedliches Verhalten.'
  },
  {
    topicSlug: 'oop', subtopicSlug: 'oop-grundlagen', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen Overloading (Überladen) und Overriding (Überschreiben)?',
    questionData: { options: [
      'Es gibt keinen Unterschied',
      'Overloading: gleicher Name, verschiedene Parameter. Overriding: gleiche Methode in Unterklasse neu implementiert',
      'Overriding: gleicher Name, verschiedene Parameter. Overloading: gleiche Methode in Unterklasse',
      'Overloading kann nur mit Konstruktoren verwendet werden',
    ], correctIndex: 1 },
    explanation: 'Overloading = compile-time Polymorphismus (add(int) vs add(int, int)). Overriding = runtime Polymorphismus (Unterklasse ersetzt Methode der Oberklasse).'
  },
  {
    topicSlug: 'oop', subtopicSlug: 'oop-grundlagen', type: 'true_false', difficulty: 'medium',
    questionText: 'Eine abstrakte Klasse kann direkt instanziiert werden.',
    questionData: { isTrue: false, explanation: 'Abstrakte Klassen können NICHT instanziiert werden (kein new AbstractClass()). Sie dienen als Basisklasse und müssen erst von einer konkreten Klasse geerbt werden.' },
  },
  {
    topicSlug: 'oop', subtopicSlug: 'oop-grundlagen', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen Interface und abstrakter Klasse?',
    questionData: { answer: 'Interface:\n- Rein abstrakt: NUR Methodensignaturen (kein Code)\n- Keine Attribute (nur Konstanten)\n- Eine Klasse kann MEHRERE Interfaces implementieren\n- Schlüsselwort: implements\n- Beispiel: interface Druckbar { void drucken(); }\n\nAbstrakte Klasse:\n- Kann abstrakte UND implementierte Methoden haben\n- Kann Attribute mit Werten haben\n- Klasse kann nur VON EINER abstrakten Klasse erben\n- Schlüsselwort: extends\n- Beispiel: abstract class Fahrzeug { int speed; abstract void fahren(); }\n\nFaustregel:\n- Interface = "kann" (Fähigkeit): Druckbar, Vergleichbar\n- Abstrakte Klasse = "ist ein" (Generalisierung): Fahrzeug, Tier' },
  },
  {
    topicSlug: 'oop', subtopicSlug: 'solid', type: 'flashcard', difficulty: 'hard',
    questionText: 'Erkläre alle 5 SOLID-Prinzipien mit konkreten Beispielen.',
    questionData: { answer: 'S – Single Responsibility:\nEine Klasse, ein Grund zur Änderung.\n✗ UserService: speichern + E-Mail senden + PDF erzeugen\n✓ UserRepository, EmailService, PdfGenerator\n\nO – Open/Closed:\nErweiterbar ohne bestehenden Code zu ändern.\n✓ Neue Formen durch Vererbung statt if-else-Ketten\n\nL – Liskov Substitution:\nUnterklassen müssen Oberklasse ersetzen können.\n✗ Quadrat extends Rechteck (setBreite ändert auch Höhe)\n\nI – Interface Segregation:\nViele spezifische statt ein großes Interface.\n✗ interface Arbeiter { arbeiten(); essen(); schlafen(); }\n✓ interface Arbeitbar { arbeiten(); } interface Essbar { essen(); }\n\nD – Dependency Inversion:\nHigh-level Module hängen von Abstraktionen ab.\n✗ OrderService nutzt direkt MySqlDatabase\n✓ OrderService nutzt interface Database' },
    xpReward: 20,
  },
  {
    topicSlug: 'oop', subtopicSlug: 'solid', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welches SOLID-Prinzip wird verletzt, wenn ein Interface zu viele Methoden erzwingt?',
    questionData: { options: [
      'Single Responsibility',
      'Open/Closed',
      'Interface Segregation',
      'Dependency Inversion',
    ], correctIndex: 2 },
    explanation: 'Interface Segregation Principle: Clients sollen nicht gezwungen werden, Interfaces zu implementieren, die sie nicht nutzen. Lieber viele kleine als ein großes Interface.'
  },
  {
    topicSlug: 'oop', subtopicSlug: 'design-patterns', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Design Patterns ihren Kategorien zu:',
    questionData: { pairs: [
      { left: 'Singleton', right: 'Erzeugungsmuster (Creational)' },
      { left: 'Factory', right: 'Erzeugungsmuster (Creational)' },
      { left: 'Observer', right: 'Verhaltensmuster (Behavioral)' },
      { left: 'Adapter', right: 'Strukturmuster (Structural)' },
    ]},
  },
  {
    topicSlug: 'oop', subtopicSlug: 'design-patterns', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist das MVC-Pattern (Model-View-Controller)?',
    questionData: { answer: 'MVC trennt eine Anwendung in drei Schichten:\n\nModel (Daten/Logik):\n- Enthält die Geschäftslogik und Daten\n- Unabhängig von der Darstellung\n- Beispiel: User-Klasse, Datenbank-Zugriff\n\nView (Darstellung):\n- Zeigt Daten dem Benutzer an\n- Keine Geschäftslogik\n- Beispiel: HTML-Template, GUI-Formular\n\nController (Steuerung):\n- Vermittelt zwischen Model und View\n- Nimmt Benutzereingaben entgegen\n- Ruft Model-Methoden auf\n- Wählt die richtige View\n\nVorteile:\n- Trennung der Verantwortlichkeiten\n- View austauschbar (Web, Desktop, Mobile)\n- Bessere Testbarkeit\n\nVarianten: MVP, MVVM' },
  },
  {
    topicSlug: 'oop', subtopicSlug: 'design-patterns', type: 'true_false', difficulty: 'medium',
    questionText: 'Das Strategy Pattern ermöglicht es, Algorithmen zur Laufzeit auszutauschen.',
    questionData: { isTrue: true, explanation: 'Strategy Pattern: Definiere eine Familie von Algorithmen, kapsele jeden einzelnen und mache sie austauschbar. Beispiel: Verschiedene Sortier-Strategien, Zahlungsmethoden.' },
  },
]
