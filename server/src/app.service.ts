import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as fs from 'fs';
import { Task } from './types/task.type';

@Injectable()
export class AppService {
  private readonly dataFilePath = 'src/data/tasks.json';

  constructor() {
    if (!fs.existsSync(this.dataFilePath)) {
      fs.writeFileSync(this.dataFilePath, '[]', 'utf-8');
    }
  }

  getTasks(): Task[] {
    try {
      const data = fs.readFileSync(this.dataFilePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      throw new HttpException(
        'There was an error retrieving data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  addTask(task: Task): Task {
    const data = this.getTasks();
    data.push(task);
    fs.writeFileSync(this.dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
    return task;
  }

  removeTask(id: number | string): void {
    try {
      const idAsNumber = typeof id === 'string' ? parseInt(id) : id;
      const data = this.getTasks();
      const index = data.findIndex((Task) => Task.id === idAsNumber);
      if (index !== -1) {
        data.splice(index, 1);
        fs.writeFileSync(
          this.dataFilePath,
          JSON.stringify(data, null, 2),
          'utf-8',
        );
      } else {
        throw new HttpException(
          'Unable to delete the task',
          HttpStatus.NOT_FOUND,
        );
      }
    } catch (error) {
      throw new HttpException(
        `Error while deleting the task: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  updateTaskStatus(id: number, completed: boolean): void {
    const data = this.getTasks();
    const idAsNumber = typeof id === 'string' ? parseInt(id) : id;
    const Task = data.find((r) => r.id === idAsNumber);

    if (!Task) {
      throw new HttpException(
        `Task with the specified identifier was not found. ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    Task.completed = completed;
    fs.writeFileSync(this.dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  }
}

export { Task };
