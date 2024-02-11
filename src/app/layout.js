import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cuy Anime List",
  description: "Indonesian website for anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Testing</div>
        {children}
      </body>
    </html>
  );
}
