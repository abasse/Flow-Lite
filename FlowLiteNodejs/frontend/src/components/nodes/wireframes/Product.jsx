import Browser from './Browser'
import { ProductDetail } from './sections'

const Product = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <ProductDetail />
    </Browser>
  )
}

export default Product
