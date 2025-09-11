import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";


export function MainForm() {

  const {setState} = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null);
  
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(taskNameInput.current === null) {return};

    const taskName = taskNameInput.current.value.trim();

    if(!taskName) {
      alert('Por favor, insira um nome para a tarefa.');
      return;
    }

    //RECEBENDO O NOME DA TAREFA

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => ({
      ...prevState,
      config: {...prevState.config},
     activeTasks: newTask,
     currentCycle: 1, //Conferir
     secondsRemaining, //Conferir
     formattedSecondsRemaining: '00:00', //Conferir
     tasks: [
      ...prevState.tasks,
      newTask
     ],
    }));
  }

  return (
    <form onSubmit={handleCreateNewTask} action="" className="form">
            <div className="formRow">
             <DefaultInput id='input' type="text" labelText='task' placeholder='Digite' ref={taskNameInput}/>
            </div>

            <div className="formRow">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="formRow">
             <Cycles />
            </div>

            <div className="formRow">
              <DefaultButton icon={<PlayCircleIcon />}/>
            </div>
           </form>
  );
};