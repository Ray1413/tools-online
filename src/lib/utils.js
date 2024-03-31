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
