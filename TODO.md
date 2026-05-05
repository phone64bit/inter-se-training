# Intern Training: Task Tracker Project

Welcome! Your goal is to build out the missing pieces of our Internal Task Tracker. The core plumbing is set up, but the actual features are stubbed out.

## 🛠️ The Workflow (Rules of Engagement)
- **Fork & Branch**: Fork this repo, clone your fork, and work on a branch (e.g., `intern/task-tracker`).
- **Upstream Sync**: Add the original repo as `upstream`. Rebase against `upstream/main` frequently to stay up to date.
- **PR for Review**: Push your branch to your fork and open a Pull Request when ready for review.
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
- [ ] **Fork** this repo on GitHub, then **clone your fork**: `git clone https://github.com/<your-username>/inter-se-training.git`
- [ ] Add the original repo as upstream: `git remote add upstream https://github.com/SolveServeSolution/inter-se-training.git`
- [ ] Checkout a new branch: `git checkout -b intern/task-tracker`
- [ ] Copy `.env.example` to `.env`.
- [ ] Run `docker compose up -d` to start the PostgreSQL database.
- [ ] Run `npm install` at the root.
- [ ] Start the apps: `npm run dev:api` and `npm run dev:web`.
- [ ] **Git Practice**: Make a dummy commit on your branch, then run `git fetch upstream && git rebase upstream/main`. Push your branch to your fork and open a Pull Request against the original repo.

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
- [ ] **Workflow**: Ensure your code is clean. Fetch the latest upstream changes (`git fetch upstream && git rebase upstream/main`), resolve any conflicts, and push to your fork. Open a Pull Request for review.
