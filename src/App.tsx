import { useState } from "react"
import { Information } from "./components/Information"
import { ProjectList } from "./components/ProjectList"
import { SkillsList } from "./components/SkillsList"
import { projectList } from "./data/projects"
import { skillList } from "./data/skills"
import { ProjectCardType, SkillType } from "./types/global"

function App() {
  const [cards] = useState<ProjectCardType[]>(projectList)
  const [skills] = useState<SkillType[]>(skillList)

  return (
    <main className="flex-col gap-2 items-center justify-center w-full h-full">
      <h1 className="flex items-center justify-center py-16 text-8xl font-extrabold tracking-tight text-transparent bg-clip-text drop-shadow-lg bg-[#23ceb4] text-center">Hey, I'm Matthew</h1>
      <section className="w-full flex items-center justify-center flex-col py-8">
        <ProjectList cards={cards} />
      </section>
      <h2 className="flex items-center justify-center py-16 text-6xl font-extrabold tracking-tight text-transparent bg-clip-text drop-shadow-lg bg-[#23ceb4] text-center">Stack</h2>
      <section className="w-full flex items-center justify-center flex-col py-8">
        <SkillsList skills={skills} />
      </section>
      <h2 className="flex items-center justify-center py-16 text-6xl font-extrabold tracking-tight text-transparent bg-clip-text drop-shadow-lg bg-[#23ceb4] text-center">Me</h2>
      <section className="w-full flex items-center justify-center flex-col py-8">
        <Information />
      </section>
    </main>
  )
}

export default App
