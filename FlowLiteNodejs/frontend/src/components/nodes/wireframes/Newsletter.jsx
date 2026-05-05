import Browser from './Browser'
import { Footer } from './sections'

const Newsletter = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <div className='px-2 py-3 flex flex-col items-center gap-1'>
        {/* Headline */}
        <div className='h-1 bg-gray-700 w-14 rounded-sm'></div>
        {/* Description */}
        <div className='flex flex-col items-center gap-0.5 w-full'>
          <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
          <div className='h-0.5 bg-gray-200 w-4/5 rounded-sm'></div>
        </div>
        {/* Email input */}
        <div className='h-2 bg-gray-100 border border-gray-200 rounded-sm w-full mt-0.5'></div>
        {/* Submit button */}
        <div className='h-2 bg-blue-400 rounded-sm w-10'></div>
      </div>
      <Footer />
    </Browser>
  )
}

export default Newsletter
