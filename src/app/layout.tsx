import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import DarkVeil from "@/components/layout/background";
import NavBar from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Bikash",
  description: "Bikash's Agency portfolio",
  icons: {
    icon: '../../public/text-1755271211288.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${dancingScript.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <div className="fixed top-5 z-50 w-full lg:w-[40%] left-1/2 transform -translate-x-1/2">
            <NavBar />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 relative w-full flex items-center justify-center">
            <div className="fixed inset-0 w-full h-full">
              <DarkVeil />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full lg:w-[55%] flex items-start">
              {children}
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10">
            {/* <Footer /> */}
            <div className="relative z-10">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
