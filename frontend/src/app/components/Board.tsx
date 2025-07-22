'use client';

import React from 'react';
import { useEffect } from 'react';
import HoursColumn from '@/app/components/HoursColumn';
import EventsColumn from '@/app/components/EventsColumn';
import NewTaskBtn from '@/app/components/NewTaskBtn';
import tasks from '../tasks';

const Board: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/tasks');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error al obtener las tareas:', error);
      }
    };

    fetchData(); // Llamás a la función
  }, []);
  return (
    <section className="w-11/12 mx-auto p-4 h-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Board Dates</h1>
          <p className="text-xl text-neutral-600 mb-4">Week</p>
        </div>
        <NewTaskBtn />
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
