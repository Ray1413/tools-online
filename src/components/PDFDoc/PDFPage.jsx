import { useEffect, useState, useRef } from 'react'
import { debounce } from '@/lib/utils.mjs'

function PDFPage({ page, pageIndexInGroup }) {
  const divRef = useRef(null)
  const canvasRef = useRef(null)
  const renderCompleteRef = useRef(false)
  const [renderComplete, setRenderComplete] = useState(false)

  const scale = 1.5
  const viewport = page.getViewport({ scale: scale })

  useEffect(() => {
    let firstRender = true
    let observer = null
    if (divRef.current) {
      const options = {
        // root: null,
        rootMargin: '500px 0px',
        // threshold: null,
      }

      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              firstRender &&
              canvasRef.current &&
              !renderCompleteRef.current
            ) {
              firstRender = false
              const canvas = canvasRef.current
              const context = canvas.getContext('2d')

              // Render PDF page into canvas context
              const renderContext = {
                canvasContext: context,
                viewport: viewport,
              }

              const renderTask = page.render(renderContext)
              renderTask.promise.then(() => {
                console.log(`page ${page.pageNumber} rendered`)
                setRenderComplete(true)
                renderCompleteRef.current = true
                page.cleanup()
              })
            }
          } else {
          }
        })
      }

      observer = new IntersectionObserver(debounce(callback, 200), options)
      observer.observe(divRef.current)
    }

    return () => {
      observer.disconnect()
      setRenderComplete(false)
      renderCompleteRef.current = false
      page.cleanup()
    }
  }, [page])

  return (
    <>
      <div
        ref={divRef}
        className='w-full indicator bg-base-200 shadow-xl'
        style={{
          aspectRatio: viewport.width / viewport.height,
        }}
      >
        <div className='indicator-item indicator-top indicator-start badge badge-xs badge-neutral'>
          {page.pageNumber}
        </div>
        <canvas
          ref={canvasRef}
          height={viewport?.height}
          width={viewport?.width}
          className='w-full'
          style={{ display: renderComplete ? '' : 'none' }}
        ></canvas>
      </div>
    </>
  )
}

export default PDFPage
