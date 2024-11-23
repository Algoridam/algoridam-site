import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LanguageWrapper from '@/components/LanguageWrapper';

export const metadata: Metadata = {
  title: 'Algoridam',
  description: '',
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
