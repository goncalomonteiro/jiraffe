import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const plusJakartaSans = localFont({
  src: [
    {
      path: '../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'jiraffe',
  description:
    'This is a solution to the Kanban task management web app challenge on Frontend Mentor.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
