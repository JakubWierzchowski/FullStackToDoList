export interface AddTaskProps {
  newTask: string | undefined;
  setNewTask: (value: string) => void;
  handleAddTask: () => void;
}
