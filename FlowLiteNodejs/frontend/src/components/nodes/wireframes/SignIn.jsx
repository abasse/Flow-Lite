import Browser from "./Browser"
import { SignIn as SignUp } from "./sections"

const SignIn = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <SignUp data={data}/>
    </Browser>
  )
}

export default SignIn
