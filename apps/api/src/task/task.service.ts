import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
  findAll() {
    return [];
  }

  create() {
    // INTERN TASK: Extract title and description from the request body. Use Prisma to save the new task to the database.
    return null;
  }

  updateStatus() {
    // INTERN TASK: Find the task by ID and update its status (e.g., OPEN to CLOSED) in the database.
    return null;
  }
}
