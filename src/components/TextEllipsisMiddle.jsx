import { useEffect, useState, useRef } from 'react'

function TextEllipsisMiddle({ content }) {
  const divRef = useRef(null)
  const [lineHeight, setLineHeight] = useState(null)

  useEffect(() => {
    const divEl = divRef.current
    if (divEl) {
      const lineHeight = parseFloat(getComputedStyle(divEl).lineHeight)
      if (!isNaN(lineHeight)) {
        setLineHeight(lineHeight)
      }
    }

    return () => {}
  }, [])

  return (
    <div
      ref={divRef}
      style={{
        position: 'relative',
        display: lineHeight ? 'block' : 'none',
        overflow: 'hidden',
        height: lineHeight ? `${lineHeight}px` : null,
      }}
    >
      <div
        style={{
          maxHeight: lineHeight ? `${2 * lineHeight}px` : null,
        }}
      >
        {content}
      </div>

      <div
        title={content}
        className='bg-base-100'
        style={{
          position: 'relative',
          top: lineHeight ? `${-2 * lineHeight}px` : null,
          height: lineHeight ? `${lineHeight}px` : null,
          overflow: 'hidden',
          // background: 'lightBlue',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              wordBreak: 'break-all',
              textAlign: 'justify',
            }}
          >
            {content}
          </span>

          <span
            dir='rtl'
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <bdi
              dir='ltr'
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              {content}
            </bdi>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TextEllipsisMiddle
