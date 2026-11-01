import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Santhosh Jampana — Embedded Linux & Platform Engineer',
  description: 'From silicon to systems. Santhosh Kumar Reddy Jampana builds reliable ARM64 Linux platforms, voice AI, connected devices and software.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
