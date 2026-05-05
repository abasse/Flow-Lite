import Browser from './Browser'

const Article = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <div className='px-2 pt-1.5 flex flex-col gap-0.5'>
        <div className='h-0.5 bg-blue-300 w-4 rounded-sm'></div>
        <div className='h-1 bg-gray-700 w-full rounded-sm'></div>
        <div className='h-1 bg-gray-700 w-4/5 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-8 rounded-sm mt-0.5'></div>
      </div>
      <div className='px-2 py-1 flex flex-col gap-0.5'>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-5/6 rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-4/6 rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-200 w-5/6 rounded-sm'></div>
      </div>
    </Browser>
  )
}

export default Article
