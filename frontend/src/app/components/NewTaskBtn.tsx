'use client';
import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';

const NewTaskBtn: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="py-2 px-5 bg-[#323232] border border-neutral-300 h-fit rounded-md hover:bg-[#14FFEC] hover:text-black duration-400 ease-in-out cursor-pointer"
        onClick={toggleModal}
      >
        Add tasks
      </button>

      <AddTaskModal isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
};

export default NewTaskBtn;
