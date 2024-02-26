function Drawer({ children }) {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      {children}
    </div>
  )
}

function DrawerContent({ children }) {
  return <div className='drawer-content'>{children}</div>
}

function DrawerSide({ children }) {
  return (
    <div className='drawer-side z-40'>
      <label
        htmlFor='my-drawer'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      {children}
    </div>
  )
}

export { Drawer, DrawerContent, DrawerSide }
