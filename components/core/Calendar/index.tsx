import FullCalendar, { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import zhTwLocale from "@fullcalendar/core/locales/zh-tw";
import listPlugin from "@fullcalendar/list";
import { ReactChild, ReactFragment, ReactPortal, useRef, useState } from "react";
import Styled from "@emotion/styled";

export const Wrapper = Styled.div`
  .fc {
    max-width: 1440px;
    margin: 40px auto;
    padding: 0 10px;
  }
`

export function createEventId() {
  return String(eventGuid++);
}

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
];

const Calendar = () => {
  const calendarRef = useRef(null);
  const [config, setConfig] = useState({
    weekendsVisible: true,
    currentEvents: [],
  });

  const handleDateSelect = (selectInfo: { view: { calendar: any; }; startStr: any; endStr: any; allDay: any; }) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  function renderEventContent(eventInfo: { timeText: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; event: { title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }; }) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  const handleEventClick = (clickInfo: { event: { title: any; remove: () => void; }; }) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events: any) => {
    setConfig((prev) => {
      return { ...prev, currentEvents: events };
    });
  };

  return (
    <Wrapper>
      <FullCalendar
        height="auto"
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right:
            "timeGridDay,timeGridWeek,dayGridMonth listDay,listWeek,listMonth",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={config.weekendsVisible}
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        locale={zhTwLocale}
        views={{
          listDay: { buttonText: "列表(天)" },
          listWeek: { buttonText: "列表(週)" },
          listMonth: { buttonText: "列表(月)" },
          eventClassNames: {viewClassNames: '123'}
        }}
        /* you can update a remote database when these fire:
              eventAdd={function(){}}
              eventChange={function(){}}
              eventRemove={function(){}}
              */
      />
    </Wrapper>
  );
};

export default Calendar;
