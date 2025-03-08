import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/Header";
import {Navbar} from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Quote from "./components/Quote";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <section className='ml-20 pt-16 flex flex-row flex-wrap justify-between'>
      <div className='w-1/2 flex flex-col justify-between'>
        <div className='p-40'>
          <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
              Hello, I’m William.
              nice to meet you!
          </h1>
          <p className="mb-4">
            {`I'm currently at Atlassian on the Growth team as a Director of Product Design(IC),
            leading various types of strategic growth design work across the company`}
          </p>
        </div>
        <div className='px-40'>
          <img src='../assets/company-logo.svg'></img>
        </div>
      </div>
      <div className='w-1/2'>
        <img src='../assets/heroImage.png'></img>
      </div>
      <div className="w-full">
        <Skills />
      </div>
      <div className="w-full">
        <About />
      </div>
      <div className="w-full">
        <Quote />
      </div>
      <div className="w-full">
        <Projects />
      </div>
      <div className="w-full">
        <Testimonials />
      </div>
   
    </section>
  );
}
