import Browser from './Browser'
import { Survay as SurvaySection } from './sections'

const Survay = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <SurvaySection/>
    </Browser>
  )
}

export default Survay
