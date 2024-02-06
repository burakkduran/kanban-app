import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";

const inter = Signika({ 
  subsets: ["latin"],
  weight: ["400"]
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
