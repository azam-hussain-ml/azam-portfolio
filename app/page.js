import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoStrip from "../components/LogoStrip";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import About from "../components/About";
import Services from "../components/Services";
import GitHubActivity from "../components/GitHubActivity";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatAssistant from "../components/ChatAssistant";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <About />
      <Services />
      <GitHubActivity />
      <Contact />
      <Footer />
      <ChatAssistant />
    </main>
  );
}
