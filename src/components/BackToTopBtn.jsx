'use client'
import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi2'
import { debounce } from '@/lib/utils.mjs'

function BackToTopBtn() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = debounce((event) => {
      setShow(window.scrollY >= 1500 ? true : false)
    })
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <button
        className='btn btn-circle btn-accent text-base-200 fixed z-10 bottom-3 right-3 opacity-70'
        style={{
          opacity: show ? null : 0,
        }}
        onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
      >
        <HiArrowUp className='w-6 h-6' />
      </button>
    </>
  )
}

export default BackToTopBtn
