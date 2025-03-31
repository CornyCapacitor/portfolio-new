import Marquee from "react-fast-marquee"
import { ProjectCardType } from "../types/global"

const ProjectCard = ({ name, description, link, marquee }: ProjectCardType) => {
  const ProjectCardMarquee = ({ marquee }: { marquee: string }) => {
    return (
      <span className="mx-1 text-sm font-share-tech-mono text-gray-400 font-semibold p-2 rounded">{marquee}</span>
    )
  }

  return (
    <div className="xl:scale-100 scale-75 mx-8 w-[400px] h-[250px] flex flex-col p-2 border border-[#23ceb4] rounded-2xl font-share-tech-mono relative card-shadow transform transition-transform duration-300 hover:scale-80 xl:hover:scale-105 card-bg">
      <h1 className="flex text-center items-center justify-center py-2 text-3xl text-primary">{name}</h1>
      <h2 className="flex flex-grow text-2xl items-start py-2 justify-center text-center">{description}</h2>
      <a href={link} target="_blank" className="p-2 m-4 bg-gray-500 w-32 rounded-lg self-center hover:bg-[#23ceb4a8] transition-[2s] cursor-pointer text-center">Explore</a>
      <Marquee gradient={true} speed={30} gradientColor="#0f172b" gradientWidth={0} pauseOnHover={false} className="overflow-hidden">
        {marquee.map((marquee, index) => (
          <ProjectCardMarquee key={index} marquee={marquee} />
        ))}
      </Marquee>
    </div>
  )
}

export default ProjectCard
