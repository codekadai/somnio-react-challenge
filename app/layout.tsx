import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.scss";
import { AppProvider } from "@/context/AppContext";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Somnio Challenge",
  description: "This is a Somnio Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
