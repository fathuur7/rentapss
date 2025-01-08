import Head from "next/head";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rent Girl/Boy Friend",
  description: "Rent Girl/Boy Friend is a platform that allows you to rent a friend for a day.",
  keywords: [
    "rent",
    "girl",
    "boy",
    "friend",
    "rent a friend",
    "rent a friend for a day",
    "rent a friend for a week",
    "rent a friend for a month",
    "rent a friend for a year",
    "rent a friend for a lifetime",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Link to Favicon */}
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </Head>
      <body className={`${PoppinsFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
