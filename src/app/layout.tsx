import type { Metadata } from "next";
import '../../styles/globals.css'; // Tailwind
import '../../styles/legacy.css';   // Your custom styles
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Brian Ceasar | Front-End Developer",
  description: "Passionate front-end developer specializing in React, TypeScript, and modern web technologies. Creating exceptional digital experiences in Tanzania.",
  keywords: "Brian Ceasar, Front-End Developer, React Developer, TypeScript, Web Developer, Tanzania",
  authors: [{ name: "Brian Ceasar" }],
  openGraph: {
    title: "Brian Ceasar | Front-End Developer",
    description: "Passionate front-end developer creating exceptional digital experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans antialiased bg-white text-gray-900 selection:bg-[#B00D1C]/20 selection:text-[#B00D1C]"
        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
      >
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
