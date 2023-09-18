export interface TaskTypes {
  title: string | undefined;
  id: number;
  completed: boolean;
}
export interface TasksResultProps {
  handleToggleTask: (id: number) => void;
  handleRemoveTask: (id: number) => void;
  tasks: TaskTypes[];
}

export interface TaskTitleProps {
  $completed?: boolean;
}
