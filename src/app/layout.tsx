import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Toaster } from '@/components/ui/sonner'

import ThemeProvider from '@/providers/theme-provider'
import ReactQueryProvider from '@/providers/react-query'
import SessionProvider from '@/providers/session-provider'
import ModalProvider from '@/providers/modal-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your connected workspace for wiki, docs & projects | Emotion',
  description:
    "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange>
          <SessionProvider>
            <ReactQueryProvider>
              {children}
              <ModalProvider />
              <Toaster richColors />
            </ReactQueryProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
