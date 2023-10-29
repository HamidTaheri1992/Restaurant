import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import BigMenu from "@/components/bigMenu/bigMenu";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Restaurant",
  description: "Enjoy From My Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BigMenu />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
