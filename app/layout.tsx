import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  variable: '--font-sans', 
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({ 
  variable: '--font-serif', 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'North Star Limo | Premier Ground Transportation in CT & NY',
  description: 'Luxury ground transportation services. Premium airport transfers, corporate travel, weddings & event services across Connecticut and New York. 24/7 availability.',
  keywords: 'limo service, luxury transportation, airport transfers, corporate transportation, event services, Connecticut, New York, limousine',
  creator: 'North Star Limo',
  metadataBase: new URL('https://northstarlimo.com'),
  alternates: {
    canonical: 'https://northstarlimo.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://northstarlimo.com',
    siteName: 'North Star Limo',
    title: 'North Star Limo | Premier Ground Transportation',
    description: 'Luxury ground transportation services with 15+ years of experience',
    images: [
      {
        url: 'https://northstarlimo.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'North Star Limo - Premium Transportation',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f5ef' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1120' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
