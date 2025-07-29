import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // El componente principal
import dayGridPlugin from '@fullcalendar/daygrid'; // Vista mes
import timeGridPlugin from '@fullcalendar/timegrid'; // Vista semana/día con horarios
import interactionPlugin from '@fullcalendar/interaction'; // Para interacciones (drag, click)
import esLocale from '@fullcalendar/core/locales/es'; // Idioma español

export default function CalendarPage() {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Estudiar React',
      start: '2025-07-29T08:00:00',
      end: '2025-07-29T10:00:00',
    },
    {
      id: '2',
      title: 'Reunión Zoom',
      start: '2025-07-29T11:00:00',
      end: '2025-07-29T12:00:00',
    },
    {
      id: '3',
      title: 'Reunión Zoom',
      start: '2025-07-28T11:00:00',
      end: '2025-07-28T12:00:00',
    },
  ]);

  // Opcional: manejar click en evento
  interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    end: string;
  }

  interface EventClickInfo {
    event: {
      title: string;
      // Puedes agregar más propiedades si las necesitas
    };
  }

  const handleEventClick = (clickInfo: EventClickInfo) => {
    alert(`Evento: ${clickInfo.event.title}`);
  };

  return (
    <div style={{ padding: 20 }} className="h-screen">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay" // Vista inicial día con horas
        locale={esLocale} // Idioma español
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        editable={true} // Para poder arrastrar eventos
        selectable={true} // Para seleccionar rango horario
        selectMirror={true}
        dayMaxEvents={true}
        eventClick={handleEventClick}
        height="100%"
      />
    </div>
  );
}
