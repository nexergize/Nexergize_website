"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import ClickSpark from "@/components/animations/ClickSpark/ClickSpark"; // adjust path if different

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`relative bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <ClickSpark
          >
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ClickSpark>
        </Providers>
      </body>
    </html>
  );
}
