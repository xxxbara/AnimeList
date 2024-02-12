import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Utilities/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List",
  description: "Indonesian website for anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
