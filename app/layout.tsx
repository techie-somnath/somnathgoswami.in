import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script';
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Somnath Goswami — Full-Stack Developer & Chart Analyst',
  description:
    'Full-stack engineer by trade, chart analyst by growing obsession.',
  generator: 'v0.app',
  icons: {
    icon: '/profile_image.jpg',
    shortcut: '/profile_image.jpg',
    apple: '/profile_image.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${plusJakartaSans.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2LG9W958QB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2LG9W958QB');
    `}
        </Script>

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
