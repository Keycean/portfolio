import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact"; // This is used in the Home layout
import Footer from "@/components/main/Footer"; // Fixed incorrect import for Footer

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About/>
        <Skills/>
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
