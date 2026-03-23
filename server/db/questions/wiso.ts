import type { QuestionSeed } from '../seed-types'

export const wisoQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'wiso', subtopicSlug: 'arbeitsrecht', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Wie lang ist die gesetzliche Probezeit laut BBiG bei einer Ausbildung?',
    questionData: { options: ['1 Monat', '1-4 Monate', '6 Monate', '3 Monate'], correctIndex: 1 },
    explanation: 'BBiG §20: Die Probezeit bei einer Berufsausbildung muss mindestens 1 und darf höchstens 4 Monate betragen.'
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'arbeitsrecht', type: 'true_false', difficulty: 'easy',
    questionText: 'Während der Probezeit kann das Ausbildungsverhältnis ohne Angabe von Gründen gekündigt werden.',
    questionData: { isTrue: true, explanation: 'BBiG §22: In der Probezeit kann das Berufsausbildungsverhältnis jederzeit ohne Einhalten einer Kündigungsfrist und ohne Gründe gekündigt werden.' },
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'arbeitsrecht', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welches Gremium vertritt die Interessen der Arbeitnehmer im Betrieb?',
    questionData: { options: ['Gewerkschaft', 'Betriebsrat', 'Arbeitgeberverband', 'Berufsgenossenschaft'], correctIndex: 1 },
    explanation: 'Der Betriebsrat vertritt die Interessen der Arbeitnehmer gegenüber dem Arbeitgeber im Betrieb (Betriebsverfassungsgesetz). Ab 5 wahlberechtigten AN möglich.'
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'vertragsrecht', type: 'flashcard', difficulty: 'easy',
    questionText: 'Was sind die Unterschiede zwischen Kaufvertrag, Werkvertrag und Dienstvertrag?',
    questionData: { answer: 'Kaufvertrag (§433 BGB):\n- Übergabe und Übereignung einer Sache gegen Zahlung\n- Schuldet: die Sache (z.B. Laptop kaufen)\n\nWerkvertrag (§631 BGB):\n- Herstellung eines Werks (Erfolg geschuldet)\n- Schuldet: das fertige Ergebnis\n- Beispiel: Programm nach Pflichtenheft entwickeln\n\nDienstvertrag (§611 BGB):\n- Erbringung von Diensten (Tätigkeit geschuldet)\n- Schuldet: die Arbeitsleistung, NICHT den Erfolg\n- Beispiel: Arbeitsvertrag, Beratung\n\nWichtig für IHK: Werkvertrag vs. Dienstvertrag – Erfolg vs. Bemühen!' },
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'vertragsrecht', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Wann kommt ein Kaufvertrag zustande?',
    questionData: { options: [
      'Bei Lieferung der Ware',
      'Bei Zahlung des Preises',
      'Durch zwei übereinstimmende Willenserklärungen (Angebot + Annahme)',
      'Bei Übergabe der Rechnung',
    ], correctIndex: 2 },
    explanation: 'Ein Vertrag kommt durch Angebot und Annahme (zwei übereinstimmende Willenserklärungen) zustande – nicht erst bei Lieferung oder Zahlung.'
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'wirtschaft', type: 'matching', difficulty: 'easy',
    questionText: 'Ordne die Begriffe zu:',
    questionData: { pairs: [
      { left: 'Angebot > Nachfrage', right: 'Preise fallen (Käufermarkt)' },
      { left: 'Nachfrage > Angebot', right: 'Preise steigen (Verkäufermarkt)' },
      { left: 'Angebot = Nachfrage', right: 'Marktgleichgewicht' },
    ]},
    explanation: 'Grundprinzip der Marktwirtschaft: Angebot und Nachfrage bestimmen den Preis.'
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'wiso', subtopicSlug: 'arbeitsrecht', type: 'flashcard', difficulty: 'medium',
    questionText: 'Welche Kündigungsarten gibt es und was sind ihre Besonderheiten?',
    questionData: { answer: 'Ordentliche Kündigung:\n- Einhaltung der Kündigungsfrist\n- Kein Grund nötig (im Arbeitsvertrag)\n- In der Ausbildung: NUR in Probezeit!\n\nAußerordentliche (fristlose) Kündigung:\n- Sofortige Beendigung\n- Wichtiger Grund erforderlich (§626 BGB)\n- Beispiele: Diebstahl, Arbeitsverweigerung\n- Frist: 2 Wochen nach Bekanntwerden\n\nAufhebungsvertrag:\n- Einvernehmliche Beendigung\n- Beide Seiten stimmen zu\n- Kein Kündigungsschutz anwendbar\n\nIn der Ausbildung (nach Probezeit):\n- Nur außerordentlich möglich (§22 BBiG)\n- Oder bei Berufswechsel (4 Wochen Frist)' },
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'arbeitsrecht', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Gesetze ihrem Regelungsbereich zu:',
    questionData: { pairs: [
      { left: 'BBiG', right: 'Berufsausbildung' },
      { left: 'ArbSchG', right: 'Arbeitsschutz und Sicherheit' },
      { left: 'BetrVG', right: 'Betriebsverfassung (Betriebsrat)' },
      { left: 'JArbSchG', right: 'Schutz jugendlicher Arbeitnehmer' },
    ]},
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'arbeitsrecht', type: 'true_false', difficulty: 'medium',
    questionText: 'Ein Auszubildender darf nach dem JArbSchG maximal 8 Stunden täglich und 40 Stunden wöchentlich arbeiten.',
    questionData: { isTrue: true, explanation: 'JArbSchG §8: Jugendliche (unter 18) dürfen max. 8h/Tag und 40h/Woche arbeiten. Erwachsene Azubis unterliegen dem ArbZG (max. 8h, ausnahmsweise 10h).' },
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'vertragsrecht', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Kaufvertragsstörungen ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: 'Lieferverzug', right: 'Ware wird nicht fristgerecht geliefert' },
      { left: 'Schlechtleistung (Sachmangel)', right: 'Ware ist fehlerhaft oder entspricht nicht der Vereinbarung' },
      { left: 'Falschlieferung', right: 'Andere Ware als bestellt geliefert' },
      { left: 'Zahlungsverzug', right: 'Käufer zahlt nicht fristgerecht' },
    ]},
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'vertragsrecht', type: 'flashcard', difficulty: 'medium',
    questionText: 'Welche Rechte hat der Käufer bei Sachmängeln (Gewährleistung)?',
    questionData: { answer: 'Mängelrechte (§437 BGB) – Stufenfolge:\n\n1. Stufe: Nacherfüllung (§439)\n- Nachbesserung (Reparatur) ODER\n- Nachlieferung (Ersatzlieferung)\n- Käufer hat die Wahl!\n\n2. Stufe (wenn Nacherfüllung scheitert):\n- Minderung (Preis reduzieren) ODER\n- Rücktritt vom Vertrag\n\nZusätzlich immer möglich:\n- Schadensersatz (bei Verschulden des Verkäufers)\n\nFristen:\n- Gewährleistung: 2 Jahre ab Lieferung (B2C)\n- Beweislastumkehr: Erste 12 Monate beim Verkäufer\n\nWichtig: Garantie ≠ Gewährleistung!\nGewährleistung = gesetzlich\nGarantie = freiwillige Herstellerleistung' },
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'vertragsrecht', type: 'true_false', difficulty: 'easy',
    questionText: 'Die gesetzliche Gewährleistungsfrist bei Neuwaren beträgt im B2C-Bereich 2 Jahre.',
    questionData: { isTrue: true, explanation: '§438 BGB: Mängelansprüche verjähren bei beweglichen Sachen nach 2 Jahren ab Ablieferung. Im B2B-Bereich kann die Frist vertraglich verkürzt werden.' },
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'wirtschaft', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre den Unterschied zwischen Brutto und Netto (Gehalt).',
    questionData: { answer: 'Bruttogehalt (Arbeitnehmer):\n- Gesamtbetrag vor Abzügen\n\nAbzüge:\n1. Lohnsteuer (progressiv, 14-45%)\n2. Solidaritätszuschlag (5,5% der Steuer)\n3. Kirchensteuer (8-9% der Steuer, falls Mitglied)\n4. Sozialabgaben (AN-Anteil ca. 20%):\n   - Krankenversicherung (~7,3%+Zusatzbeitrag)\n   - Rentenversicherung (~9,3%)\n   - Arbeitslosenversicherung (~1,3%)\n   - Pflegeversicherung (~1,7%)\n\nNettogehalt:\n- Was auf dem Konto ankommt\n- Brutto minus alle Abzüge\n- Ca. 55-70% vom Brutto\n\nArbeitgeber zahlt zusätzlich seinen AG-Anteil an Sozialabgaben!' },
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'wirtschaft', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was besagt das "Ökonomische Prinzip"?',
    questionData: { options: [
      'Gewinn ist das einzige Unternehmensziel',
      'Mit gegebenem Aufwand den größtmöglichen Ertrag erzielen (oder umgekehrt)',
      'Der Staat muss die Wirtschaft regulieren',
      'Angebot und Nachfrage bestimmen den Preis',
    ], correctIndex: 1 },
    explanation: 'Ökonomisches Prinzip: Maximalprinzip (gegebener Input → max. Output) oder Minimalprinzip (gegebener Output → min. Input). Es geht um effizientes Wirtschaften.'
  },
  {
    topicSlug: 'wiso', subtopicSlug: 'wirtschaft', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Unternehmensformen ihren Merkmalen zu:',
    questionData: { pairs: [
      { left: 'GmbH', right: 'Beschränkte Haftung, 25.000€ Stammkapital' },
      { left: 'AG', right: 'Aktien, Vorstand, Aufsichtsrat, 50.000€ Grundkapital' },
      { left: 'Einzelunternehmen', right: 'Ein Inhaber, unbeschränkte Haftung' },
      { left: 'OHG', right: 'Personengesellschaft, alle haften persönlich' },
    ]},
  },
]
