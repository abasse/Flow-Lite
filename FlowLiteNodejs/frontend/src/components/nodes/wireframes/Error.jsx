import Browser from './Browser'
import { BigTextBlock } from './sections'

const Error = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <BigTextBlock text='404'/>
    </Browser>
  )
}

export default Error
