interface Props {
  title: string;
  body: string;
  start_time: number; // en formato 24h, ej: 8 para 8AM
  end_time: number; // en formato 24h, ej: 10 para 10AM
}

const EventCard: React.FC<Props> = ({ title, body, start_time, end_time }) => {
  const hourHeight = 100; // 1 hora = 64px, puedes ajustarlo a tu diseño
  const durationInHours = Number(end_time) - Number(start_time);
  const height = durationInHours * hourHeight;
  const safeHeight = height > 0 ? height : hourHeight;

  console.log({ start_time, end_time, durationInHours, height });

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
