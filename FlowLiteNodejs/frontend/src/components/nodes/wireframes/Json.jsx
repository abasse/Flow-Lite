import Browser from './Browser'

const JsonStructure = () => {
  return (
    <div className='p-2 font-mono'>
      <div className='text-gray-400' style={{fontSize: '5px', lineHeight: '7px'}}>
        <div>{'{'}</div>
        <div className='pl-2'>
          <div><span className='text-green-400'>"id"</span>: <span className='text-yellow-400'>1</span>,</div>
          <div><span className='text-green-400'>"name"</span>: <span className='text-orange-300'>"value"</span>,</div>
          <div><span className='text-green-400'>"active"</span>: <span className='text-blue-300'>true</span>,</div>
          <div><span className='text-green-400'>"tags"</span>: [</div>
          <div className='pl-2'>
            <div className='text-orange-300'>"item"</div>
          </div>
          <div>],</div>
          <div><span className='text-green-400'>"meta"</span>: {'{'}</div>
          <div className='pl-2'>
            <div><span className='text-green-400'>"key"</span>: <span className='text-orange-300'>"val"</span></div>
          </div>
          <div>{'}'}</div>
        </div>
        <div>{'}'}</div>
      </div>
    </div>
  )
}

const Json = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <JsonStructure />
    </Browser>
  )
}

export default Json
