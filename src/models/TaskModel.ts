import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number; // duração em minutos
    startDate: number; // timestamp em milissegundos
    completeDate: number | null; // quando o timer foi completado, timestamp em milissegundos ou null
    interruptDate: number | null; // quando o timer foi interrompido, timestamp em milissegundos ou null
    type: keyof TaskStateModel['config']; // 'workTime' | 'shortBreakTime' | 'longBreakTime'
}