export const debounce = (func, timeout = 200) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

export const debounce_leading = (func, timeout = 200) => {
  let timer
  return (...args) => {
    if (!timer) {
      func.apply(this, args)
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = undefined
    }, timeout)
  }
}

export const formatFileSize = (size) => {
  if (!isNaN(size)) {
    const sizeUnits = ['iB', 'KiB', 'MiB', 'GiB', 'TiB']
    let i = 0
    let result = ''

    while (i < sizeUnits.length - 1 && size >= 1024) {
      i++
      size = size / 1024
    }
    return `${size.toFixed(2)} ${sizeUnits[i]}`
  } else {
    return ''
  }
}

export const isInt = (value) => {
  var x
  if (isNaN(value)) {
    return false
  }
  x = parseFloat(value)
  return (x | 0) === x
}

export const toBlobPromise = (canvas, type = 'image/jpeg', quality = 0.5) =>
  new Promise((resolve, reject) => {
    try {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob)
          } else {
            reject('Cannot convert image')
          }
        },
        type,
        quality
      )
    } catch (error) {
      reject(error)
    }
  })

export const saveBlob = (blob, fileName) => {
  if (blob && fileName) {
    const aTag = document.createElement('a')
    const url = window.URL.createObjectURL(blob)
    aTag.href = url
    aTag.download = fileName
    aTag.click()
    window.URL.revokeObjectURL(url)
  }
}

export const sleep = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time)
  })
