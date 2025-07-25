// Creamos un array de horas de 7 AM a 6 PM
const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

const HoursColumn: React.FC = () => {
  return (
    <div className="bg-[#323232] rounded-md p-4 border border-neutral-300 text-sm flex flex-col h-fit">
      {hours.map((hour) => (
        <div key={hour} className="h-[100px] flex items-start ">
          {hour}
        </div>
      ))}
    </div>
  );
};

export default HoursColumn;
