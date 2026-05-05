import Browser from './Browser'
import { Video as VideoSection } from './sections'

const Video = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <VideoSection/>
    </Browser>
  )
}

export default Video
