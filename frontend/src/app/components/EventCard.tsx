interface Props {
  title: string;
  body: string;
  startTime: number; // en formato 24h, ej: 8 para 8AM
  endTime: number; // en formato 24h, ej: 10 para 10AM
}

const EventCard: React.FC<Props> = ({ title, body, startTime, endTime }) => {
  const hourHeight = 100; // 1 hora = 64px, puedes ajustarlo a tu diseño
  const durationInHours = Number(endTime) - Number(startTime);
  const height = durationInHours * hourHeight;
  const safeHeight = height > 0 ? height : hourHeight;

  console.log({ startTime, endTime, durationInHours, height });

  return (
    <div
      className="bg-[#323232] rounded shadow px-4 flex flex-col justify-center items-start hover:bg-[#424242] duration-400 ease-in-out"
      style={{ height: safeHeight }}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-neutral-500">{body}</p>
    </div>
  );
};

export default EventCard;
