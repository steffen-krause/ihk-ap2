import type { QuestionSeed } from '../seed-types'

export const netzwerkQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'netzwerk', subtopicSlug: 'osi-tcpip', type: 'matching', difficulty: 'hard',
    questionText: 'Ordne die OSI-Schichten (von unten nach oben) ihren Nummern zu:',
    questionData: { pairs: [
      { left: 'Schicht 1', right: 'Bitübertragung (Physical)' },
      { left: 'Schicht 3', right: 'Vermittlung (Network)' },
      { left: 'Schicht 4', right: 'Transport' },
      { left: 'Schicht 7', right: 'Anwendung (Application)' },
    ]},
    explanation: '1=Physical, 2=Data Link, 3=Network, 4=Transport, 5=Session, 6=Presentation, 7=Application.',
    xpReward: 15,
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'osi-tcpip', type: 'flashcard', difficulty: 'medium',
    questionText: 'Nenne alle 7 OSI-Schichten in der richtigen Reihenfolge (von unten nach oben) mit Eselsbrücke.',
    questionData: { answer: '1. Bitübertragung (Physical)\n2. Sicherung (Data Link)\n3. Vermittlung (Network)\n4. Transport\n5. Sitzung (Session)\n6. Darstellung (Presentation)\n7. Anwendung (Application)\n\nEselsbrücke (von unten): "Please Do Not Throw Sausage Pizza Away"\nAuf Deutsch: "Alle Deutschen Studenten Trinken Verschiedene Sorten Bier"' },
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'ip-subnetting', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Wie viele Hosts sind in einem Subnetz mit der Maske /24 (255.255.255.0) möglich?',
    questionData: { options: ['256', '254', '255', '252'], correctIndex: 1 },
    explanation: '/24 = 8 Hostbits → 2^8 = 256 Adressen, minus Netzadresse und Broadcast = 254 nutzbare Hosts.'
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'ip-subnetting', type: 'true_false', difficulty: 'medium',
    questionText: '192.168.1.0/24 und 10.0.0.0/8 sind beide private IP-Adressbereiche.',
    questionData: { isTrue: true, explanation: 'Private IP-Bereiche nach RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Diese sind nicht im Internet routbar.' },
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'protokolle', type: 'matching', difficulty: 'easy',
    questionText: 'Ordne die Protokolle ihren Portnummern zu:',
    questionData: { pairs: [
      { left: 'HTTP', right: 'Port 80' },
      { left: 'HTTPS', right: 'Port 443' },
      { left: 'SSH', right: 'Port 22' },
      { left: 'FTP', right: 'Port 21' },
    ]},
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'protokolle', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welches Protokoll ist verbindungsorientiert und garantiert die Zustellung?',
    questionData: { options: ['UDP', 'TCP', 'ICMP', 'ARP'], correctIndex: 1 },
    explanation: 'TCP = verbindungsorientiert mit Bestätigung (3-Way-Handshake, ACK). UDP = verbindungslos, schneller, aber keine Zustellgarantie.'
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'netzwerkgeraete', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Netzwerkgeräte der OSI-Schicht zu, auf der sie arbeiten:',
    questionData: { pairs: [
      { left: 'Hub/Repeater', right: 'Schicht 1 (Physical)' },
      { left: 'Switch', right: 'Schicht 2 (Data Link)' },
      { left: 'Router', right: 'Schicht 3 (Network)' },
    ]},
    explanation: 'Hub = dumm (alles weiterleiten), Switch = MAC-Adressen, Router = IP-Adressen.'
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'netzwerk', subtopicSlug: 'osi-tcpip', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Protokolle der richtigen OSI-Schicht zu:',
    questionData: { pairs: [
      { left: 'HTTP, FTP, SMTP', right: 'Schicht 7 (Application)' },
      { left: 'TCP, UDP', right: 'Schicht 4 (Transport)' },
      { left: 'IP, ICMP', right: 'Schicht 3 (Network)' },
      { left: 'Ethernet, WLAN', right: 'Schicht 2 (Data Link)' },
    ]},
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'osi-tcpip', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre den TCP-3-Way-Handshake.',
    questionData: { answer: 'Der TCP-3-Way-Handshake baut eine zuverlässige Verbindung auf:\n\n1. SYN: Client → Server\n   "Ich möchte eine Verbindung aufbauen"\n   Client sendet SYN-Paket mit Sequenznummer\n\n2. SYN-ACK: Server → Client\n   "OK, ich bestätige und möchte auch"\n   Server bestätigt (ACK) und sendet eigene SYN\n\n3. ACK: Client → Server\n   "Bestätigt, Verbindung steht"\n   Client bestätigt die Server-SYN\n\nDanach können Daten übertragen werden.\n\nVerbindungsabbau: 4-Way (FIN → ACK → FIN → ACK)' },
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'osi-tcpip', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welche Schicht des TCP/IP-Modells entspricht den OSI-Schichten 5-7?',
    questionData: { options: ['Netzzugangsschicht', 'Internetschicht', 'Transportschicht', 'Anwendungsschicht'], correctIndex: 3 },
    explanation: 'TCP/IP-Modell hat 4 Schichten: 1. Netzzugang (OSI 1-2), 2. Internet (OSI 3), 3. Transport (OSI 4), 4. Anwendung (OSI 5-7).'
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'ip-subnetting', type: 'flashcard', difficulty: 'hard',
    questionText: 'Wie berechnet man die Netzadresse und Broadcast-Adresse aus einer IP-Adresse und Subnetzmaske?',
    questionData: { answer: 'Berechnung:\nIP: 192.168.10.130  Maske: 255.255.255.192 (/26)\n\n1. Subnetzmaske in Binär:\n255.255.255.192 = 11111111.11111111.11111111.11000000\n→ 26 Netz-Bits, 6 Host-Bits\n\n2. Netzadresse (AND-Verknüpfung IP & Maske):\n192.168.10.128\n(130 = 10000010, AND 11000000 = 10000000 = 128)\n\n3. Broadcast (alle Host-Bits = 1):\n192.168.10.191\n(128 + 63 = 191, da 2^6 - 1 = 63)\n\n4. Nutzbare Hosts: 2^6 - 2 = 62\n(Netzadresse und Broadcast abziehen)\n\nHostbereich: 192.168.10.129 - 192.168.10.190' },
    xpReward: 20,
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'ip-subnetting', type: 'multiple_choice', difficulty: 'hard',
    questionText: 'Welche Subnetzmaske gehört zu /26?',
    questionData: { options: ['255.255.255.0', '255.255.255.128', '255.255.255.192', '255.255.255.224'], correctIndex: 2 },
    explanation: '/26 = 26 Netz-Bits → letztes Oktett: 11000000 = 192. Also 255.255.255.192.',
    xpReward: 15,
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'ip-subnetting', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die CIDR-Notation der Anzahl nutzbarer Hosts zu:',
    questionData: { pairs: [
      { left: '/24', right: '254 Hosts' },
      { left: '/25', right: '126 Hosts' },
      { left: '/26', right: '62 Hosts' },
      { left: '/30', right: '2 Hosts' },
    ]},
    explanation: 'Nutzbare Hosts = 2^(32-Prefix) - 2. /30 wird für Point-to-Point-Verbindungen genutzt.'
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'ip-subnetting', type: 'fill_blank', difficulty: 'medium',
    questionText: 'IPv4-Adressen sind [BLANK] Bit lang. IPv6-Adressen sind [BLANK] Bit lang.',
    questionData: { template: 'IPv4-Adressen sind [BLANK] Bit lang. IPv6-Adressen sind [BLANK] Bit lang.', expectedAnswers: ['32', '128'] },
    explanation: 'IPv4: 32 Bit (4 Oktette), ca. 4,3 Milliarden Adressen. IPv6: 128 Bit, nahezu unbegrenzter Adressraum.'
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'protokolle', type: 'flashcard', difficulty: 'medium',
    questionText: 'Erkläre den Unterschied zwischen TCP und UDP.',
    questionData: { answer: 'TCP (Transmission Control Protocol):\n- Verbindungsorientiert (3-Way-Handshake)\n- Zuverlässig: Pakete werden bestätigt (ACK)\n- Reihenfolge garantiert\n- Fehlererkennung und Neuübertragung\n- Langsamer, mehr Overhead\n- Anwendung: HTTP, E-Mail, Dateitransfer\n\nUDP (User Datagram Protocol):\n- Verbindungslos (kein Handshake)\n- Unzuverlässig: Keine Bestätigung\n- Reihenfolge NICHT garantiert\n- Kein erneutes Senden verlorener Pakete\n- Schneller, weniger Overhead\n- Anwendung: Streaming, Gaming, DNS, VoIP\n\nMerksatz: TCP = zuverlässig aber langsam, UDP = schnell aber unsicher' },
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'protokolle', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Dienste dem verwendeten Protokoll zu:',
    questionData: { pairs: [
      { left: 'E-Mail senden', right: 'SMTP (Port 25/587)' },
      { left: 'Namensauflösung', right: 'DNS (Port 53)' },
      { left: 'Sichere Dateiübertragung', right: 'SFTP/SCP (Port 22)' },
      { left: 'Netzwerkkonfiguration', right: 'DHCP (Port 67/68)' },
    ]},
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'protokolle', type: 'true_false', difficulty: 'easy',
    questionText: 'DNS übersetzt Domainnamen (z.B. google.de) in IP-Adressen.',
    questionData: { isTrue: true, explanation: 'DNS (Domain Name System) ist das "Telefonbuch des Internets" – es löst lesbare Domainnamen in numerische IP-Adressen auf.' },
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'netzwerkgeraete', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen einem Switch und einem Router?',
    questionData: { answer: 'Switch (Schicht 2 – Data Link):\n- Arbeitet mit MAC-Adressen\n- Verbindet Geräte im SELBEN Netzwerk (LAN)\n- Lernt MAC-Adressen und leitet gezielt weiter\n- Erzeugt keine Broadcast-Domains\n\nRouter (Schicht 3 – Network):\n- Arbeitet mit IP-Adressen\n- Verbindet VERSCHIEDENE Netzwerke\n- Leitet Pakete zwischen Netzen weiter (Routing)\n- Trennt Broadcast-Domains\n- Hat NAT-Funktionalität\n\nAnalogie:\n- Switch = Briefsortierer innerhalb eines Gebäudes\n- Router = Postamt zwischen Städten' },
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'netzwerkgeraete', type: 'true_false', difficulty: 'easy',
    questionText: 'Ein Hub sendet eingehende Daten an ALLE angeschlossenen Geräte.',
    questionData: { isTrue: true, explanation: 'Ein Hub ist ein "dummes" Gerät – er sendet jedes Paket an alle Ports. Ein Switch dagegen sendet gezielt nur an den Port des Empfängers.' },
  },
  {
    topicSlug: 'netzwerk', subtopicSlug: 'netzwerkgeraete', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welches Gerät übersetzt private in öffentliche IP-Adressen (NAT)?',
    questionData: { options: ['Switch', 'Hub', 'Router', 'Repeater'], correctIndex: 2 },
    explanation: 'NAT (Network Address Translation) wird vom Router durchgeführt – er übersetzt private IPs (z.B. 192.168.x.x) in die öffentliche IP-Adresse.'
  },
]
