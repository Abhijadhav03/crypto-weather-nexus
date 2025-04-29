import './globals.css';
import ReactQueryProvider from '@/context/react-query-provider';
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/theme-provider'
import type { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] })
import Providers from './providers';

export const metadata = {
  title: 'Crypto weather nexus',
  description: 'Assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        ><ReactQueryProvider>
          {children}
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

