# Internal Task/Ticket Tracker

A monorepo training project for building an internal task/ticket tracker.

## Tech Stack

- **Monorepo:** npm workspaces
- **Database:** PostgreSQL (Docker) + Prisma ORM
- **Backend:** NestJS
- **Frontend:** Next.js (App Router) + TailwindCSS
- **Auth:** Better-Auth

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env

# 3. Start PostgreSQL
docker compose up -d

# 4. Push database schema (creates tables)
npm run db:push

# 5. Start the API (port 4000)
npm run dev:api

# 6. Start the web app (port 3000) — in a separate terminal
npm run dev:web
```

- Frontend: http://localhost:3000
- API: http://localhost:4000

## Project Structure

```
├── docker-compose.yml          # PostgreSQL service
├── packages/
│   └── database/               # Prisma schema + client (Better-Auth models)
└── apps/
    ├── api/                    # NestJS backend (port 4000)
    │   └── src/
    │       ├── prisma/         # PrismaService (DB connection)
    │       └── task/           # Task module (STUBBED — see below)
    └── web/                    # Next.js frontend (port 3000)
        └── src/
            ├── app/
            │   ├── login/      # Sign in / sign up page (working)
            │   └── tasks/      # Task board (STUBBED — see below)
            ├── components/     # Navbar with login/logout
            └── lib/            # Better-Auth server & client config
```

## What's Implemented

- Docker Compose with PostgreSQL
- Prisma schema with Better-Auth models (`User`, `Session`, `Account`, `Verification`)
- NestJS API with CORS, PrismaService, and a global PrismaModule
- Next.js with Better-Auth email/password sign-in and sign-up
- Navbar with session-aware login/logout button

## What the Intern Needs to Build

### Backend

1. **Add a `Task` model** to `packages/database/prisma/schema.prisma` (e.g., `id`, `title`, `description`, `status`, `userId`, timestamps). Then run `npm run db:push`.

2. **`POST /tasks`** (`apps/api/src/task/task.controller.ts:18`) — Extract `title` and `description` from the request body, use Prisma to save a new task. Currently returns `501 Not Implemented`.

3. **`GET /tasks`** (`apps/api/src/task/task.controller.ts:14`) — Fetch and return tasks from the database. Currently returns an empty array `[]`.

4. **`PATCH /tasks/:id/status`** (`apps/api/src/task/task.controller.ts:24`) — Find a task by ID and update its status (e.g., `OPEN` → `CLOSED`). Currently returns `501 Not Implemented`.

### Frontend

5. **Task Board UI** (`apps/web/src/app/tasks/page.tsx`) — Build a task list, a form to create tasks, and a button to close tasks. Fetch data from `http://localhost:4000/tasks`.

6. **Route protection** — `/tasks` is intentionally left unprotected. Add a Better-Auth session check to redirect unauthenticated users to `/login`.

## Useful Commands

| Command | Description |
|---|---|
| `npm run db:push` | Push Prisma schema to database |
| `npm run db:studio` | Open Prisma Studio (database GUI) |
| `npm run dev:api` | Start NestJS in watch mode |
| `npm run dev:web` | Start Next.js dev server |
