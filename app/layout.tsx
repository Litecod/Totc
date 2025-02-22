import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "TOTC LEARNING",
  description: "this a platform that can help you learn skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1550px] xl:mx-auto"
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
