import Browser from './Browser'
import { Article } from './sections'

const Blog = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <Article />
      <Article />
      <Article />
    </Browser>
  )
}

export default Blog
