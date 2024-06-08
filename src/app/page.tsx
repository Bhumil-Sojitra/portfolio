import Hero from "@/components/main/hero";
import Projects from "@/components/main/projects";
import Skills from "@/components/main/skills";

export default function Home() {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
