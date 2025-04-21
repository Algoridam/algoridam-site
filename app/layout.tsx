import type { Metadata } from 'next';
import './globals.css';
import LanguageWrapper from '@/components/LanguageWrapper';

export const metadata: Metadata = {
  title: 'Algoridam',
  description: '',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageWrapper>
      {children}
    </LanguageWrapper>
  );
}
