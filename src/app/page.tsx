import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div className="font-sans">
      <Topbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
