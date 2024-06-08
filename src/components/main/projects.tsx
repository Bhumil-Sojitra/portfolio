import ProjectCard from "../sub/project-card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Next_Blogs.png"
          title="Modern Next.js Portfolio"
          desc="lorem adawds dawd asd awd asd aw dsd wadg df hdg d gsrg srgsd fsd fsfsef sdf"
        />
        <ProjectCard
          src="/Next_Blogs.png"
          title="Interactive Website Cards"
          desc="lorem adawds dawd asd awd asd aw dsd wadg df hdg d gsrg srgsd fsd fsfsef sdf"
        />
        <ProjectCard
          src="/Portfolio.png"
          title="Space Themed Website"
          desc="lorem adawds dawd asd awd asd aw dsd wadg df hdg d gsrg srgsd fsd fsfsef sdf"
        />
      </div>
    </div>
  );
};

export default Projects;
