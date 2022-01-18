import styled from '@emotion/styled'

export const Wrapper = styled.div`
  .fc {
    max-width: 1440px;
    margin: 40px auto;
    padding: 0 10px;
  }
  .fc-daygrid-day-events {
    overflow: hidden;
  }
  .fc-event-main {
    overflow: hidden;
  }
  .fc-event-main {
    font-size: 12px;
  }
  .fc-list-table {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    .fc-scrollgrid  {
      font-size: 12px;
    }

    .fc-header-toolbar {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      .fc-toolbar-title {
        font-size: 1.5rem;
      }
    }
  },
`
