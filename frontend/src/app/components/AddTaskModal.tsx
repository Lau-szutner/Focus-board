import React, { useState } from 'react';
import TimePicker from './TimePicker';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

const AddTaskModal: React.FC<Props> = ({ isOpen, toggleModal }) => {
  const [time, setTime] = useState('12:00 PM');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-neutral-200/70 flex items-center justify-center z-50"
      onClick={toggleModal}
    >
      <div
        className="bg-[#323232] grid gap-4 p-4 rounded-md place-items-center justify-evenly z-100"
        onClick={(e) => e.stopPropagation()} // <- evita que se propague al fondo
      >
        <h2 className="text-2xl text-white">New task</h2>
        <form className="p-4 rounded grid gap-4 w-full max-w-sm">
          <label htmlFor="title" className="text-white">
            Title
            <input
              type="text"
              name="title"
              id="title"
              className="w-full p-2 rounded border border-neutral-300"
              placeholder="Your task title"
            />
          </label>
          <label htmlFor="body" className="text-white">
            Description
            <input
              type="text"
              name="body"
              id="body"
              className="w-full p-2 rounded border border-neutral-300"
              placeholder="Your task description"
            />
          </label>

          <TimePicker label="Select time" value={time} onChange={setTime} />
        </form>

        <button
          onClick={toggleModal}
          className="bg-red-500 text-white font-bold w-8/12 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
