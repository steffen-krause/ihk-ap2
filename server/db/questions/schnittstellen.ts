import type { QuestionSeed } from '../seed-types'

export const schnittstellenQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'rest-api', type: 'matching', difficulty: 'easy',
    questionText: 'Ordne die HTTP-Methoden ihren CRUD-Operationen zu:',
    questionData: { pairs: [
      { left: 'GET', right: 'Read (Lesen)' },
      { left: 'POST', right: 'Create (Erstellen)' },
      { left: 'PUT', right: 'Update (Aktualisieren)' },
      { left: 'DELETE', right: 'Delete (Löschen)' },
    ]},
  },
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'rest-api', type: 'true_false', difficulty: 'easy',
    questionText: 'REST-APIs sind zustandsbehaftet (stateful) – der Server speichert die Session.',
    questionData: { isTrue: false, explanation: 'REST ist zustandslos (stateless): Jeder Request enthält alle nötigen Informationen. Der Server speichert keinen Client-Zustand zwischen Requests.' },
  },
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'json-xml', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welches Datenaustauschformat ist leichtgewichtiger und wird heute bei Web-APIs bevorzugt?',
    questionData: { options: ['XML', 'JSON', 'CSV', 'YAML'], correctIndex: 1 },
    explanation: 'JSON ist kompakter als XML (kein Markup-Overhead), nativ in JavaScript lesbar und der Standard für moderne Web-APIs.'
  },
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'http', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die HTTP-Statuscodes ihren Bedeutungen zu:',
    questionData: { pairs: [
      { left: '200', right: 'OK – Anfrage erfolgreich' },
      { left: '404', right: 'Not Found – Ressource nicht gefunden' },
      { left: '401', right: 'Unauthorized – Authentifizierung nötig' },
      { left: '500', right: 'Internal Server Error – Serverfehler' },
    ]},
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'rest-api', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind die 6 REST-Prinzipien?',
    questionData: { answer: '1. Client-Server:\n   Trennung von Client und Server\n\n2. Stateless (zustandslos):\n   Jeder Request enthält alle nötigen Informationen\n\n3. Cacheable:\n   Responses können gecacht werden\n\n4. Uniform Interface:\n   Einheitliche Schnittstelle (Ressourcen über URIs)\n\n5. Layered System:\n   Geschichtete Architektur (Client weiß nicht, ob er direkt mit Server spricht)\n\n6. Code on Demand (optional):\n   Server kann ausführbaren Code senden (z.B. JavaScript)\n\nREST ist kein Protokoll, sondern ein Architekturstil!' },
  },
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'rest-api', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welche HTTP-Methode ist idempotent? (Mehrmaliges Ausführen hat gleichen Effekt wie einmaliges)',
    questionData: { options: ['POST', 'PATCH (teilweise)', 'PUT', 'Keine'], correctIndex: 2 },
    explanation: 'PUT ist idempotent: Ob man PUT /user/1 einmal oder zehnmal sendet – das Ergebnis ist dasselbe. POST ist NICHT idempotent (könnte mehrere Einträge erzeugen).'
  },
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'rest-api', type: 'true_false', difficulty: 'medium',
    questionText: 'PATCH aktualisiert eine Ressource vollständig, PUT nur teilweise.',
    questionData: { isTrue: false, explanation: 'Umgekehrt: PUT = vollständiges Update (Ressource komplett ersetzen). PATCH = partielles Update (nur geänderte Felder senden).' },
  },
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'json-xml', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Datenaustauschformate ihren Eigenschaften zu:',
    questionData: { pairs: [
      { left: 'JSON', right: 'Leichtgewichtig, nativ in JavaScript' },
      { left: 'XML', right: 'Schema-Validierung (XSD), XSLT-Transformation' },
      { left: 'CSV', right: 'Tabellarisch, einfach aber begrenzt' },
      { left: 'YAML', right: 'Menschenlesbar, für Konfiguration' },
    ]},
  },
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'json-xml', type: 'flashcard', difficulty: 'easy',
    questionText: 'Welche Datentypen unterstützt JSON?',
    questionData: { answer: 'JSON unterstützt 6 Datentypen:\n\n1. String: "Hallo Welt"\n2. Number: 42, 3.14 (kein int/float Unterschied)\n3. Boolean: true, false\n4. null: null\n5. Array: [1, 2, 3]\n6. Object: {"name": "Max", "alter": 25}\n\nNicht unterstützt:\n- Datum (wird als String übertragen)\n- Kommentare\n- Funktionen\n- undefined (JavaScript-spezifisch)\n\nWichtig: Schlüssel in JSON MÜSSEN in doppelten Anführungszeichen stehen!' },
  },
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'http', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die HTTP-Statuscode-Bereiche ihren Bedeutungen zu:',
    questionData: { pairs: [
      { left: '1xx', right: 'Informational (Verarbeitung läuft)' },
      { left: '2xx', right: 'Success (Erfolgreich)' },
      { left: '3xx', right: 'Redirection (Weiterleitung)' },
      { left: '4xx', right: 'Client Error (Fehler beim Client)' },
    ]},
  },
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'http', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welcher HTTP-Statuscode bedeutet, dass die Ressource dauerhaft verschoben wurde?',
    questionData: { options: ['301 Moved Permanently', '302 Found (Temporary Redirect)', '304 Not Modified', '307 Temporary Redirect'], correctIndex: 0 },
    explanation: '301 = dauerhaft verschoben (Browser aktualisiert Lesezeichen). 302/307 = temporäre Weiterleitung.'
  },
  {
    topicSlug: 'schnittstellen', subtopicSlug: 'http', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen Authentifizierung und Autorisierung?',
    questionData: { answer: 'Authentifizierung (Authentication):\n- WER bist du?\n- Identität nachweisen\n- Login mit Benutzername + Passwort\n- Methoden: Basic Auth, OAuth, JWT, API-Key\n- HTTP 401 Unauthorized = nicht authentifiziert\n\nAutorisierung (Authorization):\n- WAS darfst du?\n- Berechtigungen prüfen\n- Hat der User Zugriff auf diese Ressource?\n- Rollen und Rechte (Admin, User, Gast)\n- HTTP 403 Forbidden = authentifiziert, aber nicht berechtigt\n\nReihenfolge: Erst Authentifizierung, dann Autorisierung\n\nMerksatz: Authentifizierung = Ausweis zeigen\n          Autorisierung = VIP-Bereich betreten dürfen' },
  },
]
