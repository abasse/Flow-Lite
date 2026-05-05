import Browser from './Browser'
import { HeroText, Stars } from './sections'

const Review = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <HeroText/>
      <Stars />
    </Browser>
  )
}

export default Review
