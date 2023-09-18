import "./App.css";
import AddTask from "./components/addTask/addTask";
import { useHttpRequest } from "./components/hooks/httpRequest";
import { MainWrapper, Title } from "./components/styles/task.styles";
import TaskResult from "./components/taskResult/tasksResult";

function App() {
  const {
    handleAddTask,
    handleRemoveTask,
    handleToggleTask,
    tasks,
    newTask,
    setNewTask,
  } = useHttpRequest();

  return (
    <MainWrapper>
      <Title>Task List: </Title>
      <AddTask
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
        newTask={newTask}
      />
      {tasks.length === 0 ? (
        <h2>Nie dodano jeszcze żadnych zadań</h2>
      ) : (
        <TaskResult
          handleRemoveTask={handleRemoveTask}
          handleToggleTask={handleToggleTask}
          tasks={tasks}
        />
      )}
    </MainWrapper>
  );
}

export default App;
