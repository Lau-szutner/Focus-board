interface Props {
  title: string;
  body: string;
  start_time: number; // en formato 24h, ej: 8 para 8AM
  end_time: number; // en formato 24h, ej: 10 para 10AM
}

function parseHourString(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours + minutes / 60;
}

const EventCard: React.FC<Props> = ({ title, body, start_time, end_time }) => {
  const hourHeight = 64; // 1 hora = 64px

  // Convierte "12:30" => 12.5
  const start = parseHourString(start_time as unknown as string);
  const end = parseHourString(end_time as unknown as string);

  const durationInHours = end - start;
  const height =
    durationInHours > 0 ? durationInHours * hourHeight : hourHeight;

  return (
    <div
      className="bg-[#323232] rounded shadow px-4 flex flex-col justify-center items-start hover:bg-[#424242] duration-400 ease-in-out"
      style={{ height }}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-neutral-500">{body}</p>
    </div>
  );
};

export default EventCard;
