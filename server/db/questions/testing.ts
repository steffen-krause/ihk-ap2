import type { QuestionSeed } from '../seed-types'

export const testingQuestions: QuestionSeed[] = [
  // === BESTEHENDE FRAGEN ===
  {
    topicSlug: 'testing', subtopicSlug: 'testarten', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Testarten der richtigen Beschreibung zu:',
    questionData: { pairs: [
      { left: 'Unit Test', right: 'Testet einzelne Funktionen/Methoden isoliert' },
      { left: 'Integrationstest', right: 'Testet Zusammenspiel mehrerer Komponenten' },
      { left: 'Systemtest', right: 'Testet das Gesamtsystem gegen Anforderungen' },
      { left: 'Abnahmetest', right: 'Kunde prüft, ob Anforderungen erfüllt sind' },
    ]},
    explanation: 'Teststufen aufsteigend: Unit → Integration → System → Abnahme.'
  },
  {
    topicSlug: 'testing', subtopicSlug: 'testmethoden', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Welche Testmethode betrachtet NUR Ein- und Ausgaben, ohne den internen Code zu kennen?',
    questionData: { options: ['White-Box-Test', 'Black-Box-Test', 'Grey-Box-Test', 'Codeabdeckungstest'], correctIndex: 1 },
    explanation: 'Black-Box = nur Außenansicht (Ein-/Ausgabe). White-Box = Kenntnisse über internen Code. Grey-Box = teilweise Kenntnis.'
  },
  {
    topicSlug: 'testing', subtopicSlug: 'testmethoden', type: 'true_false', difficulty: 'easy',
    questionText: 'Beim White-Box-Test kennt der Tester den vollständigen Quellcode.',
    questionData: { isTrue: true, explanation: 'White-Box-Test (auch Strukturtest): Der Tester hat Zugang zum Quellcode und testet auf Basis der internen Struktur.' },
  },
  {
    topicSlug: 'testing', subtopicSlug: 'aequivalenzklassen', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind Äquivalenzklassen und Grenzwertanalyse?',
    questionData: { answer: 'Äquivalenzklassen:\nEingabewerte werden in Klassen aufgeteilt, die sich gleich verhalten. Pro Klasse reicht ein Testfall.\nBeispiel: Alter 0-17 (minderjährig), 18-65 (erwachsen), 66+ (Rentner) → 3 Testfälle statt alle Werte.\n\nGrenzwertanalyse:\nTeste an den Grenzen der Äquivalenzklassen, da dort die meisten Fehler auftreten.\nBeispiel: Bei 18-65 teste: 17, 18, 65, 66\n\nKombination: Äquivalenzklassen bestimmen die Bereiche, Grenzwertanalyse die konkreten Testwerte.' },
  },
  {
    topicSlug: 'testing', subtopicSlug: 'aequivalenzklassen', type: 'multiple_choice', difficulty: 'hard',
    questionText: 'Eine Funktion akzeptiert Eingaben von 1-100. Welche Grenzwerte sollten getestet werden?',
    questionData: { options: ['1, 50, 100', '0, 1, 100, 101', '1, 100', '0, 50, 101'], correctIndex: 1 },
    explanation: 'Grenzwertanalyse: Teste die Grenzen und direkt daneben. Gültig: 1, 100. Ungültig: 0, 101. Insgesamt: 0, 1, 100, 101.',
    xpReward: 15,
  },

  // === NEUE FRAGEN ===
  {
    topicSlug: 'testing', subtopicSlug: 'testarten', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist der Unterschied zwischen Regressionstest und Smoketest?',
    questionData: { answer: 'Regressionstest:\n- Prüft, ob durch Änderungen bestehende Funktionen kaputt gegangen sind\n- Wird nach jeder Codeänderung durchgeführt\n- Oft automatisiert (z.B. CI/CD Pipeline)\n- Beispiel: Nach Bugfix alle existierenden Tests erneut laufen lassen\n\nSmoketest:\n- Kurzer, oberflächlicher Test der wichtigsten Funktionen\n- "Geht das System überhaupt an?"\n- Wird vor detaillierteren Tests durchgeführt\n- Beispiel: Kann man sich einloggen? Wird die Startseite angezeigt?\n\nMetapher: Smoketest = "Schalte das Gerät ein und schau ob Rauch aufsteigt"' },
  },
  {
    topicSlug: 'testing', subtopicSlug: 'testarten', type: 'multiple_choice', difficulty: 'easy',
    questionText: 'Welche Testart wird vom Auftraggeber/Kunden durchgeführt?',
    questionData: { options: ['Unit Test', 'Integrationstest', 'Systemtest', 'Abnahmetest'], correctIndex: 3 },
    explanation: 'Abnahmetest (Acceptance Test): Der Kunde prüft, ob die Software seinen Anforderungen entspricht. Erfolgreiche Abnahme → Projektabschluss.'
  },
  {
    topicSlug: 'testing', subtopicSlug: 'testarten', type: 'true_false', difficulty: 'medium',
    questionText: 'Ein Regressionstest überprüft, ob neue Änderungen bestehende Funktionalität beeinträchtigt haben.',
    questionData: { isTrue: true, explanation: 'Regression = Rückschritt. Regressionstests stellen sicher, dass vorhandene Features nach Änderungen weiterhin funktionieren.' },
  },
  {
    topicSlug: 'testing', subtopicSlug: 'testarten', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Testarten ihrem Zeitpunkt im Entwicklungsprozess zu:',
    questionData: { pairs: [
      { left: 'Unit Test', right: 'Während der Implementierung (Entwickler)' },
      { left: 'Integrationstest', right: 'Nach Zusammenführung der Komponenten' },
      { left: 'Systemtest', right: 'Nach Fertigstellung des Gesamtsystems' },
      { left: 'Abnahmetest', right: 'Vor der Auslieferung (durch Kunden)' },
    ]},
  },
  {
    topicSlug: 'testing', subtopicSlug: 'testmethoden', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind die Codeabdeckungen C0, C1 und C2?',
    questionData: { answer: 'C0 – Anweisungsüberdeckung (Statement Coverage):\n- Jede Anweisung im Code wird mindestens einmal ausgeführt\n- Schwächstes Kriterium\n- Beispiel: Jede Zeile Code einmal durchlaufen\n\nC1 – Zweigüberdeckung (Branch Coverage):\n- Jeder Zweig (if/else) wird mindestens einmal durchlaufen\n- Stärker als C0\n- Erfasst auch den "else"-Fall\n\nC2 – Pfadüberdeckung (Path Coverage):\n- Jeder mögliche Pfad durch den Code wird getestet\n- Stärkstes Kriterium, aber oft impraktikabel\n- Bei n Verzweigungen: bis zu 2^n Pfade\n\nHierarchie: C0 ⊂ C1 ⊂ C2 (C2 impliziert C1, C1 impliziert C0)' },
    xpReward: 15,
  },
  {
    topicSlug: 'testing', subtopicSlug: 'testmethoden', type: 'multiple_choice', difficulty: 'hard',
    questionText: 'Welches Testabdeckungskriterium ist am stärksten?',
    questionData: { options: ['C0 (Anweisungsüberdeckung)', 'C1 (Zweigüberdeckung)', 'C2 (Pfadüberdeckung)', 'Alle sind gleichwertig'], correctIndex: 2 },
    explanation: 'C2 (Pfadüberdeckung) ist am stärksten, da alle möglichen Pfade getestet werden. C1 ist stärker als C0.',
    xpReward: 15,
  },
  {
    topicSlug: 'testing', subtopicSlug: 'testmethoden', type: 'matching', difficulty: 'medium',
    questionText: 'Ordne die Testmethoden den Black-Box- bzw. White-Box-Verfahren zu:',
    questionData: { pairs: [
      { left: 'Äquivalenzklassen', right: 'Black-Box' },
      { left: 'Grenzwertanalyse', right: 'Black-Box' },
      { left: 'Anweisungsüberdeckung', right: 'White-Box' },
      { left: 'Pfadüberdeckung', right: 'White-Box' },
    ]},
  },
  {
    topicSlug: 'testing', subtopicSlug: 'testmethoden', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was ist TDD (Test-Driven Development)?',
    questionData: { answer: 'TDD – Testgetriebene Entwicklung:\n\nZyklus (Red-Green-Refactor):\n1. RED: Schreibe einen Test, der fehlschlägt\n2. GREEN: Schreibe den minimalen Code, damit der Test besteht\n3. REFACTOR: Verbessere den Code, behalte alle Tests grün\n\nVorteile:\n- Tests dokumentieren gewünschtes Verhalten\n- Hohe Testabdeckung von Anfang an\n- Saubereres Design (Code muss testbar sein)\n- Weniger Bugs in der Produktion\n\nNachteile:\n- Anfangs langsamer\n- Erfordert Disziplin\n- Lernkurve\n\nWichtig: Tests VOR dem Code schreiben, nicht danach!' },
  },
  {
    topicSlug: 'testing', subtopicSlug: 'aequivalenzklassen', type: 'multiple_choice', difficulty: 'medium',
    questionText: 'Ein Eingabefeld akzeptiert Alter zwischen 18 und 99. Wie viele Äquivalenzklassen gibt es?',
    questionData: { options: ['2 (gültig, ungültig)', '3 (unter 18, 18-99, über 99)', '4 (unter 0, 0-17, 18-99, über 99)', '82 (eine pro gültigem Wert)'], correctIndex: 1 },
    explanation: '3 Klassen: < 18 (ungültig), 18-99 (gültig), > 99 (ungültig). Pro Klasse reicht ein Testfall.'
  },
  {
    topicSlug: 'testing', subtopicSlug: 'aequivalenzklassen', type: 'true_false', difficulty: 'easy',
    questionText: 'Bei der Grenzwertanalyse werden immer die Randwerte und die direkt angrenzenden Werte getestet.',
    questionData: { isTrue: true, explanation: 'Grenzwertanalyse: Teste den Grenzwert selbst UND die Werte direkt daneben. Bei Bereich 1-100: teste 0, 1, 100, 101.' },
  },
  {
    topicSlug: 'testing', subtopicSlug: 'testarten', type: 'flashcard', difficulty: 'medium',
    questionText: 'Was sind Test-Doubles (Mock, Stub, Fake, Spy)?',
    questionData: { answer: 'Test-Doubles ersetzen echte Abhängigkeiten in Unit Tests:\n\nStub:\n- Gibt vordefinierte Antworten zurück\n- Keine Verifikation der Aufrufe\n- Beispiel: Fake-DB die immer "User gefunden" liefert\n\nMock:\n- Wie Stub + prüft ob korrekt aufgerufen wurde\n- Verifiziert Interaktion (wurde Methode X aufgerufen?)\n- Beispiel: Prüft ob sendEmail() aufgerufen wurde\n\nSpy:\n- Umhüllt das echte Objekt, zeichnet Aufrufe auf\n- Echte Implementierung läuft durch\n\nFake:\n- Vereinfachte Implementierung\n- Beispiel: In-Memory-DB statt echter Datenbank\n\nZweck: Tests isolieren, schnell halten, deterministisch machen.' },
  },
]
