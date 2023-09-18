import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddInput from "./components/addTask/addTask";
import TaskResult from "./components/taskResult/tasksResult";

let mockedSetTodo: jest.Mock;
let mockedHandleRemoveTask: jest.Mock;
let mockedHandleToggleTask: jest.Mock;

beforeEach(() => {
  mockedSetTodo = jest.fn();
  mockedHandleRemoveTask = jest.fn();
  mockedHandleToggleTask = jest.fn();
});

describe("AddInput", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <AddInput
        newTask={""}
        setNewTask={mockedSetTodo}
        handleAddTask={mockedSetTodo}
      />
    );
  });

  it("should render input element", () => {
    const inputElement = screen.getByPlaceholderText("New task");
    fireEvent.change(inputElement, { target: { value: "New task" } });
    expect(inputElement).toBeInTheDocument();
  });

  it("should be empty after sending", async () => {
    const inputElement = screen.getByPlaceholderText(
      "New task"
    ) as HTMLInputElement;
    const buttonElement = screen.getByRole("button", { name: "Submit" });
    fireEvent.change(inputElement, { target: { value: "New task" } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(inputElement.value).toBe("");
    });
  });

  it("should call handleAddTask with the new task", async () => {
    const inputElement = screen.getByPlaceholderText("New task");
    const buttonElement = screen.getByRole("button", { name: "Submit" });
    const newTaskValue = "New Task";

    fireEvent.change(inputElement, { target: { value: newTaskValue } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedSetTodo).toHaveBeenCalledWith(newTaskValue);
    });
  });
});

describe("TaskResult", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <TaskResult
        handleRemoveTask={mockedHandleRemoveTask}
        tasks={[{ id: 1, title: "Task 1", completed: false }]}
        handleToggleTask={mockedHandleToggleTask}
      />
    );
  });

  it("should call handleRemoveTask when Delete button is clicked", () => {
    const button = screen.getByText("Delete");
    fireEvent.click(button);

    expect(mockedHandleRemoveTask).toHaveBeenCalledTimes(1);
    expect(mockedHandleRemoveTask).toHaveBeenCalledWith(1);
  });

  it("should call handleToggleTask when checkbox is clicked", () => {
    const checkbox = screen.getByTestId("toggle");
    userEvent.click(checkbox);

    expect(mockedHandleToggleTask).toHaveBeenCalledTimes(1);
    expect(mockedHandleToggleTask).toHaveBeenCalledWith(1);
  });
});
