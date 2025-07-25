// Creamos un array de horas de 7 AM a 6 PM
const hours = Array.from({ length: 12 }, (_, i) => `${7 + i} AM`);

const HoursColumn: React.FC = () => {
  return (
    <div className="bg-[#323232] rounded-md p-4 border border-neutral-300 text-sm flex flex-col">
      {hours.map((hour) => (
        <div key={hour} className="h-[100px] flex items-start">
          {hour}
        </div>
      ))}
    </div>
  );
};

export default HoursColumn;
