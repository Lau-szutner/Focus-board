import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

const AddTaskModal: React.FC<Props> = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-neutral-200/70 flex items-center justify-center z-50">
      <div className="bg-white grid gap-4 p-4 rounded-md place-items-center justify-evenly">
        <h2 className="text-2xl">New task</h2>
        <form className="p-4 rounded grid gap-4">
          <label htmlFor="title" className="">
            Title
            <input
              type="text"
              name="title"
              id="title"
              className="w-full p-2 rounded border border-neutral-300"
              placeholder="Your task title"
            />
          </label>
          <label htmlFor="title" className="">
            Description
            <input
              type="text"
              name="body"
              id="body"
              className="w-full p-2 rounded border border-neutral-300"
              placeholder="Your task description"
            />
          </label>
          <label htmlFor="title" className="">
            Hours
            <input
              type="text"
              name="title"
              id="title"
              className="w-full p-2 rounded border border-neutral-300"
              placeholder="Your task title"
            />
          </label>
        </form>
        <button
          onClick={toggleModal}
          className="bg-red-500 font-bold w-8/12 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
