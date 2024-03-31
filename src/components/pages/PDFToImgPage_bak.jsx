'use client'

import Script from 'next/script'
import { useRef, useEffect } from 'react'
import Dropzone from '@/components/Dropzone'

function PDFToImgPage() {
  const fileListRef = useRef(null)
  const pdfjsLibRef = useRef(null)

  const handleFileListChange = (fileList) => {
    fileListRef.current = fileList
  }

  const handleConverBtnClick = async () => {
    // const pdfjsLib = pdfjsLibRef.current
    // console.log(pdfjsLib)
    // if (fileListRef.current && fileListRef.current.length > 0) {
    //   console.log(fileListRef.current.length)
    // } else {
    //   alert('Please choose a PDF file.')
    // }
    // var pdfData = atob(
    //   'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
    //     'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
    //     'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
    //     'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
    //     'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
    //     'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
    //     'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
    //     'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
    //     'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
    //     'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
    //     'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
    //     'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
    //     'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G'
    // )
    // var loadingTask = pdfjsLib.getDocument({ data: pdfData })
    // var pdf = await loadingTask.promise
    // console.log(pdf)
    // const loadingTask = pdfjsLib.getDocument('/sds_data_dict.pdf')
    // loadingTask.promise.then(function (pdf) {
    //   console.log(pdf)
    // })

    pdfjsLib.GlobalWorkerOptions.workerSrc = '/js/pdf.worker.min.mjs'
    const pdfURL = '/sds_data_dict.pdf'
    var loadingTask = pdfjsLib.getDocument(pdfURL)
    loadingTask.promise.then(
      function (pdf) {
        console.log('PDF loaded')

        // Fetch the first page
        var pageNumber = 1
        pdf.getPage(pageNumber).then(function (page) {
          console.log('Page loaded')

          var scale = 1.5
          var viewport = page.getViewport({ scale: scale })

          // Prepare canvas using PDF page dimensions
          var canvas = document.getElementById('the-canvas')
          var context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width

          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport,
          }
          var renderTask = page.render(renderContext)
          renderTask.promise.then(function () {
            console.log('Page rendered')
          })
        })
      },
      function (reason) {
        // PDF loading error
        console.error(reason)
      }
    )
  }

  useEffect(() => {
    // ;(async function () {
    //   pdfjsLibRef.current = await import('pdfjs-dist/webpack.mjs')
    //   console.log(
    //     new URL('pdfjs-dist/build/pdf.worker.mjs', import.meta.url).toString()
    //   )
    //   if (typeof window !== 'undefined' && 'Worker' in window) {
    //     const urlObj = new URL(
    //       'pdfjs-dist/build/pdf.worker.mjs',
    //       import.meta.url
    //     )
    //     pdfjsLibRef.current.GlobalWorkerOptions.workerPort = new Worker(
    //       new URL('pdfjs-dist/build/pdf.worker.mjs', import.meta.url),
    //       { type: 'module' }
    //     )
    //     pdfjsLibRef.current.GlobalWorkerOptions.workerSrc = urlObj.toString()
    //   }
    // })()

    return () => {}
  }, [])

  return (
    <>
      <Script src='/js/pdf.min.mjs' type='module' />
      <div>
        <Dropzone handleFileListChange={handleFileListChange} />
        <div className='mt-2'>
          <button
            className='btn btn-neutral block ml-auto'
            onClick={handleConverBtnClick}
          >
            Conver
          </button>
        </div>
      </div>
      <div className='mt-2 border-2 border-gray-100'>
        <canvas id='the-canvas'></canvas>
      </div>
    </>
  )
}

export default PDFToImgPage
