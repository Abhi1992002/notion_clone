import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Toaster} from "sonner"
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexProvider } from '@/components/providers/convex-provider'
import { ModalProvider } from '@/components/providers/modal-provider'
import { EdgeStoreProvider } from '../lib/edgestore';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jotion',
  description: 'This is clone of notion for fun and implement my skill to build it',
  icons:{
    icon:[
      {
        media : "(prefers-color-scheme: light)",
        url : "/logo-dark.svg",
        href : "/logo-dark.svg",
      },
      {
        media : "(prefers-color-scheme: dark)",
        url : "/logo.svg",
        href : "/logo.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexProvider>
          <EdgeStoreProvider>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange storageKey='mode'>
          <Toaster position='bottom-center' />
          <ModalProvider />
          
        {children}
        </ThemeProvider>
        </EdgeStoreProvider>
        </ConvexProvider> 
        </body>
    </html>
  )
}
