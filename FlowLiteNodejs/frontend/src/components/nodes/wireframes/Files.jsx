import Browser from './Browser'
import { FilesSection } from './sections'

const Files = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <FilesSection />
    </Browser>
  )
}

export default Files
