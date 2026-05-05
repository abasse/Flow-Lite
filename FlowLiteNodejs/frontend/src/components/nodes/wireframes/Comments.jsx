import Browser from './Browser'
import { Comments as CommentsSection } from './sections'

const Comments = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <CommentsSection/>
    </Browser>
  )
}

export default Comments
