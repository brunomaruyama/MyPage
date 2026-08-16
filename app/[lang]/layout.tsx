import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "../../components/footer/page";
import { HomeButton } from "../../components/homeButton/button";

const inter = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bruno Maruyama | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Bruno Maruyama - Desenvolvedor Full Stack especializado em React, Next.js, TypeScript, NestJS e soluções web modernas.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang?: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang || "pt"} className="dark">
      <body className={`${inter.className} min-h-screen selection:bg-cyan-500 selection:text-white`}>
        <main className="relative">
          {children}
          <Footer />
          <HomeButton />
        </main>
      </body>
    </html>
  );
}
