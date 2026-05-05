import { NavLink } from 'react-router-dom'

const Page = () => {
  return (
    <div>
      <article>
        <header>
          <p className="text-base">Content</p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Page</h1>
        </header>
        <hr className='my-4' />
        <div className="mt-6">
          <p>
            The <strong>Page</strong> wireframe represents a standard content page layout. It includes a full-width image at the top, a headline, a centered single-column body text area, and a footer.
          </p>

          {/* Wireframe preview */}
          <div className="my-8 border rounded-lg overflow-hidden shadow-sm bg-white max-w-sm mx-auto">
            {/* Image placeholder */}
            <div className="bg-gray-200 flex items-center justify-center h-40 w-full border-b">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
                <path strokeWidth="1.5" d="M21 15l-5-5L5 21" />
              </svg>
            </div>

            {/* Headline */}
            <div className="px-6 pt-5">
              <div className="h-5 bg-gray-800 rounded w-3/4"></div>
            </div>

            {/* Body text */}
            <div className="px-6 py-4 flex flex-col items-center gap-2">
              <div className="h-2.5 bg-gray-200 rounded w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded w-5/6"></div>
              <div className="h-2.5 bg-gray-200 rounded w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded w-4/6"></div>
              <div className="h-2.5 bg-gray-200 rounded w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded w-5/6"></div>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 border-t px-6 py-3 flex justify-between">
              <div className="h-2.5 bg-gray-300 rounded w-1/4"></div>
              <div className="h-2.5 bg-gray-300 rounded w-1/4"></div>
              <div className="h-2.5 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <h2 className='font-semibold text-xl my-2 text-gray-900'>Image</h2>
              <p>A full-width image placeholder sits at the top of the page, used for a hero image or featured visual.</p>
            </div>
            <div>
              <h2 className='font-semibold text-xl my-2 text-gray-900'>Headline</h2>
              <p>A prominent heading below the image introduces the page content.</p>
            </div>
            <div>
              <h2 className='font-semibold text-xl my-2 text-gray-900'>Body</h2>
              <p>A single centered column of body text keeps the reading experience focused and legible.</p>
            </div>
            <div>
              <h2 className='font-semibold text-xl my-2 text-gray-900'>Footer</h2>
              <p>A footer bar at the bottom contains secondary links or information.</p>
            </div>
          </div>
        </div>
      </article>

      <dl className="flex pt-6 mt-6 border-t border-slate-200">
        <div className="mr-auto text-left">
          <dt className="text-sm font-normal tracking-tight text-slate-600">Previous</dt>
          <dd className="mt-1">
            <NavLink to={'/workspace/documentation/preview'} className="text-base font-semibold text-slate-900 hover:underline">
              Preview flow
            </NavLink>
          </dd>
        </div>
      </dl>
    </div>
  )
}

export default Page
