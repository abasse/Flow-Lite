import Browser from './Browser'

const XmlStructure = () => {
  return (
    <div className='p-2 font-mono'>
      <div className='text-gray-400' style={{fontSize: '5px', lineHeight: '7px'}}>
        <div className='text-blue-300'>&lt;root&gt;</div>
        <div className='pl-2'>
          <div className='text-blue-300'>&lt;element <span className='text-yellow-400'>id</span>=<span className='text-green-400'>"1"</span>&gt;</div>
          <div className='pl-2'>
            <div className='flex gap-1 items-center'>
              <div className='h-px bg-gray-200 w-6 rounded-sm'></div>
            </div>
            <div className='flex gap-1 items-center mt-0.5'>
              <div className='h-px bg-gray-200 w-4 rounded-sm'></div>
            </div>
          </div>
          <div className='text-blue-300'>&lt;/element&gt;</div>
          <div className='text-blue-300 mt-0.5'>&lt;element <span className='text-yellow-400'>id</span>=<span className='text-green-400'>"2"</span>&gt;</div>
          <div className='pl-2'>
            <div className='text-blue-300'>&lt;child&gt;</div>
            <div className='pl-2'>
              <div className='flex gap-1 items-center'>
                <div className='h-px bg-gray-200 w-5 rounded-sm'></div>
              </div>
            </div>
            <div className='text-blue-300'>&lt;/child&gt;</div>
          </div>
          <div className='text-blue-300'>&lt;/element&gt;</div>
        </div>
        <div className='text-blue-300'>&lt;/root&gt;</div>
      </div>
    </div>
  )
}

const Xml = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <XmlStructure />
    </Browser>
  )
}

export default Xml
