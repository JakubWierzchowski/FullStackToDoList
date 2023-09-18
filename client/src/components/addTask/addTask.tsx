import { Wrapper, Label, Input } from "../styles/addTasks.styles";
import { Button } from "../atoms/buttons.style";
import { AddTaskProps } from "../types/addTask.type";

function AddTask({ newTask, setNewTask, handleAddTask }: AddTaskProps) {
  return (
    <Wrapper>
      <Label>Add a New Task</Label>
      <Input
        type="text"
        placeholder="New task"
        value={newTask || ""}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button
        onClick={handleAddTask}
        disabled={!newTask || newTask.trim() === ""}
      >
        Submit
      </Button>
    </Wrapper>
  );
}

export default AddTask;
