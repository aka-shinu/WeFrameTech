// import { Inter } from 'next/font/google';
// import "../styles/fonts.css"

import "./globals.css";
import "../styles/style.css";
export const metadata = {
  title: 'WeFrameTech Dashboard',
  description: 'A modern, responsive dashboard application built with Next.js and React, featuring real-time progress tracking and interactive UI components.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`antialiased`}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
