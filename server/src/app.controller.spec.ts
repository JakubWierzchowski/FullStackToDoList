import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService, Task } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('addTask', () => {
    it('should add a task and return the added task', () => {
      const taskToAdd: Task = { id: 1, title: 'Task 1', completed: false };
      jest.spyOn(appService, 'addTask').mockReturnValue(taskToAdd);

      const result = appController.addTask(taskToAdd);

      expect(appService.addTask).toHaveBeenCalledWith(taskToAdd);
      expect(result).toBe(taskToAdd);
    });
  });

  describe('removeTask', () => {
    it('should remove a task by id', () => {
      const taskId = 1;
      jest.spyOn(appService, 'removeTask').mockImplementation(() => undefined);

      const result = appController.removeTask(taskId);

      expect(result).toBeUndefined();
    });
  });

  describe('handleToggleTask', () => {
    it('should update a task status by id', () => {
      const taskId = 1;
      const completed = true;
      jest
        .spyOn(appService, 'updateTaskStatus')
        .mockImplementation(() => undefined);

      const result = appController.handleToggleTask(taskId, { completed });

      expect(result).toBeUndefined();
    });
  });
});
