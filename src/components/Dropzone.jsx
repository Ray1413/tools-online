'use client'

import React, { useRef, useEffect } from 'react'

const validateFiles = (fileList) => {
  let result = false
  try {
    if (fileList?.length > 0) {
      const file = fileList[0]
      // console.log(file)
      if (
        file.name.split('.').pop().toLowerCase() == 'pdf' &&
        file.type == 'application/pdf'
      ) {
        result = true
      }
    }
    return result
  } catch (err) {}
}

function Dropzone({ handleFileListChange }) {
  const fileInput = useRef(null)
  const dropzone = useRef(null)
  const bottomLayer = useRef(null)

  if (!handleFileListChange) {
    handleFileListChange = function () {}
  }

  useEffect(() => {
    const fileInputEl = fileInput.current
    const handleFileInputChange = (event) => {
      console.log('change', event)

      if (validateFiles(fileInputEl.files)) {
        handleFileListChange(fileInputEl.files)
      } else {
        fileInputEl.value = ''
        alert('Only support pdf file.')
      }
    }

    fileInputEl.onchange = handleFileInputChange

    // return () => {
    //   fileInputEl?.removeEventListener('change', handleFileInputChange)
    // }
  }, [])

  useEffect(() => {
    const dropzoneEl = dropzone.current
    const bottomLayerEl = bottomLayer.current

    const setEnterStyleForDropzone = () => {
      dropzoneEl.classList.add('border-primary', 'bg-primary', 'bg-opacity-30')
      // Array.from(dropzoneEl.children).forEach((c) => (c.style.display = 'none'))
      Array.from(dropzoneEl.children).forEach((c) =>
        bottomLayerEl.appendChild(c)
      )
    }

    const setLeaveStyleForDropzone = () => {
      dropzoneEl.classList.remove(
        'border-primary',
        'bg-primary',
        'bg-opacity-30'
      )
      Array.from(bottomLayerEl.children).forEach((c) =>
        dropzoneEl.appendChild(c)
      )
    }

    const handleDragenter = (event) => {
      event.preventDefault()
      // console.log('handleDragenter', event)
      setEnterStyleForDropzone()
    }
    const handleDragleave = (event) => {
      event.preventDefault()
      // console.log('handleDragleave', event)
      setLeaveStyleForDropzone()
    }
    const handleDragover = (event) => {
      event.preventDefault()
      // console.log('handleDragover', event)
    }
    const handleDrop = (event) => {
      event.preventDefault()
      console.log('handleDrop', event)
      setLeaveStyleForDropzone()

      // console.log('dataTransfer.items', event.dataTransfer.items)
      // ;[...event.dataTransfer.items].forEach((item, i) => {
      //   console.log(item)
      // })

      // console.log('dataTransfer.files', event.dataTransfer.files)

      if (validateFiles(event?.dataTransfer?.files)) {
        fileInput.current.files = event.dataTransfer.files
        handleFileListChange(fileInput.current.files)
      } else {
        fileInput.current.value = ''
        alert('Only support pdf file.')
      }
    }

    dropzoneEl.ondragenter = handleDragenter
    dropzoneEl.ondragleave = handleDragleave
    dropzoneEl.ondragover = handleDragover
    dropzoneEl.ondrop = handleDrop

    return () => {}
  }, [])

  return (
    <div className='relative w-full h-60'>
      <div
        ref={dropzone}
        className='absolute w-full h-full border-4 border-dashed border-base-200'
      >
        <div className='flex flex-col w-full h-full gap-4 justify-center items-center '>
          <span className='prose prose-xl'>Drag and drop a PDF file here</span>
          <span className='prose prose-xl'>OR</span>
          <input
            ref={fileInput}
            type='file'
            className='file-input file-input-bordered w-full max-w-xs'
            accept='application/pdf'
          />
        </div>
      </div>
      <div ref={bottomLayer} className='w-full h-full'></div>
    </div>
  )
}

export default Dropzone
