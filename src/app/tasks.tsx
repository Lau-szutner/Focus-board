// tasks.ts
export interface Task {
  title: string;
  description: string;
  startTime: number;
  endTime: number;
}

const tasks: Task[] = [
  {
    title: 'Tarea 1',
    description: 'Una tarea muy sencilla',
    startTime: 7,
    endTime: 9,
  },
  {
    title: 'Tarea 1',
    description: 'Una tarea muy sencilla',
    startTime: 7,
    endTime: 9,
  },
  {
    title: 'Tarea 1',
    description: 'Una tarea muy sencilla',
    startTime: 7,
    endTime: 9,
  },
];

export default tasks;
