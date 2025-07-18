import React from 'react';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

const AddTaskModal: React.FC<Props> = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-white border p-4 rounded shadow-md">
      <button onClick={toggleModal} className="mb-4 text-red-500">
        Close
      </button>
      <form className="bg-blue-500 p-4 rounded">
        <label htmlFor="title" className="block text-white mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full p-2 rounded"
        />
      </form>
    </div>
  );
};

export default AddTaskModal;
