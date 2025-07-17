'use client';
import React from 'react';

const NewTaskBtn: React.FC = () => {
  function newTask(): void {}
  return (
    <button
      className="py-2 px-5 bg-neutral-50 border border-neutral-300 h-fit"
      onClick={() => newTask()}
    >
      Add tasks
    </button>
  );
};

export default NewTaskBtn;
