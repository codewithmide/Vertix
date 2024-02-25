import './globals.css';
import type { Metadata } from 'next';
import SolanaProvider from '@/context/provider';

export const metadata: Metadata = {
  title: 'Vertix',
  description: 'Gamifying Education, Empowering Learners',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="poppins">
        <SolanaProvider>
          {children}
        </SolanaProvider>
      </body>
    </html>
  );
}
