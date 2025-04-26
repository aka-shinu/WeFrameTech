
import "./globals.css";
import "../styles/style.css";
import { Inter } from "next/font/google";
// import "../styles/fonts.css"
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export const metadata = {
  title: "WeFrameTech Dashboard",
  description:
    "A modern, responsive dashboard application built with Next.js and React, featuring real-time progress tracking and interactive UI components.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.className} antialiased`}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
