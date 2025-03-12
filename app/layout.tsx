import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EU AI Act: Belangrijke Data voor Compliance",
  description: "Een interactieve tijdlijn die de belangrijkste data en verplichtingen van de EU AI Act toont.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Waterthema achtergrond elementen */}
        <div className="fixed inset-0 bg-blue-50/5 pointer-events-none" />
        
        {children}
      </body>
    </html>
  );
}
