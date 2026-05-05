import Browser from './Browser'
import { ShoppingCart as ShoppingCartSection } from './sections'

const ShoppingCart = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <ShoppingCartSection />
    </Browser>
  )
}

export default ShoppingCart
