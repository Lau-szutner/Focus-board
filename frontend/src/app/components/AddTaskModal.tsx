import React, { useState } from 'react';
import TimePicker from './TimePicker';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

const AddTaskModal: React.FC<Props> = ({ isOpen, toggleModal }) => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    startTime: '12:00', // formato 24hs
    endTime: '13:00', // formato 24hs
  });

  // Si el modal no está abierto, no se renderiza
  if (!isOpen) return null;

  // Maneja el cambio en inputs de texto (title y body)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Maneja el cambio de los timepickers (startTime y endTime)
  const handleTimeChange = (field: 'startTime' | 'endTime', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir que el formulario recargue la página

    console.log('Formulario enviado:', formData);

    try {
      // Realiza una solicitud POST al backend con los datos del formulario
      const response = await fetch('http://localhost:3000/tasks/new-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indicamos que el cuerpo será JSON
        },
        body: JSON.stringify(formData), // Convertimos los datos del formulario en JSON
      });

      if (!response.ok) {
        throw new Error(`Error en el servidor: ${response.status}`);
      }

      const data = await response.json(); // Obtenemos la respuesta del servidor como JSON
      console.log('Tarea creada correctamente:', data);

      // Aquí podrías limpiar el formulario o cerrar el modal si lo deseas
    } catch (error) {
      console.error('Error al enviar tarea:', error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-neutral-200/70 flex items-center justify-center z-50"
      onClick={toggleModal}
    >
      <div
        className="bg-[#323232] grid gap-4 p-4 rounded-md place-items-center justify-evenly z-100"
        onClick={(e) => e.stopPropagation()} // Evita que se cierre al clickear dentro del modal
      >
        <h2 className="text-2xl text-white">New task</h2>

        {/* Formulario */}
        <form
          className="p-4 rounded grid gap-4 w-full max-w-sm"
          onSubmit={handleSubmit}
        >
          <label htmlFor="title" className="text-white">
            Title
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
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
              value={formData.body}
              onChange={handleInputChange}
              className="w-full p-2 rounded border border-neutral-300"
              placeholder="Your task description"
            />
          </label>

          <TimePicker
            label="Select start time"
            value={formData.startTime}
            onChange={(value) => handleTimeChange('startTime', value)}
          />

          <TimePicker
            label="Select end time"
            value={formData.endTime}
            onChange={(value) => handleTimeChange('endTime', value)}
          />

          <button
            type="submit"
            className="bg-green-500 text-white font-bold w-full py-2 rounded-md"
          >
            Save Task
          </button>
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
