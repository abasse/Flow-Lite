import Browser from './Browser'
import { Footer } from './sections'
import { LuImage } from 'react-icons/lu'

const OpulenceHero = () => {
  return (
    <div className='relative mx-0'>
      {/* Full-width square image */}
      <div className='bg-gray-100 flex items-center justify-center w-full' style={{aspectRatio: '1/1'}}>
        <LuImage className='text-gray-400' size={20} />
      </div>
      {/* Title overlay centered at bottom of image */}
      <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center gap-0.5 pb-1.5'>
        <div className='h-1 bg-gray-700 w-10 rounded-sm'></div>
        <div className='h-0.5 bg-gray-500 w-7 rounded-sm'></div>
      </div>
    </div>
  )
}

const OpulenceBody = () => {
  return (
    <div className='px-2 py-1.5 flex flex-col gap-0.5'>
      <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
      <div className='h-0.5 bg-gray-200 w-5/6 rounded-sm'></div>
      <div className='h-0.5 bg-gray-200 w-4/6 rounded-sm'></div>
    </div>
  )
}

const Opulence = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <OpulenceHero />
      <OpulenceBody />
      <Footer />
    </Browser>
  )
}

export default Opulence
