import Browser from './Browser'
import { LuImage } from 'react-icons/lu'

const Homepage = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <div className='bg-gray-100 flex items-center justify-center h-10 w-full'>
        <div className='flex flex-col items-center gap-0.5'>
          <div className='h-1 bg-gray-600 w-16 rounded-sm'></div>
          <div className='h-0.5 bg-gray-300 w-10 rounded-sm'></div>
        </div>
      </div>
      <div className='px-1.5 py-1 grid grid-cols-3 gap-1'>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className='flex flex-col gap-0.5'>
            <div className='bg-gray-100 flex items-center justify-center h-5 rounded-sm'>
              <LuImage className='text-gray-300' size={8} />
            </div>
            <div className='h-0.5 bg-gray-400 w-full rounded-sm'></div>
            <div className='h-0.5 bg-gray-200 w-4/5 rounded-sm'></div>
          </div>
        ))}
      </div>
    </Browser>
  )
}

export default Homepage
