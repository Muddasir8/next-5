import type { Metadata } from "next";
import {Lora} from "next/font/google";
import "./globals.css";


const lora = Lora({ subsets: ["latin"]})


export const metadata: Metadata = {
  title: {
    template: "%s | Exclusive",
    absolute: "Exclusive Shop"
  },
  description: "Front-end e-commerce application build with next.js 15 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lora.className}>
        {children}
      </body>
    </html>
  );
};
