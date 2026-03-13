# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

CalendarioAudiovisual is a weekly schedule/calendar app for managing audiovisual room bookings in a school. Events track time slots, responsible teacher (maestro), and student groups (grupos). The UI is in Spanish.

## Commands

### Frontend (root directory)

- **Dev server:** `npm start` (runs on http://localhost:3000)
- **Build:** `npm run build`
- **Tests:** `npm test` (Jest + React Testing Library, interactive watch mode)
- **Run single test:** `npm test -- --testPathPattern=<filename>`
- **Lint:** ESLint is configured via `react-app` preset; errors show in the dev server console. No standalone lint script exists.

### Backend (`backend/` directory)

- **Start server:** `node backend/server.js` (runs on http://localhost:3001)
- **Requires:** MongoDB running locally on `mongodb://localhost:27017/calendario`
- **No test or lint scripts configured.**

## Architecture

This is a monorepo with two independent Node.js projects sharing one git root:

### Frontend — Create React App (React 19)

- **Entry:** `src/index.js` → `src/App.js`
- **Routing:** react-router-dom v7 is installed but routes are not currently wired up in App.js.
- **Styling:** Bootstrap 5 CSS + `src/App.css`. No CSS modules or preprocessor.
- **Key dependencies:** react-big-calendar (installed but not currently used), axios (for backend HTTP calls, not yet wired), uniqid.

#### Component hierarchy

`Calendario` is the main component — a weekly grid (hours 7–20 × 7 days). It manages all event state in local React state (not persisted to backend yet).

- `Calendario.jsx` — Renders the week table. Manages `eventos` array state locally. Clicking an empty cell opens the modal.
- `ModalBasico.jsx` — Form modal to create an event (name, time range, teacher, groups). On save, appends to the parent `eventos` state.
- `CeldaEvento.jsx` — Renders a booked cell with `rowSpan` for multi-hour events. Shows a tooltip on hover.
- `TooltipBasico.jsx` — Fixed-position card that follows the cursor, showing event details.
- `Tabla.jsx` — An alternative/prototype table view with prev/next week navigation (not integrated into App).

#### Event data shape (frontend)

```json path=null start=null
{
  "NombreEvento": "string",
  "Hora": "number (7–20, start hour)",
  "HoraFinal": "number (end hour)",
  "Dia": "string (e.g. 'lunes', 'Martes')",
  "Maestro": "string",
  "Grupos": ["string array of group codes like '1A'"],
  "Grupo": "string (unused legacy field)"
}
```

### Backend — Express 5 + Mongoose

A single file (`backend/server.js`) with two endpoints:

- `GET /eventos` — returns all events from MongoDB
- `POST /evento` — creates a new event

The Mongoose `Evento` model schema uses different field names than the frontend (`dia`, `horainicio`, `horafinal`, `nombreEvento`, `nombreMaestro`, `grado`, `grupo`). **The frontend and backend schemas are not yet aligned** — this mapping must be handled when integrating.

## Known Issues / Incomplete Wiring

- `App.js` has a syntax error on line 11 (`Array.from` arrow function body is empty).
- Frontend events are only in local state; axios calls to the backend are not implemented yet.
- Field names differ between frontend event objects and the Mongoose model.
- `react-big-calendar` is installed but unused.
- Day names array is inconsistent: lowercase 'lunes' but capitalized 'Martes', 'Miercoles', etc. This matters for event lookup matching.
