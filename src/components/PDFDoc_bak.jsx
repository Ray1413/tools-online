import { useEffect, useState, useRef } from 'react'

function PDFPage({ page, observerRef }) {
  const divRef = useRef(null)
  const canvasRef = useRef(null)
  const renderTaskRef = useRef(null)
  const scale = 1.5
  const viewport = page.getViewport({ scale: scale })

  useEffect(() => {
    if (observerRef?.current) {
      observerRef.current.observe(divRef.current)
    }

    const canvas = canvasRef.current
    if (canvas == null) {
      return
    }

    // const scale = 1.5
    // const viewport = page.getViewport({ scale: scale })
    // console.log(viewport)
    // setViewport(viewport)

    if (renderTaskRef.current == null) {
      // Prepare canvas using PDF page dimensions
      //   const canvas = document.createElement('canvas')
      // canvas.setAttribute('class', 'w-full shadow-xl')
      const context = canvas.getContext('2d')
      // canvas.height = viewport.height
      // canvas.width = viewport.width

      // Render PDF page into canvas context
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      }

      renderTaskRef.current = page.render(renderContext)
      renderTaskRef.current.promise.then(() => {
        window.pageCount =
          window.pageCount == undefined ? 0 : window.pageCount + 1
        console.log(window.pageCount)
      })

      // renderTaskRef.current.promise.then(() => console.log(page.pageNumber))
    }

    return () => {
      page.cleanup()
      // page._destroy()
    }
  }, [])

  return (
    <>
      {/* {viewport == null ? null : (
        <div>
          <canvas
            ref={canvasRef}
            height={viewport.height}
            width={viewport.width}
            className='w-full shadow-xl'
          ></canvas>
        </div>
      )} */}
      <div
        ref={divRef}
        className='border-2 border-base-200 shadow-xl'
        style={{
          // height:viewport.height,
          // weight:viewport.width,
          // maxWidth: '100%',
          width: '100%',
          aspectRatio: viewport.width / viewport.height,
        }}
        data-index={page.pageNumber - 1}
      >
        {page.pageNumber}
        {/* <canvas
          ref={canvasRef}
          height={viewport?.height}
          width={viewport?.width}
          className='w-full'
        ></canvas> */}
      </div>
    </>
  )
}

function PDFDoc({ pdfData, pdfURL }) {
  const observerRef = useRef(null)
  const [pages, setPages] = useState([])

  useEffect(() => {
    if (pages.length > 0) {
      const options = {
        // root: null,
        rootMargin: '500px 0px',
        // threshold: null,
      }

      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          // Each entry describes an intersection change for one observed
          // target element:
          //   entry.boundingClientRect
          //   entry.intersectionRatio
          //   entry.intersectionRect
          //   entry.isIntersecting
          //   entry.rootBounds
          //   entry.target
          //   entry.time

          const target = entry.target
          if (entry.isIntersecting && target.children.length == 0) {
            const pageNum = parseInt(target.dataset.index) + 1
            console.log('show page ' + pageNum)

            const page = pages[pageNum - 1]
            // Prepare canvas using PDF page dimensions

            const canvas = document.createElement('canvas')
            canvas.setAttribute('class', 'w-full')
            const context = canvas.getContext('2d')
            const scale = 1.5
            const viewport = page.getViewport({ scale: scale })
            canvas.height = viewport.height
            canvas.width = viewport.width

            // Render PDF page into canvas context
            const renderContext = {
              canvasContext: context,
              viewport: viewport,
            }

            target.replaceChildren(canvas)
            const renderTask = page.render(renderContext)
            renderTask.promise.then(() => {
              console.log(`Page ${pageNum} rendered`)
            })
          } else {
            // target.replaceChildren()
          }
        })
      }

      observerRef.current = new IntersectionObserver(callback, options)
    }

    return () => {
      if (observerRef?.current) {
        observerRef.current.disconnect()
      }
    }
  }, [pages])

  useEffect(() => {
    let pdf = null

    if (pdfData) {
    } else if (pdfURL) {
      const loadPDFFormURL = async () => {
        const loadingTask = pdfjsLib.getDocument(pdfURL)
        try {
          pdf = await loadingTask.promise
          console.log(`PDF loaded (${pdf?.numPages} pages)`)

          if (pdf?.numPages > 0) {
            const promiseList = new Array(pdf.numPages)
              .fill(0)
              .map((item, index) => pdf.getPage(index + 1))
            const pageList = await Promise.all(promiseList)
            setPages(pageList)
          }
        } catch (err) {
          // PDF loading error
          console.error(err)
        }
      }
      loadPDFFormURL()
    }

    return () => {
      if (pdf) {
        pdf.destroy()
        console.log('Destroy pdf')
      }
    }
  }, [pdfData, pdfURL])

  return (
    <>
      {pages.length <= 0 ? null : (
        <div
          // className='mt-6 -mx-6 -mb-16 p-6 flex flex-wrap gap-10 align-middle columns-2'
          className='mt-6 -mx-6 -mb-16 p-4 md:p-6 xl:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8'
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg,var(--fallback-b1,oklch(var(--b1))),var(--fallback-b1,oklch(var(--b1))) 13px,var(--fallback-pc,oklch(var(--pc))) 13px,var(--fallback-pc,oklch(var(--pc))) 14px)',
            backgroundSize: '40px 40px',
          }}
        >
          {/* {new Array(pdf.numPages).fill(0).map((el, index) => (
            <div className=' border-2 border-base-200' key={index}>
              {index}
            </div>
          ))} */}
          {pages.map((page, i) => (
            <PDFPage key={i} page={page} observerRef={observerRef} />
          ))}
        </div>
      )}
    </>
  )
}

export default PDFDoc
