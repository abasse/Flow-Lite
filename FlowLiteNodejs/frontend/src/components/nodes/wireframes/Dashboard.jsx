import Browser from './Browser'
import { Charts } from './sections'

const Dashboard = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <Charts />
    </Browser>
  )
}

export default Dashboard
