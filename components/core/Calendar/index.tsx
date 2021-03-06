import FullCalendar, { formatDate } from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import zhTwLocale from '@fullcalendar/core/locales/zh-tw'
import listPlugin from '@fullcalendar/list'
import { ReactChild, ReactFragment, ReactPortal, useRef, useState, useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '@/libs/base-fetcher'
import dayjs from 'dayjs'
import { Wrapper } from './Styled'

export function createEventId() {
  return String(eventGuid++)
}

let eventGuid = 0
// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
// export const INITIAL_EVENTS = [
//   {
//     id: createEventId(),
//     title: 'All-day event',
//     start: todayStr,
//   },
//   {
//     id: createEventId(),
//     title: 'Timed event',
//     start: todayStr + 'T12:00:00',
//   },
//   // {
//   //   id: createEventId(),
//   //   title: 'new',
//   //   start: '2022-01-17T07:00:00+08:00',
//   //   end: '2022-01-18T07:30:00+08:00',
//   // },
//   {
//     id: createEventId(),
//     title: 'new',
//     start: '2022-01-17',
//   },
// ]

const Calendar = () => {
  // let dev = process.env.NODE_ENV !== 'production'

  const { data } = useSWR<any>(['/api/reservation'], async (url) => {
    const data = await fetcher(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (data.status === 200 && data?.data) {
      return data?.data.map((_data: any) => {
        return {
          ..._data,
          title: `${_data.name}-${_data.medicalRecords} ${_data.remark}`,
        }
      })
    }
    return {}
  })

  const calendarRef = useRef(null)
  const [event, setEvent] = useState(data)
  const [config, setConfig] = useState({
    weekendsVisible: true,
    currentEvents: [],
  })

  const handleDateSelect = (selectInfo: { view: { calendar: any }; startStr: any; endStr: any; allDay: any }) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }

  // end: {
  //   $timestamp: '1642462200000'
  // }
  // firstVisit: true
  // id: '666'
  // name: '?????????'
  // remark: '????????????'
  // start: {
  //   $timestamp: '1642348800000'
  // }
  // telephone: '0968887996'

  function renderEventContent(eventInfo: {
    timeText: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
    event: {
      title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
    }
  }) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  const handleEventClick = (clickInfo: { event: { title: any; remove: () => void } }) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events: any) => {
    setConfig((prev) => {
      return { ...prev, currentEvents: events }
    })
  }

  // const parseDate = (timestamp: string | number | Date | dayjs.Dayjs | null | undefined) => {
  //   return timestamp && dayjs(timestamp).format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')
  // }

  useEffect(() => {
    if (data?.length) {
      setEvent(data)
    }
  }, [data])

  // let matchList = [
  //   {
  //     id: '1',
  //     title: '???????????????',
  //     start: '2022-01-18 13:22:05',
  //     end: '2022-01-18 15:38:05',
  //     repeatExecute: false,
  //   },
  //   {
  //     id: '2',
  //     title: '???????????????',
  //     start: '2022-01-17 09:45:23',
  //     end: '2022-01-17 15:10:23',
  //     repeatExecute: false,
  //   },
  //   {
  //     id: '3',
  //     name: '???????????????',
  //     startTime: '2019-12-07 15:37:18',
  //     endTime: '2019-12-07 19:43:18',
  //     repeatExecute: false,
  //   },
  //   {
  //     id: '4',
  //     name: '???????????????',
  //     startTime: '2019-12-07 14:49:05',
  //     endTime: '2019-12-08 03:15:05',
  //     repeatExecute: false,
  //   },
  // ]

  return (
    <Wrapper>
      {event && (
        <FullCalendar
          height="auto"
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridDay,timeGridWeek,dayGridMonth listDay,listWeek,listMonth',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={config.weekendsVisible}
          // initialEvents={matchList} // alternatively, use the `events` setting to fetch from a feed
          initialEvents={event} // alternatively, use the `events` setting to fetch from a feed
          // events={matchList}
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          locale={zhTwLocale}
          views={{
            listDay: { buttonText: '??????(???)' },
            listWeek: { buttonText: '??????(???)' },
            listMonth: { buttonText: '??????(???)' },
            eventClassNames: { viewClassNames: '123' },
          }}
          /* you can update a remote database when these fire:
                  eventAdd={function(){}}
                  eventChange={function(){}}
                  eventRemove={function(){}}
                  */
        />
      )}
    </Wrapper>
  )
}

export default Calendar
