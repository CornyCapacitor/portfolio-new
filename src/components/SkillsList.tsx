import { SkillType } from "../types/global"
import { Skill } from "./Skill"

export const SkillsList = ({ skills }: { skills: SkillType[] }) => {
  // Tu musze zrobić takie coś, że się podświetla jakiś losowo co pare sekund zeby było życie w tym miejscu
  // +
  // Biblioteka do tooltipów na skillach żeby ładnie podświetlało jaki to skill
  return (
    <div className="w-[95%] flex flex-wrap items-center justify-center gap-5">
      {skills.map((skill, index) => (
        <Skill key={index} icon={`/stack/${skill.icon}`} name={skill.name} />
      ))}
    </div>
  )
}