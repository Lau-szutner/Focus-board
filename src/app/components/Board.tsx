import React from 'react';

import HoursColumn from '@/app/components/HoursColumn';
import EventsColumn from '@/app/components/EventsColumn';
import tasks from '../tasks';

const Board: React.FC = () => {
  function newTask(): void {
    // lógica aquí
  }

  return (
    <section className="w-11/12 mx-auto p-4 h-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Board Dates</h1>
          <p className="text-xl text-neutral-600 mb-4">January</p>
        </div>
        <button
          className="py-2 px-5 bg-neutral-50 border border-neutral-300 h-fit"
          onClick={() => newTask()}
        >
          Add tasks
        </button>
      </div>

      <div className="grid grid-cols-[0.1fr_1fr] gap-4 h-full">
        {/* Columna de horas */}
        <HoursColumn />
        {/* Columna de eventos */}
        <EventsColumn tasks={tasks} />
      </div>
    </section>
  );
};

export default Board;
