import { HiOutlineLanguage, HiChevronDown } from 'react-icons/hi2'

function LanguageController() {
  return (
    <div title='Change Language' className='dropdown dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-ghost'
        aria-label='Change Language'
      >
        <HiOutlineLanguage className='h-5 w-5 stroke-2' />
        <HiChevronDown className='hidden h-3 w-3 opacity-60 sm:inline-block' />
      </div>
      <div
        tabIndex={0}
        className='dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5'
      >
        <ul className='menu menu-sm gap-1'>
          <li>
            <button
              className='active'
              onClick={() => document.activeElement.blur()}
            >
              <span className='badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50'>
                EN
              </span>
              <span className='font-[sans-serif]'>English</span>
            </button>
          </li>
          <li>
            <button>
              <span className='badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50'>
                ZH
              </span>
              <span className='font-[sans-serif]'>中文</span>
            </button>
          </li>
          <li>
            <button>
              <span className='badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50'>
                ZH
              </span>
              <span className='font-[sans-serif]'>繁體中文</span>
              <span className='badge badge-sm badge-ghost'>beta</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LanguageController
