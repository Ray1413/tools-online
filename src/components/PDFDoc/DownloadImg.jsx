import { useState, useRef } from 'react'
import { RiFolderDownloadLine } from 'react-icons/ri'
import { BsXCircle } from 'react-icons/bs'
import JSZip from 'jszip'
import { isInt, toBlobPromise, saveBlob, sleep } from '@/lib/utils.mjs'

function DownloadImg({ pdfFile, pdf }) {
  const [downloadType, setDownloadType] = useState(0)
  const [downPageRange, setDownPageRange] = useState('')
  const renderPages = useRef(null)
  const [isDownPageRangeValid, setIsDownPageRangeValid] = useState(true)
  // const [imgSrc, setImgSrc] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingMsg, setProcessingMsg] = useState(null)
  const cancelDownloadRef = useRef(false)
  const [cancelDownload, setCancelDownload] = useState(false)

  if ((renderPages.current == null || downloadType == 0) && pdf) {
    const numOfPages = pdf?.numPages || 0
    renderPages.current = new Array(numOfPages).fill().map((item, i) => i + 1)
  }

  const validateDownPageRange = (value) => {
    let isValid = true,
      renderlist = []
    try {
      if (value) {
        value = value.trim()
        // Check value. valid input: '1, 2, 5-10'
        const list = value.split(',')
        const totalPages = pdf?.numPages
        for (let i = 0; i < list.length; i++) {
          let item = list[i].trim()
          // item should be a number or a range
          if (isInt(item)) {
            let val = parseInt(item)
            if (val > 0 && (!pdf || val <= totalPages)) {
              renderlist.push(val)
            } else {
              isValid = false
              break
            }
          } else {
            let rangeList = item.split('-')

            if (rangeList.length != 2) {
              isValid = false
              break
            }

            rangeList = rangeList
              .map((i) => i.trim())
              .filter((i) => isInt(i) && i > 0 && (!pdf || i <= totalPages))
              .map((i) => parseInt(i))

            if (rangeList.length == 2 && rangeList[0] < rangeList[1]) {
              for (let i = rangeList[0]; i <= rangeList[1]; i++) {
                renderlist.push(i)
              }
            } else {
              isValid = false
              break
            }
          }
        }

        renderlist = renderlist
          .filter((item, index, array) => array.indexOf(item) == index)
          .sort((a, b) => a - b)
      }
    } catch (error) {
      console.error(error)
    }
    return [isValid && renderlist.length > 0, renderlist]
  }

  const handleDownloadTypeChange = (event) => {
    const value = event.target.value
    setDownloadType(value)

    if (pdf) {
      const numOfPages = pdf.numPages
      renderPages.current = []

      switch (parseInt(value)) {
        case 0:
          // Download all pages
          renderPages.current = new Array(numOfPages)
            .fill()
            .map((item, i) => i + 1)
          break
        case 1:
          // Download certain pages
          const [isValid, renderlist] = validateDownPageRange(downPageRange)
          setIsDownPageRangeValid(isValid)
          if (isValid) {
            renderPages.current = renderlist
          }
          break
      }
    }
  }

  const handleDownPageRangeChange = (value) => {
    setDownPageRange(value)

    const [isValid, renderlist] = validateDownPageRange(value)
    setIsDownPageRangeValid(isValid)
    if (isValid) {
      renderPages.current = renderlist
    } else {
      renderPages.current = []
    }
  }

  const renderPage = async (pdf, pageNum) => {
    if (pdf && pageNum) {
      const page = await pdf.getPage(pageNum)

      let viewport = page.getViewport({ scale: 1 })
      if (viewport.height <= 500 || viewport.width <= 500) {
        viewport = page.getViewport({ scale: 2 })
      } else if (viewport.height <= 1000 || viewport.width <= 1000) {
        viewport = page.getViewport({ scale: 1.5 })
      }

      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      canvas.height = viewport.height
      canvas.width = viewport.width
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      }
      await page.render(renderContext).promise

      // const dataURL = canvas.toDataURL()
      // const dataURL = canvas.toDataURL('image/jpeg', 0.6)
      // setImgSrc(dataURL)
      // console.log(dataURL)

      const type = 'image/jpeg'
      const quality = 0.6
      const imgBlob = await toBlobPromise(canvas, type, quality)
      // console.log('imgBlob', imgBlob)
      // saveBlob(imgBlob, '1.jpeg')

      return imgBlob
    }
  }

  const handleDownloadBtnClick = async () => {
    // console.log(renderPages.current)
    // return

    const pdfName = pdfFile.name.replace(/.pdf$/i, '')

    const zip = new JSZip()
    const pdfFolder = zip.folder(pdfName)

    setIsProcessing(true)
    setCancelDownload(false)
    cancelDownloadRef.current = false

    const totalPages = renderPages?.current?.length

    let totalBlobSize = 0
    for (let i = 0; i < renderPages?.current?.length || 0; i++) {
      if (!cancelDownloadRef.current) {
        setProcessingMsg(`Processing: ${i + 1} / ${totalPages}`)
        const pageNum = renderPages.current[i]
        const imgBlob = await renderPage(pdf, pageNum)
        pdfFolder.file(`${pageNum}.jpeg`, imgBlob)
        totalBlobSize += imgBlob.size
      } else {
        break
      }
    }
    // console.log('totalBlobSize', totalBlobSize)

    if (!cancelDownloadRef.current) {
      setProcessingMsg('Compressing...')
      const zipfileBlob = await zip.generateAsync({
        type: 'blob',
        // compression: 'DEFLATE',
        // compressionOptions: {
        //   level: 6,
        // },
      })
      // console.log('zipfileBlob', zipfileBlob)

      // console.log(
      //   'zip rate: ' + (totalBlobSize - zipfileBlob.size) / totalBlobSize
      // )

      saveBlob(zipfileBlob, `${pdfName}.zip`)
    }

    setIsProcessing(false)
    setProcessingMsg(null)
    // setCancelDownload(false)
    // cancelDownloadRef.current = false
  }

  const handleCancelDownloadBtnClick = () => {
    setCancelDownload(true)
    cancelDownloadRef.current = true
    setProcessingMsg('Canceling')
  }

  return (
    <>
      <div className='flex flex-col gap-3'>
        <div>
          <div className=''>
            <div className='inline-block'>
              <label className='label cursor-pointer justify-start gap-2'>
                <input
                  type='radio'
                  name='downloadType'
                  className='radio checked:bg-primary'
                  value={0}
                  checked={downloadType == 0}
                  onChange={handleDownloadTypeChange}
                />
                <span className='label-text text-base'>Download all pages</span>
              </label>
            </div>
          </div>

          <div className=''>
            <div className='inline-block'>
              <label className='label cursor-pointer justify-start gap-2 flex-wrap'>
                <input
                  type='radio'
                  name='downloadType'
                  className='radio checked:bg-primary'
                  value={1}
                  checked={downloadType == 1}
                  onChange={handleDownloadTypeChange}
                />
                <span className='label-text text-base'>
                  Download certain pages
                </span>
                <input
                  type='text'
                  className={`input input-bordered ${
                    isDownPageRangeValid ? '' : 'input-error'
                  } max-w-xs grow`}
                  placeholder='e.g. "1, 2, 5-10"'
                  value={downPageRange}
                  onChange={(e) => handleDownPageRangeChange(e.target.value)}
                  disabled={downloadType != 1}
                />
              </label>
            </div>
          </div>
        </div>

        <div className='flex gap-3'>
          {/* <div className='flex-grow'></div> */}

          <div className={`${isProcessing ? 'cursor-not-allowed' : null}`}>
            <button
              className={`btn btn-primary text-base-200 ${
                isProcessing ? 'opacity-50 pointer-events-none' : null
              }`}
              onClick={handleDownloadBtnClick}
              // disabled={isProcessing ? 'disabled' : null}
            >
              <RiFolderDownloadLine className='w-6 h-6' />
              Download
            </button>
          </div>

          <div
            className={`${isProcessing ? null : 'hidden'} ${
              cancelDownload ? 'cursor-not-allowed' : null
            }`}
          >
            <button
              className={`btn btn-error text-base-200 ${
                cancelDownload ? 'opacity-50 pointer-events-none' : null
              }`}
              onClick={handleCancelDownloadBtnClick}
            >
              <BsXCircle className='w-5 h-5' />
              Cancel
            </button>
          </div>
        </div>

        {/* <img src={imgSrc} /> */}

        {isProcessing ? (
          <div className='animate-pulse'>{processingMsg}</div>
        ) : null}
      </div>
    </>
  )
}

export default DownloadImg
