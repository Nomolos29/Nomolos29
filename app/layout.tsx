import type { Metadata } from "next";
import { Geist, Geist_Mono, Italianno, Rubik_Maze, Alfa_Slab_One } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { ThemeProvider } from "@/lib/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: "400",
})

const rubikMaze = Rubik_Maze({
  variable: "--font-rubikMaze",
  subsets: ["latin"],
  weight: "400"
});

const alfaSlabOne = Alfa_Slab_One({
  variable: "--font-alfaSlabOne",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Sunday Solomon | Front-End Developer",
  description: "Front-end developer specializing in responsive, SEO-optimized interfaces with React and Next.js. Building fast, accessible, and delightful web products.",
  metadataBase: new URL("https://nomolos29-portfolio.vercel.app"),
  openGraph: {
    title: "Sunday Solomon | Front-End Developer",
    description: "Front-end developer specializing in responsive, SEO-optimized interfaces with React and Next.js.",
    type: "website",
    images: [
      {
        url: "/Sunday Solomon.jpeg",
        width: 1200,
        height: 630,
        alt: "Sunday Solomon — Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunday Solomon | Front-End Developer",
    description: "Front-end developer specializing in responsive, SEO-optimized interfaces with React and Next.js.",
    creator: "@Nomoreloss29",
    images: ["/Sunday Solomon.jpeg"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${italianno.variable} ${rubikMaze.variable} ${alfaSlabOne.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
