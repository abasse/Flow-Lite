import { Hero3 } from './sections';
import Browser from './Browser';

const Website = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <Hero3/>
    </Browser>
  )
}

export default Website
