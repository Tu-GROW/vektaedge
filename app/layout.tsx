import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vektaedge Technologies',
  description:
    'Vektaedge Technologies is a Kenyan technology company building practical, reliable, and scalable digital solutions for businesses and communities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
