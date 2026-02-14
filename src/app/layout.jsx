import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const playFairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
});

export const metadata = {
  title: "Johan Philip",
  description: "A website by Johan Philip",
  openGraph: {
    title: "Johan Philip",
    description: "Software Engineer, Drummer and an Avid Sports Fanatic",
    images: [
      {
        url: "/og/og.png", // Ensure this is in your /public folder
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johan Philip",
    description: "Software Engineer, Drummer and an Avid Sports Fanatic",
    images: ["/og/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playFairDisplay.variable} font-sans flex flex-col min-h-screen w-screen items-center justify-center dark:bg-black antialiased`}
      >
        <div className="max-w-[900px] w-full py-10">
          <HeroSection />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
