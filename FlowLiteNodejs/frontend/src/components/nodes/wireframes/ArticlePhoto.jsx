import Browser from './Browser'
import { Footer } from './sections'
import { LuImage } from 'react-icons/lu'

const ArticlePhoto = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      {/* Full-width image with headline overlay */}
      <div className='relative'>
        <div className='bg-gray-100 flex items-center justify-center w-full h-16'>
          <LuImage className='text-gray-400' size={18} />
        </div>
        <div className='absolute bottom-0 left-0 right-0 flex flex-col gap-0.5 px-2 pb-1.5'>
          <div className='h-0.5 bg-blue-300 w-4 rounded-sm'></div>
          <div className='h-1 bg-gray-700 w-full rounded-sm'></div>
          <div className='h-1 bg-gray-700 w-3/4 rounded-sm'></div>
          <div className='h-0.5 bg-gray-400 w-8 rounded-sm'></div>
        </div>
      </div>
      {/* Body */}
      <div className='px-2 py-1 flex flex-col gap-0.5'>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-5/6 rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-4/6 rounded-sm'></div>
      </div>
      <Footer />
    </Browser>
  )
}

export default ArticlePhoto
