import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/Header";
import {Navbar} from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>

  );
}
