import Browser from './Browser'
import { Footer } from './sections'
import { LuSearch } from 'react-icons/lu'
import { LuImage } from 'react-icons/lu'

const NoResults = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      {/* Error message */}
      <div className='px-2 py-2 flex flex-col items-center gap-0.5'>
        <LuSearch className='text-gray-300 mb-0.5' size={14} />
        <div className='h-1 bg-gray-500 w-12 rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-14 rounded-sm'></div>
        {/* Search bar */}
        <div className='h-2 bg-gray-100 border border-gray-200 rounded-sm w-full mt-1'></div>
      </div>
      {/* Suggested articles */}
      <div className='px-2 pb-1 flex flex-col gap-0.5'>
        <div className='h-0.5 bg-gray-400 w-8 rounded-sm mb-0.5'></div>
        {[1,2].map(i => (
          <div key={i} className='flex items-center gap-1'>
            <div className='bg-gray-100 flex items-center justify-center w-6 h-4 rounded-sm flex-shrink-0'>
              <LuImage className='text-gray-300' size={6} />
            </div>
            <div className='h-0.5 bg-gray-300 flex-1 rounded-sm'></div>
          </div>
        ))}
      </div>
      <Footer />
    </Browser>
  )
}

export default NoResults
