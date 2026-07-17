import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Manifeste from "@/components/sections/Manifeste";
import Faisons from "@/components/sections/Faisons";
import Qui from "@/components/sections/Qui";
import Rubriques from "@/components/sections/Rubriques";
import Couleurs from "@/components/sections/Couleurs";
import Identite from "@/components/sections/Identite";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative w-full overflow-hidden">
        <Hero />
        <Manifeste />
        <Faisons />
        <Qui />
        <Rubriques />
        <Couleurs />
        <Identite />
        <Footer />
      </main>
    </>
  );
}
