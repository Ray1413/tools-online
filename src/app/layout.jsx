import { Drawer, DrawerToggle } from '@/components/Drawer'
import Navbar from '@/components/Navbar'
import MainContent from '@/components/MainContent'
import Sidebar from '@/components/Sidebar'
import BackToTopBtn from '@/components/BackToTopBtn'
// import Sidebar from '@/components/Sidebar_bak'

// import { Inter } from 'next/font/google'
import '@/app/tailwind.css'
import '@/app/globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tools Online',
  description: 'Tools Online',
}

export default function RootLayout({ children }) {
  const drawerId = 'my-drawer'
  return (
    <html lang='en'>
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <Navbar leftSide={<DrawerToggle drawerId={drawerId} />} />
        <Drawer
          drawerId={drawerId}
          drawerSide={<Sidebar />}
          drawerContent={<MainContent>{children}</MainContent>}
        />
        <BackToTopBtn />
      </body>
    </html>
  )
}
