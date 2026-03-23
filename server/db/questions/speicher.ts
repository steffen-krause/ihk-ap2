import type { QuestionSeed } from '../seed-types'

export const speicherQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'speicher', subtopicSlug: 'raid', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die RAID-Level ihren Eigenschaften zu:',
    questionData: { pairs: [
      { left: 'RAID 0', right: 'Striping, schnell, keine Redundanz' },
      { left: 'RAID 1', right: 'Spiegelung, volle Redundanz, 50% Kapazität' },
      { left: 'RAID 5', right: 'Striping + verteilte Parität, min. 3 Platten' },
    ]},
    explanation: 'RAID 0 = Geschwindigkeit, RAID 1 = Sicherheit, RAID 5 = Kompromiss.'
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'raid', type: 'true_false', difficulty: 'easy',
    questionText: 'RAID 0 bietet Datensicherheit durch Redundanz.',
    questionData: { isTrue: false, explanation: 'RAID 0 hat KEINE Redundanz – fällt eine Platte aus, sind alle Daten verloren. RAID 0 bietet nur Geschwindigkeit durch Striping.' },
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'cloud', type: 'matching', difficulty: 'easy',
    questionText: 'Ordne die Cloud-Servicemodelle zu:',
    questionData: { pairs: [
      { left: 'IaaS', right: 'Infrastruktur (VMs, Netzwerk, Storage)' },
      { left: 'PaaS', right: 'Plattform (Runtime, Middleware, OS)' },
      { left: 'SaaS', right: 'Software (fertige Anwendung, z.B. Office 365)' },
    ]},
    explanation: 'IaaS = maximale Kontrolle, SaaS = minimaler Aufwand, PaaS = dazwischen.'
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'backup', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Backup-Strategien ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: 'Vollbackup', right: 'Sichert alle Daten komplett' },
      { left: 'Inkrementelles Backup', right: 'Nur Änderungen seit letztem Backup (egal welcher Art)' },
      { left: 'Differenzielles Backup', right: 'Änderungen seit letztem Vollbackup' },
    ]},
    explanation: 'Inkrementell = schnellstes Backup, langsamstes Restore. Differenziell = Kompromiss.'
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'speicher', subtopicSlug: 'raid', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Wie viele Platten können bei RAID 5 ausfallen, ohne Datenverlust?',
    questionData: { options: ['Keine', 'Genau 1', 'Genau 2', 'Beliebig viele'], correctIndex: 1 },
    explanation: 'RAID 5: Daten + Paritätsinformationen verteilt über alle Platten. Genau EINE Platte darf ausfallen. RAID 6 toleriert 2 Ausfälle.'
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'raid', type: 'flashcard', difficulty: 'medium',
    questionText: 'Berechne die nutzbare Kapazität von RAID 0, 1 und 5.',
    questionData: { answer: 'Gegeben: 4 Festplatten à 1 TB\n\nRAID 0 (Striping):\n- Nutzbar: n × Plattengröße = 4 × 1 TB = 4 TB\n- Kein Speicherverlust, KEINE Redundanz\n\nRAID 1 (Spiegelung):\n- Nutzbar: 1 × Plattengröße = 1 TB\n- 50% Kapazität (bei 2 Platten), mit 4 Platten: 2 TB (2x gespiegelt)\n\nRAID 5 (Striping + Parität):\n- Nutzbar: (n-1) × Plattengröße = 3 × 1 TB = 3 TB\n- 1 Platte "Verlust" für Parität\n- Minimum: 3 Platten\n\nRAID 6 (doppelte Parität):\n- Nutzbar: (n-2) × Plattengröße = 2 × 1 TB = 2 TB\n- 2 Platten für Parität\n\nRAID 10 (1+0, Mirror + Stripe):\n- Nutzbar: n/2 × Plattengröße = 2 TB' },
    xpReward: 15,
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'raid', type: 'multiple_choice', difficulty: 'hard',
    questionText: 'Welches RAID-Level kombiniert Spiegelung und Striping?',
    questionData: { options: ['RAID 5', 'RAID 6', 'RAID 10 (1+0)', 'RAID 3'], correctIndex: 2 },
    explanation: 'RAID 10 (auch RAID 1+0): Erst Spiegelung (RAID 1), dann Striping (RAID 0). Kombination aus Performance und Sicherheit. Mindestens 4 Platten.',
    xpReward: 15,
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'cloud', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen Public, Private und Hybrid Cloud?',
    questionData: { answer: 'Public Cloud:\n- Infrastruktur gehört Cloud-Anbieter\n- Über Internet verfügbar\n- Gemeinsam genutzt (Multi-Tenant)\n- Beispiele: AWS, Azure, Google Cloud\n- Günstig, skalierbar\n\nPrivate Cloud:\n- Eigene oder exklusiv gemietete Infrastruktur\n- Nur für eine Organisation\n- Mehr Kontrolle und Sicherheit\n- Höhere Kosten\n\nHybrid Cloud:\n- Kombination aus Public und Private\n- Sensible Daten in Private Cloud\n- Skalierbare Workloads in Public Cloud\n- Beispiel: Kundendaten intern, Webserver in Public Cloud\n\nWeitere Variante:\nCommunity Cloud: Von mehreren Organisationen geteilt (z.B. Behörden)' },
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'cloud', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Bei welchem Cloud-Modell kümmert sich der Anbieter um ALLES (Hardware bis Anwendung)?',
    questionData: { options: ['IaaS', 'PaaS', 'SaaS', 'On-Premises'], correctIndex: 2 },
    explanation: 'SaaS (Software as a Service): Der Anbieter stellt die fertige Software bereit. Der Nutzer braucht nur einen Browser. Beispiel: Google Docs, Salesforce.'
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'cloud', type: 'true_false', difficulty: 'medium',
    questionText: 'Virtualisierung ermöglicht es, mehrere Betriebssysteme auf einer einzigen physischen Hardware zu betreiben.',
    questionData: { isTrue: true, explanation: 'Virtualisierung durch einen Hypervisor (z.B. VMware, VirtualBox) teilt physische Hardware in mehrere isolierte VMs auf, jede mit eigenem OS.' },
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'backup', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre die 3-2-1 Backup-Regel.',
    questionData: { answer: '3-2-1 Backup-Regel:\n\n3 Kopien: Mindestens 3 Kopien der Daten\n- 1 Original (Produktivsystem)\n- 2 Backups\n\n2 verschiedene Medien:\n- z.B. Festplatte + Tape\n- Oder SSD + Cloud\n- Schutz vor medienspezifischen Ausfällen\n\n1 Offsite-Kopie:\n- Mindestens 1 Backup an einem anderen Standort\n- Oder in der Cloud\n- Schutz vor: Brand, Hochwasser, Diebstahl\n\nErweiterung (3-2-1-1-0):\n- 1 Kopie offline (Air-Gapped, Schutz vor Ransomware)\n- 0 Fehler bei der Wiederherstellung (regelmäßig testen!)' },
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'backup', type: 'true_false', difficulty: 'medium',
    questionText: 'Ein differenzielles Backup benötigt zur Wiederherstellung nur das letzte Vollbackup und das letzte differentielle Backup.',
    questionData: { isTrue: true, explanation: 'Differenziell: Alle Änderungen seit dem letzten Vollbackup. Restore braucht nur Voll + Differenziell. Inkrementell dagegen braucht Voll + ALLE inkrementellen Backups.' },
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'backup', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welche Kennzahl beschreibt die maximal tolerable Ausfallzeit eines Systems?',
    questionData: { options: ['RPO (Recovery Point Objective)', 'RTO (Recovery Time Objective)', 'MTBF (Mean Time Between Failures)', 'MTTR (Mean Time To Repair)'], correctIndex: 1 },
    explanation: 'RTO = Wie lange darf das System maximal ausfallen? RPO = Wie viel Datenverlust ist akzeptabel? MTBF = Durchschnittliche Zeit zwischen Ausfällen. MTTR = Durchschnittliche Reparaturzeit.'
  },
  {
    topicSlug: 'speicher', subtopicSlug: 'backup', type: 'matching', difficulty: 'hard',
    questionText: 'Ordne die Verfügbarkeits-Kennzahlen ihren Bedeutungen zu:',
    questionData: { pairs: [
      { left: 'RTO', right: 'Maximale Ausfallzeit nach Störung' },
      { left: 'RPO', right: 'Maximaler akzeptabler Datenverlust (Zeitpunkt)' },
      { left: 'MTBF', right: 'Durchschnittliche Zeit zwischen Ausfällen' },
      { left: 'MTTR', right: 'Durchschnittliche Reparaturzeit' },
    ]},
    xpReward: 15,
  },
]
