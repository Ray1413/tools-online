import Link from 'next/link'

function RootPage() {
  const linearGradientVar = `
  
  `

  return (
    <div>
      <div
        className='relative hero min-h-screen min-h-svh -mt-16'
        // style={{ backgroundImage: 'url(/images/bg3.jpg)' }}
      >
        <div className='absolute w-full h-full bg-base-100 bg-[linear-gradient(-45deg,_theme(colors.secondary)_0%,_var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))_45%,_var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))_55%,_theme(colors.primary)_100%)] bg-[length:200%_200%] animate-gr'></div>
        <div className='hero-content flex-col sm:flex-row p-6 gap-6'>
          <div>
            <h1 className='text-5xl font-bold'>
              <span>Tools that are </span>
              <span className='bg-[linear-gradient(90deg,_theme(colors.secondary)_0%,_theme(colors.primary)_50%,_theme(colors.accent)_100%)] bg-clip-text text-transparent'>
                available on the web.
              </span>
            </h1>
            {/* <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}

            <Link className='btn btn-primary' href='/tools/pdf-to-image'>
              Get Started
            </Link>
          </div>

          <img
            // src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg'
            src='/images/bg2.png'
            className='max-w-80 sm:max-w-sm rounded-lg shadow-2xl'
          />
        </div>
      </div>
    </div>
  )
}

export default RootPage
