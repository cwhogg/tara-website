import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tara Wagner PR | Healthcare & Digital Health Public Relations',
  description: '20+ years leading PR and storytelling for mission-driven companies in healthcare, digital health, and virtual care.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
