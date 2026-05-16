'use client'

import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { authClient } from "@/lib/auth-client";

export default function TasksPage() {

  const { data: session } = authClient.useSession();

  if(!session) {
    return (
    <div>
      <h1>Not authenticated</h1>
    </div>
    )
  }

  return (
    <div>
      Task Board Placeholder. Intern: Build the UI to list tasks, a form to
      create a new task, and a button to close a task. Fetch data from your
      NestJS API.
      <TaskList/>
      <TaskForm/>
    </div>
  );
}
