import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

const inter = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "My Page",
  description: "Generated by Bruno",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={inter.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
