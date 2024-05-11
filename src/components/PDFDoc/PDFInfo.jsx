import { formatFileSize } from '@/lib/utils.mjs'
import TextEllipsisMiddle from '@/components/TextEllipsisMiddle'

function PDFInfo({ pdfFile, pdf }) {
  return (
    <>
      <div className='text-lg grid grid-cols-[100px_1fr] gap-1'>
        {/* <div>File name:</div>
        <div
          className='relative overflow-hidden'
          style={{ height: '1.75rem', lineHeight: '1.75rem' }}
        >
          <div style={{ maxHeight: '3.5rem' }}>{pdfFile?.name}</div>

          <div
            className='grid grid-cols-2 relative top-[-3.5rem] bg-base-100 overflow-hidden'
            title={pdfFile?.name}
            style={{ height: '1.75rem' }}
          >
            <div className=''>{pdfFile?.name}</div>

            <div
              className='relative whitespace-nowrap overflow-x-hidden overflow-ellipsis'
              style={{
                height: '1.75rem',
                direction: 'rtl',
              }}
            >
              <span
                style={{
                  direction: 'ltr',
                  unicodeBidi: 'bidi-override',
                }}
              >
                {pdfFile?.name}
              </span>
            </div>
          </div>
        </div> */}

        {/* <div>File name:</div>
        <div
          className='relative overflow-hidden'
          style={{ height: '1.75rem', lineHeight: '1.75rem' }}
        >
          <div style={{ maxHeight: '3.5rem' }}>{pdfFile?.name}</div>

          <div
            className='grid grid-cols-2 relative top-[-3.5rem] bg-base-100 overflow-hidden'
            title={pdfFile?.name}
            style={{ height: '1.75rem' }}
          >
            <div
              className='relative text-justify break-all'
              style={{
                height: '1.75rem',
              }}
            >
              <span>{pdfFile?.name}</span>
            </div>

            <div
              className='relative whitespace-nowrap overflow-x-hidden overflow-ellipsis'
              style={{
                height: '1.75rem',
                direction: 'rtl',
              }}
            >
              <span
                style={{
                  direction: 'ltr',
                  unicodeBidi: 'bidi-override',
                }}
              >
                {pdfFile?.name}
              </span>
            </div>
          </div>
        </div> */}

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
