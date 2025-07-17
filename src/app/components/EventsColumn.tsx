import EventCard from '@/app/components/EventCard';
import { Task } from '../tasks';
interface props {
  tasks: Task[];
}
// ✅ Columna de eventos (dinámica más adelante)
const EventsColumn: React.FC<props> = ({ tasks }) => {
  console.log(tasks);
  return (
    <div className="border border-black-600 rounded-md p-4 text-sm flex flex-col gap-1 hover:bg-neutral-300">
      {tasks.map((task, index) => (
        <EventCard
          title={task.title}
          description={task.description}
          startTime={task.startTime}
          endTime={task.endTime}
        />
      ))}
    </div>
  );
};

export default EventsColumn;
