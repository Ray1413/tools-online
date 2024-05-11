import { formatFileSize } from '@/lib/utils.mjs'
import TextEllipsisMiddle from '@/components/TextEllipsisMiddle'

function PDFInfo({ pdfFile, pdf }) {
  return (
    <>
      <div className='text-lg grid grid-cols-[100px_1fr] gap-1'>
        <div>File name:</div>
        <div>
          <TextEllipsisMiddle content={pdfFile?.name} />
        </div>

        <div>File size:</div>
        <div>{formatFileSize(pdfFile?.size)}</div>
        <div>Pages:</div>
        <div>{pdf?.numPages}</div>
      </div>
    </>
  )
}

export default PDFInfo
