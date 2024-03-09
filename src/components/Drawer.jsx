import { HiOutlineBars3 } from 'react-icons/hi2'

function Drawer({ drawerId, drawerSide, drawerContent }) {
  return (
    <div className='drawer lg:drawer-open'>
      <input id={drawerId} type='checkbox' className='drawer-toggle' />
      <div className='drawer-side top-16 z-40 h-[calc(100svh-64px)] border-r-[1px] border-base-200'>
        <label
          htmlFor={drawerId}
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        {drawerSide}
      </div>

      <div className='drawer-content'>{drawerContent}</div>
    </div>
  )
}

function DrawerToggle({ drawerId }) {
  return (
    <span title='Menu'>
      <label
        aria-label='Open menu'
        htmlFor={drawerId}
        className='btn btn-square btn-ghost drawer-button lg:hidden '
      >
        <HiOutlineBars3 className='inline-block h-5 w-5 stroke-current md:h-6 md:w-6' />
      </label>
    </span>
  )
}

export { Drawer, DrawerToggle }
