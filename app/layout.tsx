import type { Metadata } from 'next';
import { Lora, Libre_Franklin } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-libre-franklin',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tara Wagner | Healthcare PR & Strategic Communications',
  description: 'I help healthcare innovators tell stories that matter. 20+ years of PR experience with companies transforming how we access and experience care.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${libreFranklin.variable}`}>
      <body className="font-sans flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
