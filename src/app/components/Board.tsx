import React from 'react';
import EventCard from '@/app/components/EventCard';
import HoursColumn from '@/app/components/HoursColumn';
import EventsColumn from '@/app/components/EventsColumn';

const Board: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 h-full">
      <h1 className="text-3xl font-bold mb-2">Board Dates</h1>
      <p className="text-xl text-neutral-600 mb-4">January</p>

      <div className="grid grid-cols-[0.1fr_1fr] gap-4 h-full">
        {/* Columna de horas */}
        <HoursColumn />
        {/* Columna de eventos */}
        <EventsColumn />
      </div>
    </section>
  );
};

export default Board;
