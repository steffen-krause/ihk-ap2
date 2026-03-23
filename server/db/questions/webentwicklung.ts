import type { QuestionSeed } from '../seed-types'

export const webentwicklungQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'html-css-js', type: 'matching', difficulty: 'easy',
    questionText: 'Ordne die Web-Technologien ihren Aufgaben zu:',
    questionData: { pairs: [
      { left: 'HTML', right: 'Struktur und Inhalt der Seite' },
      { left: 'CSS', right: 'Design und Layout' },
      { left: 'JavaScript', right: 'Interaktivität und Logik' },
    ]},
  },
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'client-server', type: 'flashcard', difficulty: 'easy',
    questionText: 'Erkläre das Client-Server-Modell im Web.',
    questionData: { answer: 'Client-Server-Modell:\n\nClient (Browser):\n- Sendet HTTP-Request an Server\n- Empfängt und rendert die Antwort (HTML, CSS, JS)\n- Beispiele: Chrome, Firefox, mobile Apps\n\nServer:\n- Empfängt Requests\n- Verarbeitet Logik (z.B. Datenbankabfragen)\n- Sendet HTTP-Response zurück\n- Beispiele: Apache, Nginx, Node.js\n\nAblauf:\n1. Client sendet GET /index.html\n2. Server verarbeitet Request\n3. Server antwortet mit HTML\n4. Browser rendert die Seite\n5. Browser lädt weitere Ressourcen (CSS, JS, Bilder)\n\nStateless: HTTP ist zustandslos – jeder Request ist unabhängig.\nSession/Cookies ermöglichen "Zustand" (z.B. Login).' },
  },
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'client-server', type: 'true_false', difficulty: 'easy',
    questionText: 'HTTP ist ein zustandsbehaftetes Protokoll – der Server erinnert sich an vorherige Anfragen.',
    questionData: { isTrue: false, explanation: 'HTTP ist zustandslos (stateless). Jede Anfrage ist unabhängig. Zustand wird über Cookies, Sessions oder Tokens (JWT) realisiert.' },
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'html-css-js', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welcher HTML-Tag wird für eine geordnete (nummerierte) Liste verwendet?',
    questionData: { options: ['<ul>', '<ol>', '<li>', '<dl>'], correctIndex: 1 },
    explanation: '<ol> = ordered list (nummeriert), <ul> = unordered list (Aufzählung), <li> = list item (einzelner Punkt), <dl> = description list.'
  },
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'html-css-js', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist das CSS Box-Modell?',
    questionData: { answer: 'Jedes HTML-Element ist eine "Box" mit 4 Schichten:\n\n1. Content (Inhalt):\n   - Der eigentliche Inhalt (Text, Bild)\n   - Größe: width × height\n\n2. Padding (Innenabstand):\n   - Abstand zwischen Content und Border\n   - padding: 10px;\n\n3. Border (Rahmen):\n   - Umrandung des Elements\n   - border: 1px solid black;\n\n4. Margin (Außenabstand):\n   - Abstand zu anderen Elementen\n   - margin: 20px;\n\nbox-sizing: content-box (Standard):\n   Gesamtbreite = width + padding + border\n\nbox-sizing: border-box:\n   width ENTHÄLT padding + border\n   (meist praktischer!)' },
  },
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'html-css-js', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die CSS-Selektoren ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: '#id', right: 'Selektiert Element mit bestimmter ID' },
      { left: '.class', right: 'Selektiert alle Elemente mit dieser Klasse' },
      { left: 'element', right: 'Selektiert alle Elemente dieses Typs' },
      { left: 'element > child', right: 'Selektiert direkte Kinder' },
    ]},
  },
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'html-css-js', type: 'true_false', difficulty: 'easy',
    questionText: 'JavaScript wird ausschließlich im Browser ausgeführt.',
    questionData: { isTrue: false, explanation: 'JavaScript kann auch serverseitig ausgeführt werden (z.B. Node.js, Deno, Bun). Auch in mobilen Apps (React Native) und Desktop-Apps (Electron).' },
  },
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'html-css-js', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen == und === in JavaScript?',
    questionData: { options: [
      'Kein Unterschied',
      '== prüft nur Wert (mit Typkonvertierung), === prüft Wert UND Typ',
      '=== ist langsamer als ==',
      '== ist strenger als ===',
    ], correctIndex: 1 },
    explanation: '== (loose equality): "5" == 5 → true (konvertiert Typ). === (strict equality): "5" === 5 → false (verschiedene Typen). Best Practice: Immer === verwenden!'
  },
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'client-server', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind Cookies, Sessions und JWT?',
    questionData: { answer: 'Cookies:\n- Kleine Textdateien im Browser\n- Werden bei jedem Request automatisch mitgesendet\n- Können vom Server gesetzt werden (Set-Cookie Header)\n- Beispiel: Sprache, Theme, Session-ID\n\nSessions:\n- Serverseitige Speicherung von Benutzerdaten\n- Session-ID wird als Cookie gespeichert\n- Daten liegen auf dem Server (sicherer)\n- Problem: Skalierung (Session auf mehreren Servern?)\n\nJWT (JSON Web Token):\n- Signiertes Token mit Benutzerdaten\n- Wird im Header mitgesendet (Authorization: Bearer ...)\n- Server muss keine Session speichern (stateless)\n- 3 Teile: Header.Payload.Signature (Base64)\n- Kann nicht widerrufen werden (bis Ablaufdatum)\n\nModern: JWT für APIs, Sessions für traditionelle Web-Apps' },
  },
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'client-server', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Web-Konzepte ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: 'SPA (Single Page Application)', right: 'Eine HTML-Seite, Inhalte werden dynamisch geladen' },
      { left: 'SSR (Server-Side Rendering)', right: 'HTML wird auf dem Server generiert' },
      { left: 'CSR (Client-Side Rendering)', right: 'HTML wird im Browser durch JavaScript erzeugt' },
      { left: 'SSG (Static Site Generation)', right: 'HTML wird zur Build-Zeit vorgeneriert' },
    ]},
  },
  {
    topicSlug: 'webentwicklung', subtopicSlug: 'client-server', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was ist CORS (Cross-Origin Resource Sharing)?',
    questionData: { options: [
      'Ein Verschlüsselungsverfahren',
      'Ein Mechanismus, der Browsern erlaubt, Ressourcen von anderen Domains zu laden',
      'Ein JavaScript-Framework',
      'Ein HTTP-Status-Code',
    ], correctIndex: 1 },
    explanation: 'CORS erlaubt kontrollierten Zugriff auf Ressourcen einer anderen Domain. Ohne CORS blockiert der Browser aus Sicherheitsgründen Cross-Origin-Requests (Same-Origin Policy).'
  },
]
