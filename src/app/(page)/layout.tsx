import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { CustomButton, SpeakWithUs } from '@/components';

export const metadata: Metadata = {
  title: 'Anjotech',
  description: 'Especialistas em criação de websites',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className='relative'>
        <Navbar />
        <main>{children}</main>
        <SpeakWithUs />
        <Footer />
      </body>
    </html>
  );
}
