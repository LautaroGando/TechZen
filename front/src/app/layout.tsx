// Next
import type { Metadata } from "next";
import localFont from "next/font/local";

// Context
import { TokenProvider } from "@/context/TokenContext/TokenContext";
import { MenuProvider } from "@/context/MenuContext/MenuContext";

// Components
import Footer from "@/components/FooterComponents/Footer/Footer";
import Header from "@/components/HeaderComponents/Header/Header";

// Styles
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TechZen",
  description: "Descubre el futuro hoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pBColor scrollY`}
      >
        <TokenProvider>
          <MenuProvider>
            <Header />
            {children}
            <Footer />
          </MenuProvider>
        </TokenProvider>
      </body>
    </html>
  );
};