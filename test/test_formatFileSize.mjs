import { formatFileSize } from '../src/lib/utils.mjs'

console.log(`formatFileSize(): ${formatFileSize()}`)
console.log(`formatFileSize('abc'): ${formatFileSize('abc')}`)
console.log(`formatFileSize(123): ${formatFileSize(123)}`)
console.log(`formatFileSize(1234): ${formatFileSize(1234)}`)
console.log(`formatFileSize(1234567): ${formatFileSize(1234567)}`)
console.log(`formatFileSize(123456789): ${formatFileSize(123456789)}`)
console.log(`formatFileSize(12345679000): ${formatFileSize(12345679000)}`)
console.log(`formatFileSize(12345679000): ${formatFileSize(12345679000000)}`)
console.log(`formatFileSize(12345679000): ${formatFileSize(12345679000000000)}`)
