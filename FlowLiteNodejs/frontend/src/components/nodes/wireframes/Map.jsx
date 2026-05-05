import Browser from './Browser'
import { Map as MapSection } from './sections'

const Map = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <MapSection />
    </Browser>
  )
}

export default Map
