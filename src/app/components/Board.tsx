import React from 'react';

const hours = Array.from({ length: 12 }, (_, i) => `${7 + i} AM`);

const Board: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 h-full">
      <h1 className="text-3xl font-bold mb-2">Board Dates</h1>
      <p className="text-xl text-neutral-600 mb-4">January</p>

      <div className="grid grid-cols-[0.1fr_1fr] gap-4 place-items-start h-full">
        {/* Contenido del calendario */}
        <Hours></Hours>
        <div className="bg-neutral-200 rounded-md p-4 h-full min-h-[500px] w-full grid">
          {/* Aquí irán los bloques de eventos */}
        </div>
      </div>
    </section>
  );
};

export default Board;

export const Hours: React.FC = () => {
  return (
    <div className="bg-neutral-200 rounded-md p-4 space-y-4 text-sm w-full h-full">
      {hours.map((hour) => (
        <div key={hour} className="grid gap-5 h-20">
          {hour}
        </div>
      ))}
    </div>
  );
};
