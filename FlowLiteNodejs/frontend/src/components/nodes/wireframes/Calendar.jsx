import Browser from './Browser'
import { Calendar as CalendarSection } from './sections'

const Calendar = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <CalendarSection/>
    </Browser>
  )
}

export default Calendar
