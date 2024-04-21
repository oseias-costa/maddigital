"use client";
import { useEffect } from "react";
import Clients from "./components/clients/Clients";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/global/whatsapp/Whatsapp";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import Method from "./components/method/Method";
import Results from "./components/results/Results";
import Services from "./components/services/Services";

export default function Home() {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('7247562658592878') // facebookPixelId
        ReactPixel.pageView()
      })
  }, [])

  return (
    <main>
      <Header />
      <Headline />
      <Method />
      <Services />
      <Results />
      <Clients />
      <Footer />
      <Whatsapp />
    </main>
  );
}
