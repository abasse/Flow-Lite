import Browser from './Browser'

const Paywall = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <div className='px-2 pt-1.5 flex flex-col gap-0.5'>
        <div className='h-1 bg-gray-700 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-8 rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm mt-0.5'></div>
        <div className='h-0.5 bg-gray-200 w-5/6 rounded-sm'></div>
      </div>
      <div className='mx-2 my-1 h-5 bg-gray-100 rounded-sm flex items-center justify-center opacity-40'>
        <div className='flex flex-col gap-0.5 w-full px-2'>
          <div className='h-0.5 bg-gray-400 w-full rounded-sm'></div>
          <div className='h-0.5 bg-gray-400 w-5/6 rounded-sm'></div>
          <div className='h-0.5 bg-gray-400 w-full rounded-sm'></div>
        </div>
      </div>
      <div className='px-2 pb-1 flex flex-col items-center gap-0.5'>
        <div className='h-0.5 bg-gray-500 w-14 rounded-sm'></div>
        <div className='h-2 bg-blue-400 rounded-sm w-12 mt-0.5'></div>
        <div className='h-0.5 bg-gray-300 w-8 rounded-sm'></div>
      </div>
    </Browser>
  )
}

export default Paywall
