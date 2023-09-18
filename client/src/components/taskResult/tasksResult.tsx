import {
  TaskListContainer,
  TaskTitle,
  TaskContainer,
  Input,
  DeleteCheckboxContainer,
} from "../styles/taskResult.style";
import { Button } from "../atoms/buttons.style";
import { TasksResultProps } from "../types/taskResult.type";

function TaskResult({
  tasks,
  handleToggleTask,
  handleRemoveTask,
}: TasksResultProps) {
  return (
    <TaskListContainer>
      {tasks.map((task, index) => (
        <TaskContainer key={index}>
          <TaskTitle data-testid="taskTitle" $completed={task.completed}>
            {task.title}
          </TaskTitle>
          <DeleteCheckboxContainer>
            <Input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              data-testid="toggle"
            />
            <Button
              $delete="true"
              onClick={() => handleRemoveTask(task.id)}
              name="Delete"
            >
              Delete
            </Button>
          </DeleteCheckboxContainer>
        </TaskContainer>
      ))}
    </TaskListContainer>
  );
}

export default TaskResult;
