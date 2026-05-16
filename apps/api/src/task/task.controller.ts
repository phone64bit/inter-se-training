import { Controller, Get, Post, Patch, Param, HttpCode, HttpStatus, Body } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Session, UserSession, AllowAnonymous, OptionalAuth } from '@thallesp/nestjs-better-auth';

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(@Session() session: UserSession) {
    return this.taskService.findAll({userId: session.user.id});
  }

  @Post()
  create(@Body() taskData: { title: string; description: string },
         @Session() session: UserSession) {
    const { title, description } = taskData;
    return this.taskService.create({
      title,
      description,
      status: "OPEN",
      user: {
        connect: {
          id: session.user.id
        }
      }
    });
  }

  @Patch(":id/status")
  updateStatus(@Param("id") id: number,
               @Body() taskData: { status: string; }) {
    return this.taskService.updateStatus({id, data: taskData});
  }
}
