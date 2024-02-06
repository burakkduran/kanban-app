import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
