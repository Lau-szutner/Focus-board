'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import HoursColumn from '@/app/components/HoursColumn';
import EventsColumn from '@/app/components/EventsColumn';
import NewTaskBtn from '@/app/components/NewTaskBtn';

import CalendarPage from './CalendarPage';

const Board: React.FC = () => {
  return (
    <section className="w-11/12 p-4 h-full">
      <CalendarPage />
    </section>
  );
};

export default Board;
