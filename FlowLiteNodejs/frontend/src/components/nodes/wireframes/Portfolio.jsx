import Browser from './Browser'
import { Slideshow, Grid } from './sections'
import { LuStar } from 'react-icons/lu'

const Portfolio = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <Slideshow />
      <Grid>
        <LuStar size={8}/>
      </Grid>
    </Browser>
  )
}

export default Portfolio
