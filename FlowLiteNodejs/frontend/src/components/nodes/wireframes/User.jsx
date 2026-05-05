import Browser from './Browser'
import { User as UserSection } from './sections'

const User = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <UserSection/>
    </Browser>
  )
}

export default User
