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
