import Link from 'next/link'
// import { BookOpenIcon } from '@heroicons/react/24/outline'
import Logo from '@/components/Logo'

function Sidebar() {
  return (
    <aside className='bg-base-100 w-80' style={{ minHeight: '100%' }}>
      {/* <div className='bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex '></div> */}
      {/*  hidden lg:flex */}

      {/* <div className='bg-base-100 sticky top-0 z-20 items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur hidden lg:flex shadow-sm'>
        <Logo />
      </div> */}

      <div className='h-4'></div>
      <ul className='menu px-4 py-0'>
        <li>
          <details id='disclosure-docs' open=''>
            <summary className='group'>
              <span>
                {/* <BookOpenIcon className='text-orange-400 h-5 w-5' /> */}
              </span>
              Docs
            </summary>
            <ul>
              <li>
                <a href='/docs/install/' className='group'>
                  <span>Install</span>
                </a>
              </li>
              <li>
                <a href='/docs/use/' className='group'>
                  <span>Use</span>
                </a>
              </li>
              <li>
                <a href='/docs/customize/' className='group'>
                  <span>Customize components</span>
                </a>
              </li>
              <li>
                <a href='/docs/config/' className='group'>
                  <span>Config</span>
                  <span className='badge badge-sm font-mono null'>updated</span>
                </a>
              </li>
              <li>
                <a href='/docs/colors/' className='group'>
                  <span>Colors</span>
                  <span className='badge badge-sm font-mono null'>updated</span>
                </a>
              </li>
              <li>
                <a href='/docs/themes/' className='group'>
                  <span>Themes</span>
                  <span className='badge badge-sm font-mono null'>updated</span>
                </a>
              </li>
              <li>
                <a href='/docs/utilities/' className='group'>
                  <span>Utilities</span>
                  <span className='badge badge-sm font-mono null'>new</span>
                </a>
              </li>
              <li>
                <a href='/docs/layout-and-typography/' className='group'>
                  <span>Layout &amp; Typography</span>
                </a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details id='disclosure-components' open=''>
            <summary className='group'>
              <span>
                <svg
                  className='w-5 h-5 text-green-600'
                  width='18'
                  height='18'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M20 29H6V43H20V29Z'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='butt'
                    strokeLinejoin='bevel'
                  ></path>
                  <path
                    d='M24 4L34 21H14L24 4Z'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='butt'
                    strokeLinejoin='bevel'
                  ></path>
                  <path
                    d='M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='butt'
                    strokeLinejoin='bevel'
                  ></path>
                </svg>
              </span>
              Components
            </summary>
            <ul>
              <li>
                <h2 className='menu-title flex items-center gap-4 px-1.5'>
                  <span className='text-base-content'>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 48 48'
                      fill='none'
                      stroke='currentColor'
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M24 4V12'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z'
                        fill='none'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M38.1421 9.85789L32.4853 15.5147'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M9.85787 38.1421L15.5147 32.4853'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M4 24H12'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M9.85795 9.85787L15.5148 15.5147'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                    </svg>
                  </span>
                  Actions
                </h2>
                <ul>
                  <li>
                    <a href='/components/button/' className='group'>
                      <span>Button</span>
                      <span className='badge badge-sm font-mono null'>
                        updated
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/dropdown/' className='group'>
                      <span>Dropdown</span>
                      <span className='badge badge-sm font-mono null'>
                        updated
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/modal/' className='group'>
                      <span>Modal</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/swap/' className='group'>
                      <span>Swap</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/theme-controller/' className='group'>
                      <span>Theme Controller</span>
                      <span className='badge badge-sm font-mono null'>new</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h2 className='menu-title flex items-center gap-4 px-1.5'>
                  <span className='text-base-content'>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 48 48'
                      className='w-5 h-5'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='4'
                        y='8'
                        width='40'
                        height='32'
                        rx='3'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinejoin='bevel'
                      ></rect>
                      <path
                        d='M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></path>
                      <circle
                        r='2'
                        transform='matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)'
                        fill='currentColor'
                      ></circle>
                      <circle
                        r='2'
                        transform='matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)'
                        fill='currentColor'
                      ></circle>
                    </svg>
                  </span>
                  Data display
                </h2>
                <ul>
                  <li>
                    <a href='/components/accordion/' className='group'>
                      <span>Accordion</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/avatar/' className='group'>
                      <span>Avatar</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/badge/' className='group'>
                      <span>Badge</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/card/' className='group'>
                      <span>Card</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/carousel/' className='group'>
                      <span>Carousel</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/chat/' className='group'>
                      <span>Chat bubble</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/collapse/' className='group'>
                      <span>Collapse</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/countdown/' className='group'>
                      <span>Countdown</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/diff/' className='group'>
                      <span>Diff</span>
                      <span className='badge badge-sm font-mono null'>new</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/kbd/' className='group'>
                      <span>Kbd</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/stat/' className='group'>
                      <span>Stat</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/table/' className='group'>
                      <span>Table</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/timeline/' className='group'>
                      <span>Timeline</span>
                      <span className='badge badge-sm font-mono null'>new</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h2 className='menu-title flex items-center gap-4 px-1.5'>
                  <span className='text-base-content'>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 48 48'
                      className='h-5 w-5'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M30 19H20C15.5817 19 12 22.5817 12 27C12 31.4183 15.5817 35 20 35H36C40.4183 35 44 31.4183 44 27C44 24.9711 43.2447 23.1186 42 21.7084'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M6 24.2916C4.75527 22.8814 4 21.0289 4 19C4 14.5817 7.58172 11 12 11H28C32.4183 11 36 14.5817 36 19C36 23.4183 32.4183 27 28 27H18'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                    </svg>
                  </span>
                  Navigation
                </h2>
                <ul>
                  <li>
                    <a href='/components/breadcrumbs/' className='group'>
                      <span>Breadcrumbs</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/bottom-navigation/' className='group'>
                      <span>Bottom navigation</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/link/' className='group'>
                      <span>Link</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/menu/' className='group'>
                      <span>Menu</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/navbar/' className='group'>
                      <span>Navbar</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/pagination/' className='group'>
                      <span>Pagination</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/steps/' className='group'>
                      <span>Steps</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/tab/' className='group'>
                      <span>Tab</span>
                      <span className='badge badge-sm font-mono null'>
                        updated
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h2 className='menu-title flex items-center gap-4 px-1.5'>
                  <span className='text-base-content'>
                    <svg
                      width='18'
                      height='18'
                      className='w-5 h-5'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4 6H44V36H29L24 41L19 36H4V6Z'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M23 21H25.0025'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                      ></path>
                      <path
                        d='M33.001 21H34.9999'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                      ></path>
                      <path
                        d='M13.001 21H14.9999'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                      ></path>
                    </svg>
                  </span>
                  Feedback
                </h2>
                <ul>
                  <li>
                    <a href='/components/alert/' className='group'>
                      <span>Alert</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/loading/' className='group'>
                      <span>Loading</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/progress/' className='group'>
                      <span>Progress</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/radial-progress/' className='group'>
                      <span>Radial progress</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/skeleton/' className='group'>
                      <span>Skeleton</span>
                      <span className='badge badge-sm font-mono null'>new</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/toast/' className='group'>
                      <span>Toast</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/tooltip/' className='group'>
                      <span>Tooltip</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h2 className='menu-title flex items-center gap-4 px-1.5'>
                  <span className='text-base-content'>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 48 48'
                      className='w-5 h-5'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7 42H43'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinejoin='bevel'
                      ></path>
                    </svg>
                  </span>
                  Data input
                </h2>
                <ul>
                  <li>
                    <a href='/components/checkbox/' className='group'>
                      <span>Checkbox</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/file-input/' className='group'>
                      <span>File Input</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/radio/' className='group'>
                      <span>Radio</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/range/' className='group'>
                      <span>Range</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/rating/' className='group'>
                      <span>Rating</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/select/' className='group'>
                      <span>Select</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/input/' className='group'>
                      <span>Text input</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/textarea/' className='group'>
                      <span>Textarea</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/toggle/' className='group'>
                      <span>Toggle</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h2 className='menu-title flex items-center gap-4 px-1.5'>
                  <span className='text-base-content'>
                    <svg
                      width='18'
                      height='18'
                      className='w-5 h-5'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='6'
                        y='6'
                        width='36'
                        height='36'
                        rx='3'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinejoin='bevel'
                      ></rect>
                      <path
                        d='M6 22L42 22'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M29 22V6'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M26 6H32'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M6 19V25'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M42 19V25'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                        strokeLinejoin='bevel'
                      ></path>
                    </svg>
                  </span>
                  Layout
                </h2>
                <ul>
                  <li>
                    <a href='/components/artboard/' className='group'>
                      <span>Artboard</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/divider/' className='group'>
                      <span>Divider</span>
                      <span className='badge badge-sm font-mono null'>
                        updated
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/drawer/' className='group'>
                      <span>Drawer</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/footer/' className='group'>
                      <span>Footer</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/hero/' className='group'>
                      <span>Hero</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/indicator/' className='group'>
                      <span>Indicator</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/join/' className='group'>
                      <span>Join (group items)</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/mask/' className='group'>
                      <span>Mask</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/stack/' className='group'>
                      <span>Stack</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h2 className='menu-title flex items-center gap-4 px-1.5'>
                  <span className='text-base-content'>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 48 48'
                      className='w-5 h-5'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinejoin='bevel'
                      ></path>
                      <path
                        d='M22 37H26'
                        stroke='currentColor'
                        strokeWidth='4'
                        strokeLinecap='butt'
                      ></path>
                    </svg>
                  </span>
                  Mockup
                </h2>
                <ul>
                  <li>
                    <a href='/components/mockup-browser/' className='group'>
                      <span>Browser</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/mockup-code/' className='group'>
                      <span>Code</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/mockup-phone/' className='group'>
                      <span>Phone</span>
                    </a>
                  </li>
                  <li>
                    <a href='/components/mockup-window/' className='group'>
                      <span>Window</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a href='/theme-generator/' className='group'>
            <span>
              <svg
                className='h-5 w-5 text-fuchsia-400'
                width='18'
                height='18'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='butt'
                  strokeLinejoin='bevel'
                ></path>
                <path
                  d='M29.5856 18.4143L5.54395 42.4559'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='butt'
                  strokeLinejoin='bevel'
                ></path>
              </svg>
            </span>
            <span>Theme Generator</span>
          </a>
        </li>
        <li></li>
        <li>
          <a href='/store/' className='group'>
            <span>
              <svg
                className='h-5 w-5'
                width='18'
                height='18'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M40.0391 22V42H8.03906V22'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='butt'
                  strokeLinejoin='bevel'
                ></path>
                <path
                  d='M5.84231 13.7766C4.31276 17.7377 7.26307 22 11.5092 22C14.8229 22 17.5276 19.3137 17.5276 16C17.5276 19.3137 20.2139 22 23.5276 22H24.546C27.8597 22 30.546 19.3137 30.546 16C30.546 19.3137 33.2518 22 36.5655 22C40.8139 22 43.767 17.7352 42.2362 13.7723L39.2337 6H8.84523L5.84231 13.7766Z'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinejoin='bevel'
                ></path>
              </svg>
            </span>
            <span>Store</span>
            <span className='badge badge-sm font-mono badge-primary'>new</span>
          </a>
        </li>
        <li>
          <a href='/blog/' className='group'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path d='M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z'></path>
                <path d='M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z'></path>
              </svg>
            </span>
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a href='/resources/videos/' className='group'>
            <span>
              <svg
                width='18'
                height='18'
                viewBox='0 0 48 48'
                className='w-5 h-5'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinejoin='bevel'
                ></path>
                <path
                  d='M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinejoin='bevel'
                ></path>
              </svg>
            </span>
            <span>Resources</span>
          </a>
        </li>
        <li></li>
        <li>
          <Link href='/playground' className='group'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 54 33'
              >
                <g clipPath='url(#prefix__clip0)'>
                  <path
                    fill='currentColor'
                    fillRule='evenodd'
                    d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z'
                    clipRule='evenodd'
                  ></path>
                </g>
                <defs>
                  <clipPath id='prefix__clip0'>
                    <path fill='#fff' d='M0 0h54v32.4H0z'></path>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>Playground</span>
            <svg
              width='12'
              height='12'
              className='opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19 11H37V29'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='butt'
                strokeLinejoin='bevel'
              ></path>
              <path
                d='M11.5439 36.4559L36.9997 11'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='butt'
                strokeLinejoin='bevel'
              ></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link href='/tools' className='group'>
            <span>
              <svg
                width='18'
                height='18'
                className='h-5 w-5'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='butt'
                ></path>
                <path
                  d='M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='butt'
                ></path>
                <path
                  d='M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='butt'
                ></path>
                <path
                  d='M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='butt'
                ></path>
              </svg>
            </span>
            <span>GitHub</span>
            <svg
              width='12'
              height='12'
              className='opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19 11H37V29'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='butt'
                strokeLinejoin='bevel'
              ></path>
              <path
                d='M11.5439 36.4559L36.9997 11'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='butt'
                strokeLinejoin='bevel'
              ></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link href='/' className='group'>
            <span>
              <svg
                width='18'
                className='h-5 w-5'
                height='18'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='butt'
                  strokeLinejoin='bevel'
                ></path>
              </svg>
            </span>
            <span>Home</span>
            <svg
              width='12'
              height='12'
              className='opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19 11H37V29'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='butt'
                strokeLinejoin='bevel'
              ></path>
              <path
                d='M11.5439 36.4559L36.9997 11'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='butt'
                strokeLinejoin='bevel'
              ></path>
            </svg>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
