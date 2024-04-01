import { useEffect, useState, useRef } from 'react'
import { debounce } from '@/lib/utils'
import PDFPage from './PDFPage'

const getColumnClass = (column) => {
  let columnClass =
    'p-4 grid-cols-1 gap-4 md:p-6 md:grid-cols-2 md:gap-6 xl:p-8 xl:grid-cols-3 xl:gap-8 2xl:p-8 2xl:grid-cols-4 2xl:gap-8'
  switch (column) {
    case 1:
      columnClass = 'p-4 grid-cols-1 gap-4'
      break
    case 2:
      columnClass = 'p-6 grid-cols-2 gap-6'
      break
    case 3:
      columnClass = 'p-8 grid-cols-3 gap-8'
      break
    case 4:
      columnClass = 'p-8 grid-cols-4 gap-8'
      break
  }
  return ' ' + columnClass
}

function PDFPageGroup({ column, pages, groupIndex, groupSize }) {
  const divRef = useRef(null)
  const [show, setShow] = useState(true)
  const [minHeight, setMinHeight] = useState('')
  const lastColumnRef = useRef(null)

  const observerOptions = {
    // root: null,
    rootMargin: '500px 0px',
    // threshold: null,
  }

  useEffect(() => {
    if (lastColumnRef.current != column) {
      lastColumnRef.current = column
      setShow(true)
    }

    return () => {}
  }, [column])

  useEffect(() => {
    let lastWidth = null
    const handleWindowWidthChange = debounce(() => {
      if (lastWidth != window.innerWidth) {
        console.log(window.innerWidth)
        lastWidth = window.innerWidth
        setShow(true)
      }
    }, 200)
    window.addEventListener('resize', handleWindowWidthChange)
    return () => {
      window.removeEventListener('resize', handleWindowWidthChange)
    }
  }, [])

  useEffect(() => {
    setMinHeight(divRef.current.offsetHeight + 'px')

    //observe changes in the intersection of pageGroup
    let pageGroupObserver = null
    if (divRef.current) {
      const callback = (entries, pageGroupObserver) => {
        entries.forEach((entry) => {
          // const target = entry.target
          if (entry.isIntersecting) {
            console.log('show page group ' + groupIndex)
            setShow(true)
          } else {
            console.log('hide page group ' + groupIndex)
            setShow(false)
          }
        })
      }

      pageGroupObserver = new IntersectionObserver(
        debounce(callback, 200),
        observerOptions
      )
      pageGroupObserver.observe(divRef.current)
    }

    return () => {
      if (pageGroupObserver) {
        pageGroupObserver.disconnect()
      }
    }
  }, [pages, groupIndex, groupSize, show])

  return (
    <>
      <div
        ref={divRef}
        className={'grid' + getColumnClass(column)}
        style={{
          minHeight: show ? '' : minHeight,
        }}
      >
        {show
          ? pages.map((page, i) => (
              <PDFPage key={i} page={page} pageIndexInGroup={i} />
            ))
          : null}
      </div>
    </>
  )
}

export default PDFPageGroup
