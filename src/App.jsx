import { useState } from "react";
import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/Tasks";
import { v4 } from "uuid";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "15 de julho as 10:00",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer Compras",
      description: "15 de julho as 15:00",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler um livro",
      description: "15 de julho as 18:00",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

/*
exemplo de states


import { useState } from "react";

function App(){
  const [message, setMessage] = useState("Olá,mundo!")
  //State (Estado)
  
return(
  <div>
  <h1>{message}</h1>
  <button onClick={() => {
    setMessage("Olá, fui clicado");
  }}>Mudar mensagem</button>
  </div>
);
}

export default App
*/
