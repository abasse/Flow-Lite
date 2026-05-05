import Browser from './Browser'

const Sitemap = ({ data, selected }) => {
  return (
    <Browser data={data} selected={selected}>
      <div className='w-20 py-1.5'>
        <svg width="80" height="68" viewBox="0 0 80 68">
          {/* Connector lines */}
          {/* Root → horizontal bar */}
          <line x1="40" y1="12" x2="40" y2="18" stroke="#d1d5db" strokeWidth="1"/>
          <line x1="12" y1="18" x2="68" y2="18" stroke="#d1d5db" strokeWidth="1"/>
          {/* Horizontal → L1 nodes */}
          <line x1="12" y1="18" x2="12" y2="24" stroke="#d1d5db" strokeWidth="1"/>
          <line x1="40" y1="18" x2="40" y2="24" stroke="#d1d5db" strokeWidth="1"/>
          <line x1="68" y1="18" x2="68" y2="24" stroke="#d1d5db" strokeWidth="1"/>

          {/* L1 left → L2 */}
          <line x1="12" y1="32" x2="12" y2="37" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="5"  y1="37" x2="19" y2="37" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="5"  y1="37" x2="5"  y2="42" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="19" y1="37" x2="19" y2="42" stroke="#e5e7eb" strokeWidth="1"/>

          {/* L1 mid → L2 */}
          <line x1="40" y1="32" x2="40" y2="37" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="33" y1="37" x2="47" y2="37" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="33" y1="37" x2="33" y2="42" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="47" y1="37" x2="47" y2="42" stroke="#e5e7eb" strokeWidth="1"/>

          {/* L1 right → L2 */}
          <line x1="68" y1="32" x2="68" y2="37" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="61" y1="37" x2="75" y2="37" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="61" y1="37" x2="61" y2="42" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="75" y1="37" x2="75" y2="42" stroke="#e5e7eb" strokeWidth="1"/>

          {/* Root box */}
          <rect x="26" y="4" width="28" height="8" rx="2" fill="#9ca3af"/>

          {/* L1 boxes */}
          <rect x="1"  y="24" width="22" height="8" rx="2" fill="#d1d5db"/>
          <rect x="29" y="24" width="22" height="8" rx="2" fill="#d1d5db"/>
          <rect x="57" y="24" width="22" height="8" rx="2" fill="#d1d5db"/>

          {/* L2 boxes — left */}
          <rect x="1"  y="42" width="8" height="6" rx="1" fill="#e5e7eb"/>
          <rect x="15" y="42" width="8" height="6" rx="1" fill="#e5e7eb"/>

          {/* L2 boxes — mid */}
          <rect x="29" y="42" width="8" height="6" rx="1" fill="#e5e7eb"/>
          <rect x="43" y="42" width="8" height="6" rx="1" fill="#e5e7eb"/>

          {/* L2 boxes — right */}
          <rect x="57" y="42" width="8" height="6" rx="1" fill="#e5e7eb"/>
          <rect x="71" y="42" width="8" height="6" rx="1" fill="#e5e7eb"/>
        </svg>
      </div>
    </Browser>
  )
}

export default Sitemap
