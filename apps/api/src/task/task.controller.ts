import { Controller, Get, Post, Patch, Param, HttpCode, HttpStatus } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.NOT_IMPLEMENTED)
  create() {
    return this.taskService.create();
  }

  @Patch(":id/status")
  @HttpCode(HttpStatus.NOT_IMPLEMENTED)
  updateStatus(@Param("id") id: string) {
    return this.taskService.updateStatus();
  }
}
