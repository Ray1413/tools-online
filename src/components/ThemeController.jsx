import { HiChevronDown } from 'react-icons/hi2'
import { FaSwatchbook } from 'react-icons/fa6'

function ThemeController() {
  return (
    <div title='Change Theme' className='dropdown dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-ghost'
        aria-label='Change Theme'
      >
        <FaSwatchbook />
        <HiChevronDown className='hidden h-3 w-3 opacity-60 sm:inline-block' />
      </div>
      <div
        tabIndex={0}
        // h-[28.6rem] max-h-[calc(100vh-10rem)]
        className='dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16  max-h-[50vh] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5'
      >
        <div className='grid grid-cols-1 gap-3 p-3'>
          <label
            htmlFor='light'
            className='outline-base-content text-start outline-offset-4'
          >
            <span
              data-theme='light'
              className='bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans'
            >
              <span className='grid grid-cols-5 grid-rows-3'>
                <span className='col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3'>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller hidden peer'
                    aria-label='light'
                    id='light'
                    value='light'
                    defaultChecked={true}
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='h-3 w-3 shrink-0 invisible peer-checked:visible'
                  >
                    <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'></path>
                  </svg>
                  <span className='flex-grow text-sm'>light</span>
                  <span className='flex h-full shrink-0 flex-wrap gap-1'>
                    <span className='bg-primary rounded-badge w-2'></span>
                    <span className='bg-secondary rounded-badge w-2'></span>
                    <span className='bg-accent rounded-badge w-2'></span>
                    <span className='bg-neutral rounded-badge w-2'></span>
                  </span>
                </span>
              </span>
            </span>
          </label>
          <label
            htmlFor='dark'
            className='outline-base-content text-start outline-offset-4'
          >
            <span
              data-theme='dark'
              className='bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans'
            >
              <span className='grid grid-cols-5 grid-rows-3'>
                <span className='col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3'>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller hidden peer'
                    aria-label='light'
                    id='dark'
                    value='dark'
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='h-3 w-3 shrink-0 invisible peer-checked:visible'
                  >
                    <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'></path>
                  </svg>
                  <span className='flex-grow text-sm'>dark</span>
                  <span className='flex h-full shrink-0 flex-wrap gap-1'>
                    <span className='bg-primary rounded-badge w-2'></span>
                    <span className='bg-secondary rounded-badge w-2'></span>
                    <span className='bg-accent rounded-badge w-2'></span>
                    <span className='bg-neutral rounded-badge w-2'></span>
                  </span>
                </span>
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ThemeController
