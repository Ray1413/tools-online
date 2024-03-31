import { useEffect, useState } from 'react'
import PDFPageGroup from './PDFPageGroup'

function PDFDoc({ pdfData, pdfURL, pageGroupSize = 120 }) {
  const [pages, setPages] = useState([])

  const numberOfPageGroup = Math.ceil(pages.length / pageGroupSize)

  useEffect(() => {
    let pdf = null

    const loadPDF = async () => {
      let loadingTask = null
      if (pdfData) {
        loadingTask = pdfjsLib.getDocument({ data: pdfData })
      } else if (pdfURL) {
        loadingTask = pdfjsLib.getDocument(pdfURL)
      }

      if (loadingTask) {
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
    }
    loadPDF()

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
        <div>
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
