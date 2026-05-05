import Browser from './Browser'
import { Footer } from './sections'
import { LuUser } from 'react-icons/lu'

const OpinionArticle = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      {/* Author row */}
      <div className='px-2 pt-1.5 flex items-center gap-1'>
        <div className='w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0'>
          <LuUser className='text-gray-400' size={8} />
        </div>
        <div className='h-0.5 bg-gray-300 w-10 rounded-sm'></div>
      </div>
      {/* Headline */}
      <div className='px-2 pt-1 flex flex-col gap-0.5'>
        <div className='h-1 bg-gray-700 w-full rounded-sm'></div>
        <div className='h-1 bg-gray-700 w-4/5 rounded-sm'></div>
      </div>
      {/* Body */}
      <div className='px-2 py-1 flex flex-col gap-0.5'>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-5/6 rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-4/6 rounded-sm'></div>
      </div>
      <Footer />
    </Browser>
  )
}

export default OpinionArticle
