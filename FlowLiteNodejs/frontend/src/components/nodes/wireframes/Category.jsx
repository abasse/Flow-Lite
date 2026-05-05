import Browser from './Browser'
import { LuImage } from 'react-icons/lu'

const Category = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <div className='px-2 pt-1 pb-0.5 border-b border-gray-200'>
        <div className='h-1 bg-gray-700 w-8 rounded-sm'></div>
      </div>
      <div className='px-2 py-1 flex flex-col gap-1'>
        {[1,2,3,4].map(i => (
          <div key={i} className='flex items-start gap-1'>
            <div className='bg-gray-100 flex items-center justify-center w-8 h-5 rounded-sm flex-shrink-0'>
              <LuImage className='text-gray-300' size={8} />
            </div>
            <div className='flex flex-col gap-0.5 flex-1'>
              <div className='h-0.5 bg-gray-500 w-full rounded-sm'></div>
              <div className='h-0.5 bg-gray-200 w-4/5 rounded-sm'></div>
              <div className='h-0.5 bg-gray-200 w-3/5 rounded-sm'></div>
            </div>
          </div>
        ))}
      </div>
    </Browser>
  )
}

export default Category
