import { useState } from "react"
import { AboutMe } from "./AboutMe"
import { Contact } from "./Contact"
import { Experience } from "./Experience"
import { NavigationButton } from "./NavigationButton"
import { Skills } from "./Skills"

export const Information = () => {
  const [currentPage, setCurrentPage] = useState<typeof buttons[number]['name']>('About me')
  const buttons = [
    {
      name: 'About me',
      icon: 'about_me.svg',
    },
    {
      name: 'Experience',
      icon: 'experience.svg'
    },
    {
      name: 'Skills',
      icon: 'skills.svg'
    },
    {
      name: 'Contact',
      icon: 'contact.svg'
    }
  ]

  return (
    <div className="w-[95%] p-5 min-h-[600px] flex flex-col items-center justify-center bg-wavey card-shadow border border-[#23ceb4] rounded-2xl">
      {currentPage === 'About me' ? <AboutMe />
        : currentPage === 'Experience' ? <Experience />
          : currentPage === 'Skills' ? <Skills />
            : currentPage === 'Contact' ? <Contact />
              : null}
      <nav className="flex gap-2 w-full items-center justify-center">
        {buttons.map((button) => (
          <NavigationButton key={button.name} name={button.name} icon={`/nav/${button.icon}`} active={currentPage === button.name} onClick={() => setCurrentPage(button.name)} />
        ))}
      </nav>
    </div>
  )
}