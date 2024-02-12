import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Signika({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kanban App",
  description: "To do magement app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="flex justify-center flex-col min-h-screen items-center pt-6 md:pt-12 lg:container sm:mx-auto 2xl:px-60 ">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
