import Browser from './Browser'
import { Download as DownloadSection } from './sections'

const Download = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <DownloadSection/>
    </Browser>
  )
}

export default Download
