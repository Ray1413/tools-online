import Link from 'next/link'
import { BsTools } from 'react-icons/bs'

function Logo() {
  return (
    <>
      {/* <a href='#' className='btn btn-ghost px-2'>
        <BsTools className='w-8 h-8 text-accent' />
        <div className='font-title inline-flex items-baseline gap-x-1 text-lg md:text-2xl'>
          <span>Tools</span>
          <span className='badge badge-primary'>online</span>
        </div>
      </a> */}

      <Link href={'/'} className='btn btn-ghost px-2'>
        <BsTools className='w-8 h-8 text-primary' />
      </Link>
      <div className='font-title inline-flex items-baseline gap-x-1 text-lg md:text-2xl'>
        <span>Tools</span>
        <span className='badge badge-neutral shadow'>online</span>
      </div>

      {/* <div className='dropdown'>
        <div
          tabIndex='0'
          role='button'
          className='link link-hover inline-block font-mono text-xs'
        >
          4.4.23
        </div>
        <ul
          tabIndex='0'
          className='dropdown-content menu menu-sm bg-base-200 rounded-box mt-7 w-36 border border-white/5 p-2 shadow-2xl outline outline-1 outline-black/5'
        >
          <li>
            <a href='/docs/changelog/'>
              <svg
                width='14'
                height='14'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.81836 6.72729V14H13.0911'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M24.005 12L24.0038 24.0088L32.4832 32.4882'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
              Changelog
            </a>
          </li>
          <li></li>
          <li>
            <a
              target='_blank'
              rel='noopener, noreferrer'
              href='https://v3.daisyui.com/'
            >
              Version 3.x
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener, noreferrer'
              href='https://v2.daisyui.com/'
            >
              Version 2.x
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener, noreferrer'
              href='https://v1.daisyui.com/'
            >
              Version 1.x
            </a>
          </li>
          <li></li>
          <li>
            <a href='/docs/roadmap/'>
              <svg
                width='14'
                height='14'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17 12L4 6V36L17 42L31 36L44 42V12L31 6L17 12Z'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M31 6V36'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M17 12V42'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M10.5 9L17 12L31 6L37.5 9'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M10.5 39L17 42L31 36L37.5 39'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
              Roadmap
            </a>
          </li>
        </ul>
      </div> */}
    </>
  )
}

export default Logo
