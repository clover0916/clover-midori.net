import "./globals.css";

import type { Metadata } from "next";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Provider from "./components/Privider";

import AnimationProvider from "./components/AnimaitonProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const noto_sans_jp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Clover_Midori",
  description: "いろいろやってます",
  openGraph: {
    images: [
      {
        url: "https://clover-midori.net/icon_512.png",
        width: 512,
        height: 512,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${noto_sans_jp.variable}`}>
        <Provider>
          <AppBar />
          <AnimationProvider>
            {children}
            <Footer />
          </AnimationProvider>
        </Provider>
      </body>
    </html>
  );
}
