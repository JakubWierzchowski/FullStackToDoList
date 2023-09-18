import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './types/task.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tasks')
  getTasks(): Task[] {
    return this.appService.getTasks();
  }

  @Post('tasks')
  addTask(@Body() Task: Task): Task {
    return this.appService.addTask(Task);
  }

  @Delete('tasks/:id')
  removeTask(@Param('id') id: number): void {
    this.appService.removeTask(id);
  }

  @Patch('tasks/:id')
  handleToggleTask(@Param('id') id: number, @Body() task: any): void {
    this.appService.updateTaskStatus(id, task.completed);
  }
}
