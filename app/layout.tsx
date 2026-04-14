'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "@/contexts/UserContext";
import "./globals.css";
import { MopProvider } from "@/contexts/MopContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <UserProvider>
        <MopProvider>
          <body className="min-h-full flex flex-col">{children}</body>
        </MopProvider>
      </UserProvider>


    </html>
  );
}
