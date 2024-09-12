import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Olive holdings",
  description: "Olive holdings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"
        name="viewport"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-lato`}
      >
        {children}
      </body>
    </html>
  );
}
