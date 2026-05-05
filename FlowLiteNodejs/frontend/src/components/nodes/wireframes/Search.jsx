import Browser from './Browser'
import { SearchForm } from './sections'

const Search = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <SearchForm />
    </Browser>
  )
}

export default Search
