import type { QuestionSeed } from '../seed-types'

export const gitQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'git', subtopicSlug: 'git-grundlagen', type: 'matching', difficulty: 'easy',
    questionText: 'Ordne die Git-Befehle ihren Funktionen zu:',
    questionData: { pairs: [
      { left: 'git add', right: 'Änderungen zur Staging Area hinzufügen' },
      { left: 'git commit', right: 'Staging Area als Snapshot speichern' },
      { left: 'git push', right: 'Lokale Commits zum Remote senden' },
      { left: 'git pull', right: 'Remote-Änderungen holen und mergen' },
    ]},
  },
  {
    topicSlug: 'git', subtopicSlug: 'git-grundlagen', type: 'flashcard', difficulty: 'easy',
    questionText: 'Erkläre den Unterschied zwischen Working Directory, Staging Area und Repository in Git.',
    questionData: { answer: 'Working Directory (Arbeitsverzeichnis):\n- Deine lokalen Dateien auf der Festplatte\n- Änderungen sind "untracked" oder "modified"\n\nStaging Area (Index):\n- Zwischenbereich für den nächsten Commit\n- Dateien werden mit "git add" hinzugefügt\n- Ermöglicht selektives Committen\n\nRepository (lokales Repo):\n- Alle gespeicherten Snapshots (Commits)\n- Mit "git commit" wird die Staging Area als neuer Snapshot gespeichert\n\nFlow: Working Dir → git add → Staging → git commit → Repository → git push → Remote' },
  },
  {
    topicSlug: 'git', subtopicSlug: 'branching', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Was passiert bei einem Merge-Konflikt in Git?',
    questionData: { options: [
      'Git löscht die widersprüchlichen Dateien',
      'Git wählt automatisch die neuere Version',
      'Git markiert die Konfliktstellen und der Entwickler muss manuell lösen',
      'Der Merge wird automatisch abgebrochen',
    ], correctIndex: 2 },
    explanation: 'Git markiert Konflikte mit <<<<<<< / ======= / >>>>>>> und der Entwickler entscheidet, welcher Code übernommen wird.'
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'git', subtopicSlug: 'git-grundlagen', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welcher Befehl zeigt den Status aller geänderten Dateien im Arbeitsverzeichnis?',
    questionData: { options: ['git log', 'git status', 'git diff', 'git show'], correctIndex: 1 },
    explanation: 'git status zeigt: untracked files, modified files, staged files. Ein Überblick über den aktuellen Stand.'
  },
  {
    topicSlug: 'git', subtopicSlug: 'git-grundlagen', type: 'true_false', difficulty: 'easy',
    questionText: 'Git ist ein zentralisiertes Versionskontrollsystem.',
    questionData: { isTrue: false, explanation: 'Git ist DEZENTRAL (verteilt): Jeder Entwickler hat eine vollständige Kopie des Repositories. SVN dagegen ist zentralisiert.' },
  },
  {
    topicSlug: 'git', subtopicSlug: 'git-grundlagen', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Git-Befehle zum Überprüfen ihren Funktionen zu:',
    questionData: { pairs: [
      { left: 'git log', right: 'Commit-Historie anzeigen' },
      { left: 'git diff', right: 'Unterschiede zwischen Versionen zeigen' },
      { left: 'git blame', right: 'Zeigt wer welche Zeile zuletzt geändert hat' },
      { left: 'git stash', right: 'Änderungen temporär zwischenspeichern' },
    ]},
  },
  {
    topicSlug: 'git', subtopicSlug: 'branching', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen git merge und git rebase?',
    questionData: { answer: 'git merge:\n- Erstellt einen Merge-Commit\n- Bewahrt die vollständige Historie\n- Zeigt wann Branches zusammengeführt wurden\n- Sicherer bei geteilten Branches\n- Ergebnis: Verzweigte Historie mit Merge-Commits\n\ngit rebase:\n- "Verschiebt" Commits auf eine neue Basis\n- Lineare, saubere Historie\n- Kein Merge-Commit\n- NICHT auf shared/public Branches nutzen!\n- Ergebnis: Gerade Linie in der Historie\n\nFaustregel:\n- Feature-Branch aktualisieren → rebase\n- Feature in main integrieren → merge\n- Im Zweifel → merge (sicherer)' },
  },
  {
    topicSlug: 'git', subtopicSlug: 'branching', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Git-Branching-Strategien ihren Beschreibungen zu:',
    questionData: { pairs: [
      { left: 'Feature Branch', right: 'Eigener Branch pro Feature/Aufgabe' },
      { left: 'Git Flow', right: 'main, develop, feature, release, hotfix Branches' },
      { left: 'Trunk-Based', right: 'Alle arbeiten auf einem Hauptbranch, kleine Commits' },
    ]},
  },
  {
    topicSlug: 'git', subtopicSlug: 'branching', type: 'true_false', difficulty: 'medium',
    questionText: 'Ein git rebase auf einem öffentlichen Branch kann die Historie anderer Entwickler zerstören.',
    questionData: { isTrue: true, explanation: 'Rebase schreibt Commits um (neue Hashes). Auf geteilten Branches führt das zu Problemen, da andere Entwickler die alten Commits haben. Goldene Regel: Nie öffentliche Historie umschreiben!' },
  },
  {
    topicSlug: 'git', subtopicSlug: 'git-grundlagen', type: 'flashcard', difficulty: 'easy',
    questionText: 'Was ist eine .gitignore Datei?',
    questionData: { answer: '.gitignore:\n- Datei im Root des Repositories\n- Listet Dateien/Ordner auf, die Git ignorieren soll\n- Werden NICHT getrackt oder committet\n\nTypische Einträge:\n- node_modules/     (Dependencies)\n- .env              (Umgebungsvariablen/Secrets)\n- dist/             (Build-Output)\n- *.log             (Logdateien)\n- .DS_Store         (macOS)\n- *.class           (kompilierte Java-Dateien)\n\nSyntax:\n- # Kommentar\n- *.txt         → alle .txt Dateien\n- /build        → nur build im Root\n- **/logs       → logs in allen Unterordnern\n- !wichtig.txt  → Ausnahme (NICHT ignorieren)' },
  },
]
