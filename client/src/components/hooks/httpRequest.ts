import { useState, useEffect } from "react";
import { TaskTypes } from "../types/taskResult.type";
import { toast } from "react-toastify";

export const useHttpRequest = () => {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  const [newTask, setNewTask] = useState<string | undefined>(undefined);
  const [newAddTask, setnewAddTask] = useState<TaskTypes>();

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("There was an error retrieving data", error);
    }
  };

  const handleAddTask = () => {
    const newTaskObject = {
      title: newTask,
      id: Date.now(),
      completed: false,
    };
    if (newTask?.trim() !== "") {
      fetch(`${process.env.REACT_APP_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTaskObject),
      })
        .then((response) => {
          if (response.ok) {
            toast.success(`New task added`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            fetchData();
            setNewTask("");
            setnewAddTask(newTaskObject);
          } else {
            throw new Error("Unable to add task");
          }
        })
        .catch((error) => {
          toast.error(
            `An error occurred while adding a task: ${error.message}`,
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        });
    }
  };

  const handleRemoveTask = (id: number) => {
    fetch(`${process.env.REACT_APP_API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast.success(`Task deleted`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          fetchData();
        } else {
          throw new Error("Unable to delete the task");
        }
      })
      .catch((error) => {
        toast.error(`Error while deleting the task: ${error.message}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleToggleTask = (id: number) => {
    const updatedTasks = [...tasks];
    const task = updatedTasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;

      fetch(`${process.env.REACT_APP_API}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: task.completed }),
      })
        .then((response) => {
          if (response.ok) {
            if (task.completed) {
              toast.success(`Congratulations, you completed the task!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }

            fetchData();
            setTasks(updatedTasks);
          } else {
            throw new Error("Unable to delete the task");
          }
        })

        .catch((error) => {
          console.error("Error while changing the task status", error);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    newAddTask,
    handleAddTask,
    handleRemoveTask,
    handleToggleTask,
    fetchData,
    tasks,
    newTask,
    setNewTask,
  };
};
