'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import HoursColumn from '@/app/components/HoursColumn';
import EventsColumn from '@/app/components/EventsColumn';
import NewTaskBtn from '@/app/components/NewTaskBtn';

const Board: React.FC = () => {
  // const [tasks, setTasks] = useState<any[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:3000/tasks');
  //       const data = await response.json();
  //       setTasks(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error al obtener las tareas:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //Usar en caso de trabajar en Codespaces
  const tasks = [
    {
      title: 'Tarea num1',
      body: 'Esta es la tarea numero 1',
      startTime: '7',
      endTime: '9',
    },
    {
      title: 'Tarea num2',
      body: 'Esta es la tarea numero 2',
      startTime: '7',
      endTime: '9',
    },
    {
      title: 'Tarea num3',
      body: 'Esta es la tarea numero 3',
      startTime: '7',
      endTime: '9',
    },
  ];

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
