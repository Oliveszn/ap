import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

// const timesNewRoman = localFont({
//   src: [
//     {
//       path: "../../public/fonts/times-new-roman.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/times-new-roman-bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-times",
//   display: "swap",
// });

// const helveticaNeue = localFont({
//   src: [
//     {
//       path: "../../public/fonts/helvetica-neue-light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/helvetica-neue-regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/helvetica-neue-medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/helvetica-neue-bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-helvetica",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Audemars Piguet | Swiss Luxury Watches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${timesNewRoman.variable} ${helveticaNeue.variable}`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
