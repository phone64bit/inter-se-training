import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma, Task } from "@prisma/client";

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async findAll({userId}: {userId: string}) {
    return this.prisma.task.findMany({
      where: { userId }
    });
  }

  async create(data: Prisma.TaskCreateInput): Promise<Task> {
    // INTERN TASK: Extract title and description from the request body. Use Prisma to save the new task to the database.
    return this.prisma.task.create({
      data,
      
    });
  }

  async updateStatus({id, data}: {id: number, data: { status: string }}) {
    // INTERN TASK: Find the task by ID and update its status (e.g., OPEN to CLOSED) in the database.
    return this.prisma.task.update({
      where: { id: Number(id) },
      data: {
        status: data.status
      }
    });
  }
}
