import Image from "next/image";

interface Props {
  src: string;
  title: string;
  desc: string;
}
const ProjectCard = ({ src, title, desc }: Props) => {
  return (
    <div className=" relavtive flex flex-col justify-between overflow-hidden rounded-lg shadow-lg border border-bdcolor">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain shadow-lg  shadow-white/5 "
      />
      <div className="relative p-4 ">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
