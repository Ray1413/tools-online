// import dynamic from 'next/dynamic'

// const PDFToImgPage = dynamic(
//   async () => await import('@/components/pages/PDFToImgPage'),
//   {
//     ssr: false,
//   }
// )
import PDFToImgPage from '@/components/pages/PDFToImgPage'

function page() {
  return <PDFToImgPage />
}

export default page
