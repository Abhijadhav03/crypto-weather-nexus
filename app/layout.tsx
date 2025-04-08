import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/theme-provider'

const inter = Inter({ subsets: ['latin'] })

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
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

