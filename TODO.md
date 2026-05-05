# Intern Training: Task Tracker Project

Welcome! Your goal is to build out the missing pieces of our Internal Task Tracker. The core plumbing is set up, but the actual features are stubbed out.

## 🛠️ The Workflow (Rules of Engagement)
- **Single Branch/Hero Development**: You will work on an isolated branch off `main`.
- **Rebase, Don't Merge**: Keep your history clean. Rebase against `main` frequently.
- **Self-Guided**: Watch the recommended videos, read the code, and figure out how the pieces connect.

---

## 🚀 Task 1: Survive the Workflow (Git & Docker)
**Goal**: Understand how not to break the codebase and get the app running locally.

### 📚 Watch & Learn
- [ ] YouTube: *"Fireship Git Rebase"*
- [ ] YouTube: *"Hussein Nasser Git Merge vs Rebase"*
- [ ] YouTube: *"Trunk Based Development vs Git Flow"*
- [ ] YouTube: *"Docker Compose Crash Course"*

### ✅ Tasks
- [ ] Clone the monorepo and checkout a new branch (e.g., `intern/task-tracker`).
- [ ] Copy `.env.example` to `.env`.
- [ ] Run `docker compose up -d` to start the PostgreSQL database.
- [ ] Run `npm install` at the root.
- [ ] Start the apps: `npm run dev:api` and `npm run dev:web`.
- [ ] **Git Practice**: Make a dummy commit, switch to `main`, make another commit, switch back, and run `git rebase -i main`. Resolve any conflicts.

---

## 🗄️ Task 2: The Data Layer (Postgres & Prisma)
**Goal**: Understand how data is structured and how to talk to it.

### 📚 Watch & Learn
- [ ] YouTube: *"Web Dev Simplified Prisma Crash Course"*
- [ ] YouTube: *"PostgreSQL in 100 Seconds Fireship"*

### ✅ Tasks
- [ ] Open `packages/database/prisma/schema.prisma`. Notice there is no `Task` model.
- [ ] Add a `Task` model with fields: `id`, `title`, `description`, `status` (e.g., OPEN/CLOSED), `createdAt`, and a relation to the `User` model.
- [ ] Run the Prisma migration (`npx prisma migrate dev` or `npm run db:push`) to update the local Docker DB.
- [ ] Write a simple script (or use Prisma Studio `npx prisma studio`) to seed a fake user and a few fake tasks.

---

## ⚙️ Task 3: The Backend Plumber (NestJS)
**Goal**: Understand how requests are handled and how dependency injection works.

### 📚 Watch & Learn
- [ ] YouTube: *"NestJS Crash Course Traversy Media"* (First 45 mins: Controllers, Services, Modules)
- [ ] YouTube: *"Dependency Injection Explained simply"*

### ✅ Tasks
- [ ] Navigate to `apps/api/src/task/`.
- [ ] Inject the `PrismaService` into the `TaskService`.
- [ ] Fix the `GET /tasks` endpoint to fetch all tasks from the database instead of returning `[]`.
- [ ] Fix the `POST /tasks` endpoint. It currently returns `501`. Extract `title` and `description` from the body and save the task via Prisma.
- [ ] Test your endpoints using Postman or cURL.

---

## 🖥️ Task 4: The Frontend Bouncer (Next.js & Better-Auth)
**Goal**: Connect the UI to the backend and secure it.

### 📚 Watch & Learn
- [ ] YouTube: *"What is a Monorepo? Turborepo explained"*
- [ ] YouTube: *"Next.js App Router Crash Course Codevolution"*
- [ ] **Read**: Official Better-Auth Documentation

### ✅ Tasks
- [ ] Navigate to `apps/web/src/app/tasks/page.tsx`.
- [ ] **Security**: Add Better-Auth server-side session checks. If a user is not logged in, redirect them to `/login`.
- [ ] **UI**: Replace the placeholder `<div>`. Build a list/table to display tasks fetched from your NestJS `GET /tasks` endpoint.
- [ ] **Forms**: Build a form to create a new task. Hook it up to your NestJS `POST /tasks` endpoint.

---

## 🦸 Task 5: The "Hero" Run
**Goal**: Prove you can take a feature from start to finish.

### ✅ Tasks
- [ ] **The Ticket**: Implement the "Close Task" feature.
- [ ] **Backend**: Update the `PATCH /tasks/:id/status` endpoint in NestJS to update a task's status in the database.
- [ ] **Frontend**: Add a "Mark as Done" button next to each task in the UI. Wire it to hit the `PATCH` endpoint and update the UI state.
- [ ] **Workflow**: Ensure your code is clean. Fetch the latest `main`, rebase your branch on top of it, and push a clean commit for review.
