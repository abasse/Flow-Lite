import Browser from './Browser'
import { LuUser } from 'react-icons/lu'

const NewsComments = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <div className='px-2 pt-1.5 pb-1 border-b border-gray-100 flex flex-col gap-0.5'>
        <div className='h-1 bg-gray-600 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-8 rounded-sm'></div>
      </div>
      <div className='px-2 pt-1'>
        <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
      </div>
      <div className='px-2 py-0.5 flex flex-col gap-1'>
        {[1,2,3].map(i => (
          <div key={i} className='flex items-start gap-1'>
            <LuUser className='text-gray-300 flex-shrink-0' size={7} />
            <div className='flex flex-col gap-0.5 flex-1'>
              <div className='h-0.5 bg-gray-400 w-6 rounded-sm'></div>
              <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
              <div className='h-0.5 bg-gray-200 w-4/5 rounded-sm'></div>
            </div>
          </div>
        ))}
      </div>
      <div className='px-2 pb-1'>
        <div className='h-3 bg-gray-100 border border-gray-200 rounded-sm w-full'></div>
      </div>
    </Browser>
  )
}

export default NewsComments
