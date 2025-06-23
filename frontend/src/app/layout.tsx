import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '../../styles/globals.css'; // Tailwind
import '../../styles/legacy.css';   // Your custom styles

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Brian Ceasar | Front-End Developer",
  description: "Passionate front-end developer specializing in React, TypeScript, and modern web technologies. Creating exceptional digital experiences in Tanzania.",
  keywords: "Brian Ceasar, Front-End Developer, React Developer, TypeScript, Web Developer, Tanzania",
  authors: [{ name: "Brian Ceasar" }],
  viewport: "width=device-width, initial-scale=1",
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
        className={`${poppins.variable} font-sans antialiased bg-white text-gray-900 selection:bg-[#B00D1C]/20 selection:text-[#B00D1C]`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {children}
      </body>
    </html>
  );
}