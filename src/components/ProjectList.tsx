import { ProjectCardType } from "../types/global";
import ProjectCard from "./ProjectCard";

import Marquee from "react-fast-marquee";
import 'swiper/swiper-bundle.css';

export const ProjectList = ({ cards }: { cards: ProjectCardType[] }) => {
  return (
    <>
      <span className="text-center flex items-center justify-center font-roboto-mono text-gray-500 font-bold">Check out my recent projects</span>
      <main className="flex gap-4 flex-grow items-center justify-center w-full h-full">
        <Marquee gradient={true} speed={80} gradientColor="#242424" gradientWidth={70} pauseOnHover={true} className="overflow-hidden h-[350px]">
          {cards.map((card, index) => (
            <ProjectCard
              key={index}
              name={card.name}
              description={card.description}
              link={card.link}
              marquee={card.marquee}
            />
          ))}
        </Marquee>
      </main>
    </>
  );
};