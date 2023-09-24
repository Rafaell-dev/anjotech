import SimpleNavbar from '@/components/SimpleNavbar';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anjotech',
  description: 'Especialistas em transformação digital',
};

export default function PurchaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className='relative bg-primary-anjo-100/50'>
        <SimpleNavbar />
        <main >{children}</main>
      </body>
    </html>
  );
}
