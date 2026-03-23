import type { QuestionSeed } from '../seed-types'

export const umlQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'uml', subtopicSlug: 'klassendiagramm', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welches Zeichen steht in UML für "private" Sichtbarkeit?',
    questionData: { options: ['+ (Plus)', '- (Minus)', '# (Raute)', '~ (Tilde)'], correctIndex: 1 },
    explanation: '+ = public, - = private, # = protected, ~ = package.'
  },
  {
    topicSlug: 'uml', subtopicSlug: 'klassendiagramm', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die UML-Sichtbarkeitszeichen zu:',
    questionData: { pairs: [
      { left: '+', right: 'public' },
      { left: '-', right: 'private' },
      { left: '#', right: 'protected' },
      { left: '~', right: 'package' },
    ]},
  },
  {
    topicSlug: 'uml', subtopicSlug: 'klassendiagramm', type: 'true_false', difficulty: 'medium',
    questionText: 'Eine Komposition in UML bedeutet, dass das Teil ohne das Ganze existieren kann.',
    questionData: { isTrue: false, explanation: 'Komposition (ausgefüllte Raute) = starke Bindung: Das Teil kann NICHT ohne das Ganze existieren. Aggregation (leere Raute) = lose Bindung: Das Teil kann auch unabhängig existieren.' },
  },
  {
    topicSlug: 'uml', subtopicSlug: 'use-case', type: 'flashcard', difficulty: 'easy',
    questionText: 'Was ist der Unterschied zwischen <<include>> und <<extend>> im Use-Case-Diagramm?',
    questionData: { answer: '<<include>>: Der Basis-Use-Case ruft den eingebundenen Use-Case IMMER auf. Es ist eine zwingende Beziehung.\nBeispiel: "Geld abheben" <<include>> "PIN eingeben"\n\n<<extend>>: Der erweiternde Use-Case wird NUR unter bestimmten Bedingungen ausgeführt. Es ist eine optionale Erweiterung.\nBeispiel: "Artikel kaufen" <<extend>> "Gutschein einlösen"\n\nEselsbrücke: include = immer, extend = eventuell' },
  },
  {
    topicSlug: 'uml', subtopicSlug: 'aktivitaetsdiagramm', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welches Symbol zeigt in einem UML-Aktivitätsdiagramm eine Parallelisierung (Fork)?',
    questionData: { options: ['Raute (Entscheidung)', 'Dicker schwarzer Balken', 'Kreis mit Pfeil', 'Rechteck mit abgerundeten Ecken'], correctIndex: 1 },
    explanation: 'Ein dicker schwarzer Balken (Synchronisationsbalken) zeigt Fork (Aufspaltung in parallele Flüsse) oder Join (Zusammenführung).'
  },
  {
    topicSlug: 'uml', subtopicSlug: 'sequenzdiagramm', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Sequenzdiagramm-Elemente zu:',
    questionData: { pairs: [
      { left: 'Durchgezogener Pfeil', right: 'Synchrone Nachricht' },
      { left: 'Gestrichelter Pfeil', right: 'Antwortnachricht' },
      { left: 'Senkrechtes Rechteck', right: 'Aktivierung (Lebenszeitbalken)' },
      { left: 'X am Ende der Linie', right: 'Zerstörung des Objekts' },
    ]},
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'uml', subtopicSlug: 'klassendiagramm', type: 'matching', difficulty: 'hard',
    questionText: 'Ordne die UML-Beziehungstypen ihren Darstellungen zu:',
    questionData: { pairs: [
      { left: 'Vererbung', right: 'Durchgezogene Linie mit leerem Dreieck' },
      { left: 'Realisierung (Interface)', right: 'Gestrichelte Linie mit leerem Dreieck' },
      { left: 'Komposition', right: 'Durchgezogene Linie mit ausgefüllter Raute' },
      { left: 'Aggregation', right: 'Durchgezogene Linie mit leerer Raute' },
    ]},
    xpReward: 15,
  },
  {
    topicSlug: 'uml', subtopicSlug: 'klassendiagramm', type: 'flashcard', difficulty: 'medium',
    questionText: 'Wie werden abstrakte Klassen und Interfaces im UML-Klassendiagramm dargestellt?',
    questionData: { answer: 'Abstrakte Klasse:\n- Klassenname wird KURSIV geschrieben\n- Oder mit {abstract} markiert\n- Kann Attribute und implementierte Methoden haben\n- Kann nicht instanziiert werden\n\nInterface:\n- Stereotyp <<interface>> über dem Namen\n- Enthält nur Methodensignaturen (keine Implementierung)\n- Verbindung zur implementierenden Klasse: gestrichelte Linie mit leerem Dreieck (Realisierung)\n\nBeispiel:\n<<interface>> Fahrzeug: +fahren(), +bremsen()\nAuto ----▷ Fahrzeug (realisiert/implementiert)' },
  },
  {
    topicSlug: 'uml', subtopicSlug: 'klassendiagramm', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was bedeutet die Multiplizität "0..*" an einer Assoziation?',
    questionData: { options: [
      'Genau ein Element',
      'Kein oder beliebig viele Elemente',
      'Mindestens ein Element',
      'Genau null Elemente',
    ], correctIndex: 1 },
    explanation: '0..* = null bis unendlich viele. Weitere: 1 = genau eins, 1..* = mindestens eins, 0..1 = optional (null oder eins).'
  },
  {
    topicSlug: 'uml', subtopicSlug: 'klassendiagramm', type: 'true_false', difficulty: 'easy',
    questionText: 'In UML wird ein statisches (Klassen-)Attribut unterstrichen dargestellt.',
    questionData: { isTrue: true, explanation: 'Statische Attribute und Methoden werden in UML unterstrichen dargestellt. Sie gehören zur Klasse, nicht zu einzelnen Objekten.' },
  },
  {
    topicSlug: 'uml', subtopicSlug: 'use-case', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Was stellt ein Strichmännchen (Actor) im Use-Case-Diagramm dar?',
    questionData: { options: ['Den Programmierer', 'Einen Benutzer oder ein externes System', 'Eine Datenbank', 'Einen Server'], correctIndex: 1 },
    explanation: 'Ein Akteur (Actor) ist eine externe Entität, die mit dem System interagiert – kann ein Mensch, ein anderes System oder ein Zeittrigger sein.'
  },
  {
    topicSlug: 'uml', subtopicSlug: 'use-case', type: 'true_false', difficulty: 'medium',
    questionText: 'Im Use-Case-Diagramm zeigt die Systemgrenze (System Boundary) den Scope des Systems.',
    questionData: { isTrue: true, explanation: 'Die Systemgrenze (Rechteck um die Use Cases) zeigt, was zum System gehört. Akteure stehen außerhalb, Use Cases innerhalb.' },
  },
  {
    topicSlug: 'uml', subtopicSlug: 'use-case', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Use-Case-Diagramm-Elemente ihren Darstellungen zu:',
    questionData: { pairs: [
      { left: 'Akteur', right: 'Strichmännchen' },
      { left: 'Use Case', right: 'Ellipse mit Namen' },
      { left: 'Systemgrenze', right: 'Rechteck um die Use Cases' },
      { left: 'Assoziation', right: 'Durchgezogene Linie zwischen Akteur und Use Case' },
    ]},
  },
  {
    topicSlug: 'uml', subtopicSlug: 'aktivitaetsdiagramm', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Symbole im Aktivitätsdiagramm ihren Bedeutungen zu:',
    questionData: { pairs: [
      { left: 'Ausgefüllter Kreis', right: 'Startknoten' },
      { left: 'Ausgefüllter Kreis mit Ring', right: 'Endknoten' },
      { left: 'Raute', right: 'Entscheidung/Verzweigung' },
      { left: 'Abgerundetes Rechteck', right: 'Aktion/Aktivität' },
    ]},
  },
  {
    topicSlug: 'uml', subtopicSlug: 'aktivitaetsdiagramm', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind Swimlanes im Aktivitätsdiagramm?',
    questionData: { answer: 'Swimlanes (Verantwortlichkeitsbereiche):\n\n- Vertikale oder horizontale Bahnen im Aktivitätsdiagramm\n- Jede Swimlane repräsentiert einen Verantwortlichen (Abteilung, Rolle, System)\n- Aktivitäten werden in der Swimlane platziert, die für sie verantwortlich ist\n\nBeispiel Bestellprozess:\n| Kunde      | Webshop     | Lager      |\n| Bestellen  | Prüfen      | Verpacken  |\n|            | Bestätigen  | Versenden  |\n| Bezahlen   |             |            |\n\nVorteil: Macht sofort sichtbar, WER für WELCHE Aktivität zuständig ist.' },
  },
  {
    topicSlug: 'uml', subtopicSlug: 'aktivitaetsdiagramm', type: 'true_false', difficulty: 'easy',
    questionText: 'Ein Aktivitätsdiagramm hat immer genau einen Start- und einen Endknoten.',
    questionData: { isTrue: false, explanation: 'Ein Aktivitätsdiagramm hat genau EINEN Startknoten, kann aber MEHRERE Endknoten haben (z.B. bei verschiedenen Abbruchszenarien).' },
  },
  {
    topicSlug: 'uml', subtopicSlug: 'sequenzdiagramm', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind Kombinierte Fragmente im Sequenzdiagramm?',
    questionData: { answer: 'Kombinierte Fragmente modellieren Kontrollstrukturen:\n\nalt (Alternative):\n- Entspricht if/else\n- Verschiedene Fälle durch gestrichelte Linie getrennt\n- [Bedingung] als Guard\n\nloop (Schleife):\n- Wiederholung einer Nachrichtenfolge\n- [Bedingung] oder [min, max]\n\nopt (Optional):\n- Nachricht wird nur bei Bedingung ausgeführt\n- Entspricht if ohne else\n\npar (Parallel):\n- Nachrichten laufen gleichzeitig ab\n\nBeispiel:\nalt [Passwort korrekt]\n  → Willkommensnachricht\n--- [sonst]\n  → Fehlermeldung\nend' },
  },
  {
    topicSlug: 'uml', subtopicSlug: 'sequenzdiagramm', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Was repräsentiert die senkrechte gestrichelte Linie unter einem Objekt im Sequenzdiagramm?',
    questionData: { options: ['Den Datenfluss', 'Die Lebenslinie des Objekts', 'Eine Fehlermeldung', 'Den Rückgabewert'], correctIndex: 1 },
    explanation: 'Die Lebenslinie (Lifeline) zeigt die Existenz eines Objekts über die Zeit hinweg. Von oben nach unten = Zeitverlauf.'
  },
  {
    topicSlug: 'uml', subtopicSlug: 'sequenzdiagramm', type: 'true_false', difficulty: 'medium',
    questionText: 'Im Sequenzdiagramm verläuft die Zeit von oben nach unten.',
    questionData: { isTrue: true, explanation: 'Die y-Achse im Sequenzdiagramm repräsentiert die Zeit (von oben nach unten). Nachrichten weiter unten passieren zeitlich später.' },
  },
  {
    topicSlug: 'uml', subtopicSlug: 'klassendiagramm', type: 'flashcard', difficulty: 'hard',
    questionText: 'Erkläre Assoziation, Aggregation und Komposition mit Beispielen.',
    questionData: { answer: 'Assoziation (einfache Linie):\n- Allgemeine Beziehung zwischen Klassen\n- Beispiel: Student ← → Vorlesung\n- Beide können unabhängig existieren\n\nAggregation (leere Raute ◇):\n- \"hat ein\" – lose Beziehung\n- Teil kann ohne Ganzes existieren\n- Beispiel: Team ◇── Spieler\n- Spieler existiert auch ohne Team\n\nKomposition (ausgefüllte Raute ◆):\n- \"besteht aus\" – starke Beziehung\n- Teil kann NICHT ohne Ganzes existieren\n- Beispiel: Haus ◆── Raum\n- Raum existiert nicht ohne Haus\n\nHierarchie: Komposition > Aggregation > Assoziation (Stärke der Bindung)' },
    xpReward: 15,
  },
]
