import Browser from './Browser'
import { Table as TableSection } from './sections'

const Table = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <TableSection />
    </Browser>
  )
}

export default Table
