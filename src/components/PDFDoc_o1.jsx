import { useEffect, useState, useRef } from 'react'
import { debounce } from '@/lib/utils'

function PDFPage({ page, pageIndexInGroup, pageObserverRef }) {
  const divRef = useRef(null)
  // const canvasRef = useRef(null)
  // const renderCompleteRef = useRef(false)
  // const [show, setShow] = useState(false)

  const scale = 1.5
  const viewport = page.getViewport({ scale: scale })

  useEffect(() => {
    if (pageObserverRef.current) {
      pageObserverRef.current.observe(divRef.current)
    }

    return () => {
      page.cleanup()
    }
  }, [page, pageObserverRef])

  // useEffect(() => {
  //   let observer = null
  //   if (divRef.current) {
  //     const options = {
  //       // root: null,
  //       rootMargin: '500px 0px',
  //       // threshold: null,
  //     }

  //     const callback = (entries, observer) => {
  //       entries.forEach((entry) => {
  //         // Each entry describes an intersection change for one observed
  //         // target element:
  //         //   entry.boundingClientRect
  //         //   entry.intersectionRatio
  //         //   entry.intersectionRect
  //         //   entry.isIntersecting
  //         //   entry.rootBounds
  //         //   entry.target
  //         //   entry.time

  //         const target = entry.target
  //         const pageNum = page.pageNumber
  //         if (entry.isIntersecting) {
  //           console.log('show page ' + pageNum)
  //           setShow(true)
  //         } else {
  //           // target.replaceChildren()
  //           console.log('hide page ' + pageNum)
  //           setShow(false)
  //         }
  //       })
  //     }

  //     observer = new IntersectionObserver(callback, options)
  //     observer.observe(divRef.current)
  //   }

  //   return () => {
  //     observer.disconnect()
  //   }
  // }, [])

  // useEffect(() => {
  //   let showRender = true
  //   const canvas = canvasRef.current
  //   if (!renderCompleteRef.current && canvas && show) {
  //     const context = canvas.getContext('2d')

  //     // Render PDF page into canvas context
  //     const renderContext = {
  //       canvasContext: context,
  //       viewport: viewport,
  //     }

  //     if (showRender) {
  //       renderCompleteRef.current = true
  //       const renderTaskRef = page.render(renderContext)
  //       renderTaskRef.promise.then(() => {
  //         console.log(`page ${page.pageNumber} rendered`)
  //       })
  //     }
  //   }

  //   return () => {
  //     page.cleanup()
  //     showRender = false
  //     // page._destroy()
  //   }
  // }, [show])

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
        // className='border-2 border-base-200 shadow-xl'
        className='shadow-xl'
        style={{
          // height:viewport.height,
          // weight:viewport.width,
          // maxWidth: '100%',
          width: '100%',
          aspectRatio: viewport.width / viewport.height,
        }}
        data-index={page.pageNumber - 1}
        data-page-index-in-group={pageIndexInGroup}
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

function PDFPageGroup({ pages, groupIndex, groupSize }) {
  const divRef = useRef(null)
  const pageObserverRef = useRef(null)
  const [show, setShow] = useState(true)

  const observerOptions = {
    // root: null,
    rootMargin: '500px 0px',
    // threshold: null,
  }

  useEffect(() => {
    //observe changes in the intersection of pageGroup

    let pageGroupObserver = null
    if (divRef.current) {
      // const setShowDebounce = debounce(setShow, 200)
      const callback = (entries, pageGroupObserver) => {
        entries.forEach((entry) => {
          const target = entry.target
          if (entry.isIntersecting) {
            // && target.children.length == 0
            console.log('show page group ' + groupIndex)
            // if (target.children.length > 0) {
            // }
            // target.style.minHeight = ''
            setShow(true)
          } else {
            // target.replaceChildren()
            console.log('hide page group ' + groupIndex)
            if (target.children.length > 0) {
              target.style.minHeight = target.offsetHeight + 'px'
            }
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
  }, [pages, groupIndex, groupSize])

  useEffect(() => {
    //observe changes in the intersection of page

    if (divRef.current) {
      const callback = (entries, pageObserver) => {
        entries.forEach((entry) => {
          const target = entry.target
          const pageNum = parseInt(target.dataset.index) + 1
          const pageIndex = parseInt(target.dataset.pageIndexInGroup)
          if (entry.isIntersecting) {
            console.log('show page ' + pageNum)

            if (target.children.length == 0) {
              const page = pages[pageIndex]
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

              const renderTask = page.render(renderContext)
              renderTask.promise.then(() => {
                target.replaceChildren(canvas)
                console.log(`Page ${pageNum} rendered`)
              })
            }
          } else {
            console.log('hide page ' + pageNum)
          }
        })
      }

      pageObserverRef.current = new IntersectionObserver(
        callback,
        observerOptions
      )
    }

    return () => {
      if (pageObserverRef.current) {
        pageObserverRef.current.disconnect()
      }
    }
  }, [pages, groupIndex, groupSize])

  return (
    <>
      <div
        ref={divRef}
        className='p-4 md:p-6 xl:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8'
      >
        {show
          ? pages.map((page, i) => (
              <PDFPage
                key={i}
                page={page}
                pageIndexInGroup={i}
                pageObserverRef={pageObserverRef}
              />
            ))
          : null}
      </div>
    </>
  )
}

function PDFDoc({ pdfData, pdfURL, pageGroupSize = 120 }) {
  // const observerRef = useRef(null)
  const [pages, setPages] = useState([])
  const [divKey, setDivKey] = useState(Date.now())

  const numberOfPageGroup = Math.ceil(pages.length / pageGroupSize)

  // useEffect(() => {
  //   if (pages.length > 0) {
  //     const options = {
  //       // root: null,
  //       rootMargin: '500px 0px',
  //       // threshold: null,
  //     }

  //     const callback = (entries, observer) => {
  //       entries.forEach((entry) => {
  //         // Each entry describes an intersection change for one observed
  //         // target element:
  //         //   entry.boundingClientRect
  //         //   entry.intersectionRatio
  //         //   entry.intersectionRect
  //         //   entry.isIntersecting
  //         //   entry.rootBounds
  //         //   entry.target
  //         //   entry.time

  //         const target = entry.target
  //         if (entry.isIntersecting && target.children.length == 0) {
  //           const pageNum = parseInt(target.dataset.index) + 1
  //           console.log('show page ' + pageNum)

  //           const page = pages[pageNum - 1]
  //           // Prepare canvas using PDF page dimensions

  //           const canvas = document.createElement('canvas')
  //           canvas.setAttribute('class', 'w-full')
  //           const context = canvas.getContext('2d')
  //           const scale = 1.5
  //           const viewport = page.getViewport({ scale: scale })
  //           canvas.height = viewport.height
  //           canvas.width = viewport.width

  //           // Render PDF page into canvas context
  //           const renderContext = {
  //             canvasContext: context,
  //             viewport: viewport,
  //           }

  //           target.replaceChildren(canvas)
  //           const renderTask = page.render(renderContext)
  //           renderTask.promise.then(() => {
  //             console.log(`Page ${pageNum} rendered`)
  //           })
  //         } else {
  //           // target.replaceChildren()
  //         }
  //       })
  //     }

  //     observerRef.current = new IntersectionObserver(callback, options)
  //   }

  //   return () => {
  //     if (observerRef?.current) {
  //       observerRef.current.disconnect()
  //     }
  //   }
  // }, [pages])

  useEffect(() => {
    const handleWindowWidthChange = debounce(() => {
      if (window.lastWidth != window.innerWidth) {
        console.log(window.innerWidth)
        window.lastWidth = window.innerWidth
        setDivKey(Date.now())
      }
    }, 200)
    window.addEventListener('resize', handleWindowWidthChange)
    return () => {
      window.removeEventListener('resize', handleWindowWidthChange)
    }
  }, [])

  useEffect(() => {
    let pdf = null

    if (pdfData) {
      //
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
          key={divKey}
          // className='mt-6 -mx-6 -mb-16 p-6 flex flex-wrap gap-10 align-middle columns-2'
          // className='mt-6 -mx-6 -mb-16 p-4 md:p-6 xl:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8'
          className='mt-6 -mx-6 -mb-16'
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg,var(--fallback-b1,oklch(var(--b1))),var(--fallback-b1,oklch(var(--b1))) 13px,var(--fallback-pc,oklch(var(--pc))) 13px,var(--fallback-pc,oklch(var(--pc))) 14px)',
            backgroundSize: '40px 40px',
          }}
        >
          {/* {pages.map((page, i) => (
            <PDFPage key={i} page={page} observerRef={observerRef} />
          ))} */}
          {new Array(numberOfPageGroup).fill().map((item, index) => (
            <PDFPageGroup
              key={index}
              pages={pages.slice(
                index * pageGroupSize,
                index * pageGroupSize + pageGroupSize
              )}
              groupIndex={index}
              groupSize={pageGroupSize}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default PDFDoc
