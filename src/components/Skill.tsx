import { Tooltip } from "react-tooltip"

export const Skill = ({ icon, name }: { icon: string, name: string }) => {
  return (
    <>
      <img data-tooltip-id={`skill-${name}`} src={icon} width="100" height="100" className="p-2 rounded-lg font-share-tech-mono relative transform transition-transform duration-300 hover:scale-105 small-glow" />
      <Tooltip id={`skill-${name}`} place="bottom" content={name} className="small-tooltip-glow" />
    </>
  )
}