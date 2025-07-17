import EventCard from '@/app/components/EventCard';

// ✅ Columna de eventos (dinámica más adelante)
const EventsColumn: React.FC = () => {
  return (
    <div className="bg-neutral-100 rounded-md p-4 text-sm flex flex-col gap-1 hover:bg-neutral-300">
      {}
      <EventCard
        title="Evento"
        description="Lorem LOREMDSADSAS"
        startTime={7}
        endTime={9}
      ></EventCard>
      <EventCard
        title="Evento"
        description="Lorem LOREMDSADSAS"
        startTime={9}
        endTime={10}
      ></EventCard>
    </div>
  );
};

export default EventsColumn;
