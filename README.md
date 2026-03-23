<div align="center">

# 🎓 IHK AP2 Trainer

**Gamifizierte Lern-App zur Vorbereitung auf die IHK AP2-Prüfung**
Fachinformatiker Anwendungsentwicklung · Sommer 2026

<br>

`Nuxt 4` · `Drizzle ORM` · `PostgreSQL` · `Tailwind CSS` · `pnpm` · `SM-2 Spaced Repetition`

</div>

---

## ✨ Features

| | Feature | Details |
|---|---|---|
| 🧠 | **7 Fragetypen** | Multiple Choice, Wahr/Falsch, Lückentext, SQL-Editor, Pseudocode, Zuordnung, Karteikarten |
| 🔁 | **Spaced Repetition** | SM-2 Algorithmus für optimale Wiederholungsintervalle |
| 🏆 | **Gamification** | XP, Level-System, Streaks & Confetti-Feedback |
| 📝 | **Prüfungssimulation** | Realistische Klausuren mit Timer (GA1, GA2, WiSo) |
| 📊 | **Performance-Tracking** | Pro Thema mit Schwachstellen-Erkennung & Aktivitäts-Heatmap |

---

## 🛠 Voraussetzungen

| Tool | Version |
|---|---|
| Node.js | ≥ 18 |
| pnpm | ≥ 9 |
| Docker | latest |

---

## 🚀 Setup

```bash
# 1 — Dependencies installieren
pnpm install

# 2 — PostgreSQL starten (Port 5433)
docker compose up -d

# 3 — Datenbank-Schema erstellen
pnpm run db:push

# 4 — Fragen seeden (17 Themen · 52 Unterthemen · ~100 Fragen)
pnpm run db:seed

# 5 — Dev-Server starten
pnpm dev
```

> App öffnen unter **http://localhost:3000**

<details>
<summary>💡 Port-Konflikt?</summary>

Falls Port 5433 belegt ist, passe den Port in `docker-compose.yml` und `.env` an.

</details>

---

## 📜 Scripts

| Script | Beschreibung |
|---|---|
| `pnpm dev` | Dev-Server starten |
| `pnpm build` | Production Build |
| `pnpm db:push` | Schema in die DB pushen |
| `pnpm db:seed` | Datenbank mit Fragen befüllen |
| `pnpm db:studio` | Drizzle Studio (DB-Browser) |
| `pnpm db:generate` | Drizzle Migrations generieren |

---

## ⚙️ Umgebungsvariablen

`.env` — wird beim Setup automatisch genutzt:

```env
DATABASE_URL=postgres://ihk:ihk@localhost:5433/ihk_ap2
```

---

## 🧱 Tech Stack

| Technologie | Beschreibung |
|---|---|
| **Nuxt 4** | Vue 3 Fullstack-Framework |
| **Drizzle ORM** | Type-safe SQL mit PostgreSQL |
| **Tailwind CSS** | Utility-first Styling |
| **SM-2** | Spaced Repetition Algorithmus |
| **canvas-confetti** | Feedback-Animationen |
| **VueUse** | Composition Utility Library |

---

## 📈 Fragenabdeckung & Prüfungsvorbereitung

> Stand: März 2026 · **276 Fragen** über **17 Themengebiete** · **52 Unterthemen**

### Fragenverteilung nach Thema

| Thema | Prio | Fragen | Abdeckung |
|---|---|---|---|
| Pseudocode & Algorithmen | 🔴 1 | 30 | ✅ Sehr gut |
| SQL | 🔴 1 | 28 | ✅ Sehr gut |
| Datenbanken (Theorie) | 🔴 1 | 20 | ✅ Gut |
| UML-Diagramme | 🔴 1 | 20 | ✅ Gut |
| Netzwerktechnik | 🟠 2 | 20 | ✅ Sehr gut |
| IT-Sicherheit & DSGVO | 🟠 2 | 19 | ✅ Sehr gut |
| Testing & QS | 🟠 2 | 16 | ✅ Gut |
| Vorgehensmodelle | 🟡 3 | 15 | ✅ Gut |
| OOP & Design Patterns | 🟡 3 | 15 | ✅ Gut |
| WiSo | 🟢 4 | 15 | ✅ Gut |
| Speicher / RAID / Cloud | 🟡 3 | 14 | ✅ Gut |
| Datenstrukturen | 🟡 3 | 13 | ✅ Gut |
| Schnittstellen / REST | 🟡 3 | 12 | ⚠️ Okay |
| Webentwicklung | 🟡 3 | 11 | ⚠️ Okay |
| Git | 🟡 3 | 10 | ⚠️ Okay |
| Ergonomie | 🟡 3 | 9 | ⚠️ Knapp |
| Programmiersprachen | 🟡 3 | 9 | ⚠️ Knapp |

### Gesamtbewertung

| Aspekt | Bewertung |
|---|---|
| Abdeckung Prio 1 (~60% der Prüfungspunkte) | ⭐⭐⭐⭐⭐ 9/10 |
| Abdeckung Prio 2 (~25% der Prüfungspunkte) | ⭐⭐⭐⭐ 8/10 |
| Abdeckung Prio 3–4 (~15% der Prüfungspunkte) | ⭐⭐⭐⭐ 7/10 |
| Fragequalität & Prüfungsnähe | ⭐⭐⭐⭐ 8/10 |
| Lernmaterial (Lernplan) | ⭐⭐⭐⭐⭐ 9/10 |
| **Gesamt** | **⭐⭐⭐⭐ 8/10** |

---

## ⚠️ Haftungsausschluss

Die in dieser App enthaltenen Fragen und Inhalte dienen ausschließlich zu **Übungszwecken** und erheben **keinen Anspruch auf Richtigkeit oder Vollständigkeit**. Für die Korrektheit der Fragen, Antworten und Erklärungen wird **keine Haftung** übernommen. Die Inhalte ersetzen **nicht** die offizielle Prüfungsvorbereitung der IHK.

Nutzung auf eigene Verantwortung.

---

## 📄 Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE) lizenziert.

---

<div align="center">
<sub>Gebaut für die Prüfungsvorbereitung · Lokal · Kein Account nötig</sub>
</div>
