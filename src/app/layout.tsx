import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import PasswordProtection from "../components/PasswordProtection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhrishit Khandhar - Biology Student & Researcher",
  description: "Portfolio of Dhrishit Khandhar - Biology student passionate about marine conservation, research, and science communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20 min-h-screen`}
      >
        <PasswordProtection>
          <Navigation />
          <main className="pt-20">
            {children}
          </main>
        </PasswordProtection>
      </body>
    </html>
  );
}
