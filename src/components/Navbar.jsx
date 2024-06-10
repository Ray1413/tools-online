'use client'

import Logo from '@/components/Logo'
import ThemeController from '@/components/ThemeController'
import LanguageController from '@/components/LanguageController'

function Navbar({ leftSide }) {
  return (
    <div className='bg-base-100 text-base-content sticky top-0 z-50 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm'>
      <nav className='navbar w-full'>
        <div className='flex flex-1 gap-1'>
          {leftSide}

          <div className='flex items-center gap-2'>
            <Logo />
          </div>
          {/* <div className='hidden w-full max-w-sm lg:flex'>
            search bar
          </div> */}
        </div>

        <div>
          {/* <div className='flex-none items-center'>
            <a href='#' className='btn btn-ghost drawer-button font-normal'>
              Item1
            </a>
          </div> */}
          {/* <div className='btn btn-ghost'>Item2</div>
          <div className='btn btn-ghost'>Item3</div> */}

          <ThemeController />
          <LanguageController />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
