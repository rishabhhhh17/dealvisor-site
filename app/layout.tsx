import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'DealVisor — The operating system for investment banking',
  description:
    'Run every mandate — from teaser to SPA — in one workspace. Pipeline, IMs, counterparty intel, AI memory, and your calendar. Together.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dealvisor.vercel.app'),
  openGraph: {
    title: 'DealVisor — The operating system for investment banking',
    description: 'Run every mandate — from teaser to SPA — in one workspace.',
    url: '/',
    siteName: 'DealVisor',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'DealVisor', description: 'The operating system for investment banking.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-canvas text-fg font-sans antialiased">{children}</body>
    </html>
  );
}
