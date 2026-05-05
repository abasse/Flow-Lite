import Browser from './Browser'
import { Hero5 } from './sections'

const Landing2 = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <Hero5 />
    </Browser>
  )
}

export default Landing2
