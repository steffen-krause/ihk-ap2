import type { QuestionSeed } from '../seed-types'

export const itSicherheitQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'schutzziele', type: 'matching', difficulty: 'easy',
    questionText: 'Ordne die IT-Schutzziele ihrer Beschreibung zu:',
    questionData: { pairs: [
      { left: 'Vertraulichkeit', right: 'Daten nur für Berechtigte zugänglich' },
      { left: 'Integrität', right: 'Daten sind unverändert und korrekt' },
      { left: 'Verfügbarkeit', right: 'Systeme und Daten sind erreichbar' },
      { left: 'Authentizität', right: 'Identität des Absenders ist nachweisbar' },
    ]},
    explanation: 'CIA-Triade + Authentizität sind die grundlegenden IT-Schutzziele.'
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'verschluesselung', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was ist der Hauptunterschied zwischen symmetrischer und asymmetrischer Verschlüsselung?',
    questionData: { options: [
      'Symmetrisch ist sicherer',
      'Symmetrisch nutzt einen Schlüssel, asymmetrisch ein Schlüsselpaar',
      'Asymmetrisch ist immer schneller',
      'Symmetrisch nutzt nur Zahlen',
    ], correctIndex: 1 },
    explanation: 'Symmetrisch: Ein Schlüssel für Ver- und Entschlüsselung (z.B. AES). Asymmetrisch: Öffentlicher + privater Schlüssel (z.B. RSA).'
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'verschluesselung', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre das Prinzip der asymmetrischen Verschlüsselung und nenne ein Anwendungsbeispiel.',
    questionData: { answer: 'Asymmetrische Verschlüsselung nutzt ein Schlüsselpaar:\n- Öffentlicher Schlüssel (Public Key): Zum Verschlüsseln, frei verteilbar\n- Privater Schlüssel (Private Key): Zum Entschlüsseln, geheim halten\n\nPrinzip: Was mit dem Public Key verschlüsselt wird, kann nur mit dem Private Key entschlüsselt werden.\n\nAnwendung:\n- HTTPS (TLS): Server sendet Public Key → Client verschlüsselt Session Key\n- Digitale Signatur: Absender signiert mit Private Key → Empfänger verifiziert mit Public Key\n- E-Mail-Verschlüsselung (PGP/GPG)\n\nBeispiel: RSA, ECC\nVorteil: Kein sicherer Schlüsselaustausch nötig\nNachteil: Langsamer als symmetrisch → Hybrid-Verfahren (z.B. TLS)' },
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'dsgvo', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Was bedeutet das Prinzip der "Datensparsamkeit" in der DSGVO?',
    questionData: { options: [
      'Daten müssen regelmäßig gelöscht werden',
      'Es dürfen nur die Daten erhoben werden, die für den Zweck erforderlich sind',
      'Daten müssen verschlüsselt gespeichert werden',
      'Es dürfen maximal 100 Datensätze gespeichert werden',
    ], correctIndex: 1 },
    explanation: 'Datensparsamkeit (Art. 5 DSGVO): Nur so viele personenbezogene Daten erheben und verarbeiten wie nötig.'
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'dsgvo', type: 'true_false', difficulty: 'easy',
    questionText: 'Nach DSGVO haben betroffene Personen ein Recht auf Löschung ihrer personenbezogenen Daten.',
    questionData: { isTrue: true, explanation: 'Art. 17 DSGVO: "Recht auf Vergessenwerden" – personenbezogene Daten müssen auf Anfrage gelöscht werden (mit Ausnahmen).' },
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'angriffsmethoden', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Angriffsmethoden ihrer Beschreibung zu:',
    questionData: { pairs: [
      { left: 'Phishing', right: 'Gefälschte Nachrichten zum Abgreifen von Zugangsdaten' },
      { left: 'SQL Injection', right: 'Schafdhafter SQL-Code über Benutzereingaben' },
      { left: 'DDoS', right: 'System durch massenhafte Anfragen überlasten' },
      { left: 'Man-in-the-Middle', right: 'Kommunikation zwischen zwei Parteien abfangen' },
    ]},
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'schutzziele', type: 'true_false', difficulty: 'easy',
    questionText: 'Nicht-Abstreitbarkeit (Non-Repudiation) bedeutet, dass ein Absender das Senden einer Nachricht nicht leugnen kann.',
    questionData: { isTrue: true, explanation: 'Nicht-Abstreitbarkeit wird durch digitale Signaturen erreicht und ist ein erweitertes Schutzziel neben CIA.' },
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'schutzziele', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist die CIA-Triade und welche Maßnahmen schützen die einzelnen Ziele?',
    questionData: { answer: 'C – Confidentiality (Vertraulichkeit):\n- Verschlüsselung (AES, RSA)\n- Zugriffskontrollen (ACL)\n- VPN-Tunnel\n\nI – Integrity (Integrität):\n- Hashfunktionen (SHA-256)\n- Digitale Signaturen\n- Checksummen\n- Versionskontrolle\n\nA – Availability (Verfügbarkeit):\n- Redundanz (RAID, Cluster)\n- Backups\n- USV (Unterbrechungsfreie Stromversorgung)\n- Load Balancing\n- DDoS-Schutz\n\nAlle drei müssen gleichzeitig gewährleistet sein – ein einzelnes Ziel ohne die anderen ist unzureichend.' },
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'schutzziele', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welches Schutzziel wird durch eine Hashfunktion primär geschützt?',
    questionData: { options: ['Vertraulichkeit', 'Verfügbarkeit', 'Integrität', 'Authentizität'], correctIndex: 2 },
    explanation: 'Hashfunktionen (z.B. SHA-256) erkennen Veränderungen an Daten → Integrität. Sie verschlüsseln nicht (keine Vertraulichkeit).'
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'verschluesselung', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Verschlüsselungsverfahren dem richtigen Typ zu:',
    questionData: { pairs: [
      { left: 'AES', right: 'Symmetrisch' },
      { left: 'RSA', right: 'Asymmetrisch' },
      { left: 'SHA-256', right: 'Hashfunktion (keine Verschlüsselung)' },
      { left: 'TLS/SSL', right: 'Hybrid (asymmetrisch + symmetrisch)' },
    ]},
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'verschluesselung', type: 'true_false', difficulty: 'medium',
    questionText: 'Eine Hashfunktion kann rückgängig gemacht werden, um den Originalwert zu erhalten.',
    questionData: { isTrue: false, explanation: 'Hashfunktionen sind Einwegfunktionen – aus dem Hash kann der Originalwert NICHT berechnet werden. Gleicher Input → gleicher Hash, aber nicht umkehrbar.' },
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'verschluesselung', type: 'multiple_choice', difficulty: 'hard',
    questionText: 'Wie funktioniert eine digitale Signatur?',
    questionData: { options: [
      'Absender verschlüsselt mit Public Key des Empfängers',
      'Absender erstellt Hash und signiert diesen mit seinem Private Key',
      'Beide Parteien tauschen symmetrische Schlüssel aus',
      'Der Server erstellt ein Zertifikat für beide Parteien',
    ], correctIndex: 1 },
    explanation: 'Digitale Signatur: 1. Hash der Nachricht erstellen. 2. Hash mit Private Key des Absenders verschlüsseln. 3. Empfänger verifiziert mit Public Key des Absenders.',
    xpReward: 15,
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'dsgvo', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die DSGVO-Rechte ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: 'Recht auf Auskunft', right: 'Welche Daten werden über mich gespeichert?' },
      { left: 'Recht auf Löschung', right: 'Meine Daten müssen gelöscht werden' },
      { left: 'Recht auf Datenübertragbarkeit', right: 'Daten in maschinenlesbarem Format erhalten' },
      { left: 'Recht auf Berichtigung', right: 'Falsche Daten müssen korrigiert werden' },
    ]},
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'dsgvo', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen technischen und organisatorischen Maßnahmen (TOMs)?',
    questionData: { answer: 'Technische Maßnahmen (T):\n- Verschlüsselung der Daten\n- Firewall und Virenschutz\n- Zugangskontrolle (Passwörter, Biometrie)\n- Pseudonymisierung/Anonymisierung\n- Automatische Backups\n- Protokollierung (Logging)\n\nOrganisatorische Maßnahmen (O):\n- Schulung der Mitarbeiter\n- Zugangsberechtigungskonzept (wer darf was?)\n- Vertraulichkeitsvereinbarungen (NDA)\n- Datenschutzbeauftragter\n- Notfallplan/Incident Response\n- Clean-Desk-Policy\n\nArt. 32 DSGVO verpflichtet zur Umsetzung angemessener TOMs.' },
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'dsgvo', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Ab wie vielen Beschäftigten, die personenbezogene Daten verarbeiten, ist ein Datenschutzbeauftragter Pflicht?',
    questionData: { options: ['Ab 5 Beschäftigten', 'Ab 10 Beschäftigten', 'Ab 20 Beschäftigten', 'Ab 50 Beschäftigten'], correctIndex: 2 },
    explanation: 'In Deutschland ist ein Datenschutzbeauftragter Pflicht, wenn mind. 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind.'
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'angriffsmethoden', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre SQL Injection und wie man sich davor schützt.',
    questionData: { answer: 'SQL Injection:\nAngreifer schleust SQL-Code über Benutzereingaben in die Datenbank ein.\n\nBeispiel (unsicher):\nSELECT * FROM users WHERE name = eingabe\nEingabe: \' OR 1=1 --\nErgebnis: SELECT * FROM users WHERE name = \'\' OR 1=1 --\n→ Gibt ALLE User zurück!\n\nSchutzmaßnahmen:\n1. Prepared Statements (Parametrisierte Queries):\n   SELECT * FROM users WHERE name = $1\n   → Eingabe wird als Wert, nicht als SQL behandelt\n\n2. Input Validation: Eingaben filtern/escapen\n\n3. Least Privilege: DB-User mit minimalen Rechten\n\n4. ORM verwenden (z.B. Drizzle, Prisma)\n\n5. Web Application Firewall (WAF)' },
    xpReward: 15,
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'angriffsmethoden', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welche Angriffsmethode nutzt menschliche Schwächen statt technischer Schwachstellen?',
    questionData: { options: ['Brute Force', 'Social Engineering', 'Buffer Overflow', 'Cross-Site Scripting'], correctIndex: 1 },
    explanation: 'Social Engineering manipuliert Menschen (z.B. Phishing, Pretexting, Tailgating). Die Schwachstelle ist der Mensch, nicht die Technik.'
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'angriffsmethoden', type: 'matching', difficulty: 'hard',
    questionText: 'Ordne die Schutzmaßnahmen den jeweiligen Angriffen zu:',
    questionData: { pairs: [
      { left: 'SQL Injection', right: 'Prepared Statements' },
      { left: 'Cross-Site Scripting (XSS)', right: 'Output Encoding / Content Security Policy' },
      { left: 'Brute Force', right: 'Rate Limiting / Account Lockout' },
      { left: 'Man-in-the-Middle', right: 'TLS/HTTPS-Verschlüsselung' },
    ]},
    xpReward: 15,
  },
  {
    topicSlug: 'it-sicherheit', subtopicSlug: 'angriffsmethoden', type: 'true_false', difficulty: 'easy',
    questionText: 'Cross-Site Scripting (XSS) ist ein Angriff, bei dem schädlicher JavaScript-Code in eine Webseite eingeschleust wird.',
    questionData: { isTrue: true, explanation: 'XSS: Angreifer injiziert JavaScript in eine Webseite, das im Browser anderer Nutzer ausgeführt wird. Schutz: Output Encoding, Content Security Policy.' },
  },
]
