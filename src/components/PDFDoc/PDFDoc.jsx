import { useEffect, useState, useRef } from 'react'
import PDFPageGroup from './PDFPageGroup'
import PDFInfo from './PDFInfo'
import ToolBar from './ToolBar'
import DownloadImg from './DownloadImg'

function PDFDoc({ pdfFile, pdfData, pdfURL, pageGroupSize = 120 }) {
  const [pdf, setPdf] = useState(null)
  const [pages, setPages] = useState([])
  const [column, setColumn] = useState(3)
  const pdfInfoFirstRender = useRef(true)

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
          pdfInfoFirstRender.current = false

          pdf = await loadingTask.promise
          setPdf(pdf)
          // console.log(`PDF loaded (${pdf?.numPages} pages)`)

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
        setPdf(null)
        console.log('Destroy pdf')
      }
    }
  }, [pdfData, pdfURL])

  return (
    <>
      <div className='max-w-3xl mx-auto mt-6 min-h-60'>
        <div
          className={`p-6 min-h-60 border-2 border-base-200 ${
            pdf || !pdfInfoFirstRender.current ? 'flex' : 'hidden'
          } flex-col justify-between`}
        >
          <PDFInfo pdfFile={pdfFile} pdf={pdf} />

          <div className='divider'></div>

          <DownloadImg pdfFile={pdfFile} pdf={pdf} />
        </div>
      </div>

      <div
        className='mt-6 -mx-6 -mb-16'
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg,var(--fallback-b1,oklch(var(--b1))),var(--fallback-b1,oklch(var(--b1))) 13px,var(--fallback-pc,oklch(var(--pc))) 13px,var(--fallback-pc,oklch(var(--pc))) 14px)',
          backgroundSize: '40px 40px',
        }}
      >
        {pages.length <= 0 ? null : (
          <div>
            <ToolBar column={column} setColumn={setColumn} />

            {new Array(numberOfPageGroup).fill().map((item, index) => (
              <PDFPageGroup
                key={index}
                column={column}
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
      </div>
    </>
  )
}

export default PDFDoc
