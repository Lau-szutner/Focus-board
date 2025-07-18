interface Props {
  title: string;
  description: string;
  startTime: number; // en formato 24h, ej: 8 para 8AM
  endTime: number; // en formato 24h, ej: 10 para 10AM
}

const EventCard: React.FC<Props> = ({
  title,
  description,
  startTime,
  endTime,
}) => {
  const hourHeight = 100; // 1 hora = 64px, puedes ajustarlo a tu diseño
  const durationInHours = endTime - startTime;
  const height = durationInHours * hourHeight;

  return (
    <div
      className="bg-white rounded shadow px-4 flex flex-col justify-center items-start hover:bg-neutral-300 duration-400 ease-in-out"
      style={{ height }}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-neutral-500">{description}</p>
    </div>
  );
};

export default EventCard;
