import EventCard from '@/app/components/EventCard';
import { Task } from '../tasks';
interface props {
  tasks: Task[];
}
// ✅ Columna de eventos (dinámica más adelante)
const EventsColumn: React.FC<props> = ({ tasks }) => {
  return (
    <div className="border border-neutral-300 bg-[#323232] rounded-md p-4 text-sm flex flex-col gap-1 ">
      {tasks.map((task, index) => (
        <EventCard
          key={index}
          title={task.title}
          body={task.body}
          start_time={task.start_time}
          end_time={task.end_time}
        />
      ))}
    </div>
  );
};

export default EventsColumn;
