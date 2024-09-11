import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WM SAS",
  description: "Experiencia y responsabilidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
