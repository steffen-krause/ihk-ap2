import type { QuestionSeed } from '../seed-types'

export const ergonomieQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'ergonomie', subtopicSlug: 'usability', type: 'flashcard', difficulty: 'easy',
    questionText: 'Nenne die 7 Grundsätze der Dialoggestaltung nach DIN EN ISO 9241-110.',
    questionData: { answer: '1. Aufgabenangemessenheit – Unterstützt den Benutzer bei seiner Aufgabe\n2. Selbstbeschreibungsfähigkeit – Jeder Schritt ist verständlich\n3. Erwartungskonformität – Verhält sich wie erwartet\n4. Lernförderlichkeit – Erlernen der Bedienung wird unterstützt\n5. Steuerbarkeit – Benutzer kann Ablauf steuern (z.B. Abbrechen)\n6. Fehlertoleranz – Trotz Fehlbedienung wird das Ziel erreicht\n7. Individualisierbarkeit – Anpassbar an Benutzer-Bedürfnisse\n\nEselsbrücke: "Alle Sieben Erwarten Lernende Studenten Fehlerfrei Individuell"' },
  },
  {
    topicSlug: 'ergonomie', subtopicSlug: 'barrierefreiheit', type: 'true_false', difficulty: 'easy',
    questionText: 'Barrierefreiheit in Software betrifft nur blinde Menschen.',
    questionData: { isTrue: false, explanation: 'Barrierefreiheit betrifft alle Einschränkungen: Sehbehinderung, Hörbehinderung, motorische Einschränkungen, kognitive Einschränkungen. Auch temporäre Einschränkungen (z.B. gebrochener Arm).' },
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'ergonomie', subtopicSlug: 'usability', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Dialoggrundsätze den Beispielen zu:',
    questionData: { pairs: [
      { left: 'Aufgabenangemessenheit', right: 'Formular zeigt nur relevante Felder für die Aufgabe' },
      { left: 'Selbstbeschreibungsfähigkeit', right: 'Tooltip erklärt Eingabeformat (z.B. TT.MM.JJJJ)' },
      { left: 'Erwartungskonformität', right: 'Strg+S speichert wie in jeder Software' },
      { left: 'Fehlertoleranz', right: 'Undo-Funktion nach Löschung möglich' },
    ]},
  },
  {
    topicSlug: 'ergonomie', subtopicSlug: 'usability', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welcher Grundsatz beschreibt, dass Software sich so verhält, wie es der Benutzer erwartet?',
    questionData: { options: ['Aufgabenangemessenheit', 'Selbstbeschreibungsfähigkeit', 'Erwartungskonformität', 'Steuerbarkeit'], correctIndex: 2 },
    explanation: 'Erwartungskonformität: Der Dialog verhält sich konsistent und entspricht den Erwartungen des Benutzers (z.B. bekannte Tastenkombinationen, übliche Button-Positionen).'
  },
  {
    topicSlug: 'ergonomie', subtopicSlug: 'usability', type: 'true_false', difficulty: 'medium',
    questionText: 'Nach DIN EN ISO 9241 gehört "Ästhetik" zu den 7 Grundsätzen der Dialoggestaltung.',
    questionData: { isTrue: false, explanation: 'Ästhetik ist KEIN Grundsatz der Dialoggestaltung nach DIN EN ISO 9241-110. Die 7 Grundsätze sind: Aufgabenangemessenheit, Selbstbeschreibungsfähigkeit, Erwartungskonformität, Lernförderlichkeit, Steuerbarkeit, Fehlertoleranz, Individualisierbarkeit.' },
  },
  {
    topicSlug: 'ergonomie', subtopicSlug: 'usability', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind die 10 Heuristiken von Nielsen für das UI-Design?',
    questionData: { answer: 'Jakob Nielsens 10 Usability-Heuristiken:\n\n1. Sichtbarkeit des Systemstatus\n2. Übereinstimmung System–Welt (bekannte Begriffe)\n3. Benutzerkontrolle und Freiheit (Undo/Redo)\n4. Konsistenz und Standards\n5. Fehlervermeidung (besser als Fehlermeldung)\n6. Wiedererkennung statt Erinnerung\n7. Flexibilität und Effizienz (Shortcuts für Experten)\n8. Ästhetisches und minimalistisches Design\n9. Hilfe bei Fehlern (klare Fehlermeldungen)\n10. Hilfe und Dokumentation\n\nAnwendung: Heuristische Evaluation – Experten prüfen UI gegen diese Kriterien.' },
    xpReward: 15,
  },
  {
    topicSlug: 'ergonomie', subtopicSlug: 'barrierefreiheit', type: 'flashcard', difficulty: 'medium',
    questionText: 'Welche Maßnahmen verbessern die Barrierefreiheit einer Webseite?',
    questionData: { answer: 'Visuell:\n- Ausreichender Kontrast (min. 4.5:1)\n- Schriftgröße anpassbar\n- Alt-Texte für Bilder\n- Keine rein farb-basierte Information\n\nAuditiv:\n- Untertitel für Videos\n- Transkripte für Audio\n\nMotorik:\n- Vollständige Tastaturbedienung\n- Große Klickbereiche\n- Ausreichende Timeouts\n\nKognitiv:\n- Einfache Sprache\n- Konsistente Navigation\n- Klare Struktur\n\nTechnisch:\n- Semantisches HTML (header, nav, main, article)\n- ARIA-Labels (aria-label, aria-describedby)\n- Skip-Links ("Zum Inhalt springen")\n- Screenreader-Kompatibilität\n\nStandard: WCAG 2.1 (Web Content Accessibility Guidelines)' },
  },
  {
    topicSlug: 'ergonomie', subtopicSlug: 'barrierefreiheit', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welcher HTML-Tag verbessert die Barrierefreiheit NICHT?',
    questionData: { options: ['<nav>', '<div>', '<main>', '<article>'], correctIndex: 1 },
    explanation: '<div> hat keine semantische Bedeutung. <nav>, <main>, <article> sind semantische HTML5-Elemente, die Screenreadern die Seitenstruktur vermitteln.'
  },
  {
    topicSlug: 'ergonomie', subtopicSlug: 'barrierefreiheit', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Barrierefreiheits-Maßnahmen den Einschränkungen zu:',
    questionData: { pairs: [
      { left: 'Alt-Text bei Bildern', right: 'Sehbehinderung' },
      { left: 'Untertitel bei Videos', right: 'Hörbehinderung' },
      { left: 'Tastaturbedienung', right: 'Motorische Einschränkung' },
      { left: 'Einfache Sprache', right: 'Kognitive Einschränkung' },
    ]},
  },
]
