import Nav from "@/components/Nav";
import { Metadata } from "next/types";
import './globals.scss';

export const metadata: Metadata = {
  title: 'Rachit Kanaujia - Frontend Engineer & Full Stack Developer',
  description: 'Portfolio of Rachit Kanaujia, a Frontend Engineer specializing in React, Angular, and modern web technologies. Building scalable, high-performance web applications.',
  keywords: 'Rachit Kanaujia, Frontend Engineer, React Developer, Angular, TypeScript, Full Stack Developer',
  authors: [{ name: 'Rachit Kanaujia' }],
  openGraph: {
    title: 'Rachit Kanaujia - Frontend Engineer & Full Stack Developer',
    description: 'Portfolio showcasing projects in React, Angular, and modern web technologies',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
