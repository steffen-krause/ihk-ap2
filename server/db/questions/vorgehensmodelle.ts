import type { QuestionSeed } from '../seed-types'

export const vorgehensmodelleQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'wasserfall', type: 'true_false', difficulty: 'easy',
    questionText: 'Beim Wasserfallmodell kann man einfach zu einer vorherigen Phase zurückkehren.',
    questionData: { isTrue: false, explanation: 'Das Wasserfallmodell ist streng sequenziell – jede Phase muss abgeschlossen sein, bevor die nächste beginnt. Rücksprünge sind nicht vorgesehen.' },
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'wasserfall', type: 'matching', difficulty: 'medium',
    questionText: 'Bringe die Wasserfallmodell-Phasen in die richtige Reihenfolge:',
    questionData: { pairs: [
      { left: 'Phase 1', right: 'Anforderungsanalyse' },
      { left: 'Phase 2', right: 'Entwurf (Design)' },
      { left: 'Phase 3', right: 'Implementierung' },
      { left: 'Phase 4', right: 'Testen' },
    ]},
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'agile', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Wie lange dauert ein Sprint in Scrum typischerweise?',
    questionData: { options: ['1 Tag', '1-4 Wochen', '3 Monate', '6 Monate'], correctIndex: 1 },
    explanation: 'Sprints dauern typischerweise 1-4 Wochen (oft 2 Wochen). Am Ende steht ein potenziell auslieferbares Produktinkrement.'
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'agile', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Scrum-Rollen ihren Aufgaben zu:',
    questionData: { pairs: [
      { left: 'Product Owner', right: 'Verantwortet das Product Backlog und Priorisierung' },
      { left: 'Scrum Master', right: 'Beseitigt Hindernisse, schützt das Team' },
      { left: 'Entwicklerteam', right: 'Selbstorganisiert, liefert das Inkrement' },
    ]},
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'v-modell-spiral', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist die Besonderheit des V-Modells gegenüber dem Wasserfallmodell?',
    questionData: { answer: 'Das V-Modell erweitert das Wasserfallmodell um eine Testseite:\n\nLinke Seite (absteigend):\n- Anforderungen → Systemtest\n- Grobentwurf → Integrationstest\n- Feinentwurf → Unittest\n- Implementierung\n\nRechte Seite (aufsteigend):\nJeder Entwicklungsphase ist eine Teststufe zugeordnet.\n\nVorteil: Testplanung beginnt früh (parallel zur Entwicklung)\nNachteil: Immer noch sequenziell, wenig Flexibilität bei Änderungen' },
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'wasserfall', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind Vorteile und Nachteile des Wasserfallmodells?',
    questionData: { answer: 'Vorteile:\n- Einfach zu verstehen und zu planen\n- Klare Phasen und Meilensteine\n- Gute Dokumentation in jeder Phase\n- Gut für stabile, bekannte Anforderungen\n- Planbare Kosten und Termine\n\nNachteile:\n- Keine Rücksprünge vorgesehen\n- Fehler werden spät entdeckt (erst in Testphase)\n- Kein lauffähiges Produkt bis zum Ende\n- Schlecht bei sich ändernden Anforderungen\n- Kunde sieht Ergebnis erst am Ende\n\nGeeignet für:\n- Projekte mit festen Anforderungen\n- Regulierte Branchen (Medizin, Luft- und Raumfahrt)\n- Kleine Projekte mit klarem Scope' },
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'wasserfall', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welches Dokument entsteht typischerweise in der Anforderungsanalysephase?',
    questionData: { options: ['Quellcode', 'Lastenheft/Pflichtenheft', 'Testprotokoll', 'Benutzerhandbuch'], correctIndex: 1 },
    explanation: 'In der Analysephase entstehen Lastenheft (Was will der Kunde?) und Pflichtenheft (Wie setzen wir es um?).'
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'wasserfall', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen Lastenheft und Pflichtenheft?',
    questionData: { answer: 'Lastenheft (Anforderungskatalog):\n- Erstellt vom AUFTRAGGEBER\n- Beschreibt WAS gewünscht wird\n- Fachliche Anforderungen\n- Basis für Angebote\n- Perspektive: Geschäftsanforderungen\n\nPflichtenheft (Lösungsbeschreibung):\n- Erstellt vom AUFTRAGNEHMER\n- Beschreibt WIE die Anforderungen umgesetzt werden\n- Technische Lösung\n- Basis für den Vertrag/die Entwicklung\n- Perspektive: Technische Umsetzung\n\nReihenfolge: Lastenheft → Pflichtenheft\nMerksatz: Der Kunde LASTET (fordert), der Entwickler ist PFLICHTET (liefert)' },
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'agile', type: 'flashcard', difficulty: 'medium',
    questionText: 'Welche Scrum-Events (Meetings) gibt es und wozu dienen sie?',
    questionData: { answer: 'Sprint Planning:\n- Zu Beginn jedes Sprints\n- Team wählt Items aus dem Product Backlog\n- Schätzung des Aufwands\n\nDaily Standup:\n- Täglich, max. 15 Minuten\n- Was habe ich gestern gemacht?\n- Was mache ich heute?\n- Gibt es Hindernisse?\n\nSprint Review:\n- Am Ende des Sprints\n- Demo des Inkrements an Stakeholder\n- Feedback einholen\n\nSprint Retrospektive:\n- Nach der Review\n- Team reflektiert den Prozess\n- Was lief gut? Was verbessern?\n\nZusätzlich: Backlog Refinement (Pflege des Backlogs)' },
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'agile', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Scrum-Artefakte ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: 'Product Backlog', right: 'Priorisierte Liste aller Anforderungen' },
      { left: 'Sprint Backlog', right: 'Auswahl an Aufgaben für den aktuellen Sprint' },
      { left: 'Inkrement', right: 'Lauffähiges Produktergebnis am Sprintende' },
    ]},
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'agile', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welches agile Werkzeug visualisiert Aufgaben in Spalten wie "To Do", "In Progress", "Done"?',
    questionData: { options: ['Gantt-Diagramm', 'Kanban-Board', 'Burndown Chart', 'Netzplan'], correctIndex: 1 },
    explanation: 'Kanban-Board: Visuelles Board mit Spalten für Aufgabenstatus. Begrenzt Work-in-Progress (WIP-Limits).'
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'agile', type: 'true_false', difficulty: 'easy',
    questionText: 'In Scrum darf der Product Owner während eines Sprints neue Aufgaben hinzufügen.',
    questionData: { isTrue: false, explanation: 'Während eines laufenden Sprints wird der Sprint Backlog nicht verändert. Neue Anforderungen kommen ins Product Backlog und werden im nächsten Sprint Planning berücksichtigt.' },
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'agile', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind die 4 Werte des Agilen Manifests?',
    questionData: { answer: 'Das Agile Manifest (2001) bevorzugt:\n\n1. Individuen und Interaktionen\n   ÜBER Prozesse und Werkzeuge\n\n2. Funktionierende Software\n   ÜBER umfassende Dokumentation\n\n3. Zusammenarbeit mit dem Kunden\n   ÜBER Vertragsverhandlung\n\n4. Reagieren auf Veränderung\n   ÜBER das Befolgen eines Plans\n\nWichtig: Die rechten Werte haben auch ihren Wert, aber die linken werden HÖHER geschätzt.\n\nDas bedeutet NICHT: Keine Dokumentation, keine Planung – sondern: Menschen, Software, Zusammenarbeit und Flexibilität stehen im Vordergrund.' },
    xpReward: 15,
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'v-modell-spiral', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was steht im Spiralmodell im Mittelpunkt jeder Iteration?',
    questionData: { options: ['Dokumentation', 'Risikoanalyse', 'Programmierung', 'Testing'], correctIndex: 1 },
    explanation: 'Das Spiralmodell (Boehm, 1986) legt besonderen Wert auf die Risikoanalyse in jeder Iteration. Jede Spiralwindung umfasst: Planung → Risikoanalyse → Entwicklung → Bewertung.'
  },
  {
    topicSlug: 'vorgehensmodelle', subtopicSlug: 'v-modell-spiral', type: 'matching', difficulty: 'hard',
    questionText: 'Ordne die Vorgehensmodelle ihren Hauptmerkmalen zu:',
    questionData: { pairs: [
      { left: 'Wasserfall', right: 'Streng sequenziell, keine Rücksprünge' },
      { left: 'V-Modell', right: 'Jeder Entwicklungsphase ist eine Teststufe zugeordnet' },
      { left: 'Spiralmodell', right: 'Iterativ mit Fokus auf Risikoanalyse' },
      { left: 'Scrum', right: 'Agil, Sprints, selbstorganisiertes Team' },
    ]},
    xpReward: 15,
  },
]
