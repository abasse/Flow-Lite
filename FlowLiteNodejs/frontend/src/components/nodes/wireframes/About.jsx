import Browser from './Browser'
import { Hero4 } from './sections'

const About = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <Hero4 />
    </Browser>
  )
}

export default About
