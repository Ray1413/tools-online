'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { HiOutlineHome } from 'react-icons/hi2'
import { BsFiletypePdf } from 'react-icons/bs'

const navLinks = [
  {
    path: '/',
    name: 'Home',
    icon: HiOutlineHome,
  },
  {
    path: '/tools/pdf-to-image',
    name: 'PDF to Image',
    icon: BsFiletypePdf,
  },
]

function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className='bg-base-100 w-60' style={{ minHeight: '100svh' }}>
      <div className='bg-base-100 sticky top-0 z-20 items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur hidden lg:flex shadow-sm'>
        <Logo />
      </div>

      <div className='h-4'></div>
      <ul className='menu px-4 py-0'>
        {navLinks.map((l) => (
          <li key={l.path}>
            <Link
              href={l.path}
              className={`group ${pathname === l.path ? 'active' : ''}`}
            >
              <span>
                <l.icon
                  className={`text-${
                    pathname === l.path ? 'neutral' : 'base'
                  }-content h-5 w-5`}
                />
              </span>
              <span>{l.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
