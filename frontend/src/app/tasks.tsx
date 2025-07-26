// tasks.ts
export interface Task {
  title: string;
  body: string;
  start_time: number;
  end_time: number;
}

const tasks: Task[] = [];

export default tasks;
