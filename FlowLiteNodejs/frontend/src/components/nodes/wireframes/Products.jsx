import Browser from './Browser'
import { ProductList } from './sections'

const Products = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <ProductList />
    </Browser>
  )
}

export default Products
