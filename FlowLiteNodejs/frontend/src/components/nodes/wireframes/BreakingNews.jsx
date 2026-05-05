import Browser from './Browser'

const BreakingNews = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <div className='bg-red-400 px-2 py-0.5 flex items-center gap-1'>
        <div className='h-0.5 bg-white w-5 rounded-sm'></div>
        <div className='h-0.5 bg-red-200 w-10 rounded-sm'></div>
      </div>
      <div className='px-2 pt-1 flex flex-col gap-1.5'>
        {[1,2,3].map(i => (
          <div key={i} className='flex flex-col gap-0.5'>
            <div className='h-1 bg-gray-600 w-full rounded-sm'></div>
            <div className='h-0.5 bg-gray-300 w-8 rounded-sm'></div>
          </div>
        ))}
      </div>
    </Browser>
  )
}

export default BreakingNews
