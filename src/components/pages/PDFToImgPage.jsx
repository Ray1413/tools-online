'use client'

import { useRef, useState } from 'react'
import Script from 'next/script'
import Dropzone from '@/components/Dropzone'
import PDFDoc from '@/components/PDFDoc'
import { GrView } from 'react-icons/gr'
import { RiFolderDownloadLine } from 'react-icons/ri'

function PDFToImgPage() {
  const fileListRef = useRef(null)
  // const [pdf, setPDF] = useState(null)
  const canPreviewRef = useRef(true)
  const [pdfFile, setPdfFile] = useState(null)
  const [pdfData, setPDFData] = useState(null)
  const [pdfURL, setPDFURL] = useState(null)

  const handleFileListChange = (fileList) => {
    fileListRef.current = fileList
    canPreviewRef.current = true
    readPDF()
  }

  // const handlePreviewBtnClick = () => {
  //   if (!(fileListRef.current && fileListRef.current.length > 0)) {
  //     alert('Please choose a PDF file.')
  //     return
  //   }

  //   setPDF(null)
  //   const reader = new FileReader()
  //   reader.onload = async (evt) => {
  //     const pdfData = evt.target.result
  //     const loadingTask = pdfjsLib.getDocument({ data: pdfData })
  //     try {
  //       const pdf = await loadingTask.promise
  //       console.log('PDF loaded')
  //       setPDF(pdf)
  //     } catch (err) {
  //       // PDF loading error
  //       console.error(err)
  //     }
  //   }
  //   reader.readAsArrayBuffer(fileListRef.current[0])
  // }

  const readPDF = () => {
    if (!(fileListRef.current && fileListRef.current.length > 0)) {
      alert('Please choose a PDF file.')
      return
    }

    if (canPreviewRef.current == true) {
      canPreviewRef.current = false

      const reader = new FileReader()
      reader.onload = (evt) => {
        const pdfData = evt.target.result
        setPdfFile(fileListRef.current[0])
        setPDFData(pdfData)
      }
      reader.readAsArrayBuffer(fileListRef.current[0])
    }
  }

  const handlePreviewBtnClickTest = () => {
    readPDF()
  }

  // const handlePreviewBtnClickTest = () => {
  //   setPDFURL(null)
  //   let pdfURL = '/sds_data_dict.pdf'
  //   // pdfURL = '/SSM.pdf'
  //   // pdfURL = '/C_Primer_Plus.pdf'
  //   pdfURL = '/C_Primer_Plus_zh.pdf'
  //   setPDFURL(pdfURL)
  // }

  return (
    <>
      <Script
        src='/js/pdf.min.mjs'
        type='module'
        onLoad={() =>
          (pdfjsLib.GlobalWorkerOptions.workerSrc = '/js/pdf.worker.min.mjs')
        }
      />
      <div className='mx-auto px-6'>
        <div className='max-w-3xl mx-auto'>
          <Dropzone handleFileListChange={handleFileListChange} />

          {/* <div className='mt-3 flex gap-3'>
            <div className='flex-grow'></div>

            <button
              className='btn btn-primary text-base-200'
              onClick={handlePreviewBtnClickTest}
            >
              <GrView className='w-5 h-5' />
              Preview
            </button>

            <button className='btn btn-accent text-base-200'>
              <RiFolderDownloadLine className='w-6 h-6' />
              Download
            </button>
          </div> */}
        </div>

        <div
        // className='mt-6 -mx-6 -mb-16'
        // style={{
        //   backgroundImage:
        //     'repeating-linear-gradient(45deg,var(--fallback-b1,oklch(var(--b1))),var(--fallback-b1,oklch(var(--b1))) 13px,var(--fallback-pc,oklch(var(--pc))) 13px,var(--fallback-pc,oklch(var(--pc))) 14px)',
        //   backgroundSize: '40px 40px',
        // }}
        >
          <PDFDoc pdfFile={pdfFile} pdfData={pdfData} pdfURL={pdfURL} />
        </div>
      </div>
    </>
  )
}

export default PDFToImgPage
