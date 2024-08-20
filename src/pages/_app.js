import "@/styles/globals.css";

import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
const inter = Inter({ subsets: ["latin"] });


export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className}`}>
      <Banner />
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
