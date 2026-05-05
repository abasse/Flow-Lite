import Browser from './Browser'
import { Frame, Footer } from './sections'

const PageBody = () => {
  return (
    <div className='flex flex-col items-center gap-0.5 px-2 py-1'>
      <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
      <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
      <div className='h-0.5 bg-gray-100 w-5/6 rounded-sm'></div>
      <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
      <div className='h-0.5 bg-gray-100 w-4/6 rounded-sm'></div>
    </div>
  )
}

const Page = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <div className='px-2 pt-1'>
        <div className='h-1 bg-gray-300 w-10 rounded-sm'></div>
      </div>
      <Frame />
      <PageBody />
      <Footer />
    </Browser>
  )
}

export default Page
