import React from 'react'

function Logo() {
  return (
    <>
      <a href='#' className='flex-0 btn btn-ghost px-2'>
        <svg
          width='32'
          height='32'
          viewBox='0 0 415 415'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='82.5'
            y='290'
            width='250'
            height='125'
            rx='62.5'
            fill='#1AD1A5'
          ></rect>
          <circle
            cx='207.5'
            cy='135'
            r='130'
            fillOpacity='black'
            fill-='.3'
          ></circle>
          <circle cx='207.5' cy='135' r='125' fill='white'></circle>
          <circle cx='207.5' cy='135' r='56' fill='#FF9903'></circle>
        </svg>
        <div className='font-title inline-flex text-lg md:text-2xl'>
          daisyUI
        </div>
      </a>
      <div className='dropdown'>
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
      </div>
    </>
  )
}

export default Logo
