import { Tooltip } from 'react-tooltip'

export const NavigationButton = ({ icon, name, onClick, active }: { icon: string, name: string, onClick: () => void, active: boolean }) => {
  return (
    <button onClick={onClick}>
      <img data-tooltip-id={`nav-${name}`} src={icon} width="70" height="70" className={`p-2 rounded-lg font-share-tech-mono relative transform transition-transform duration-300 hover:scale-105 bg-transparent cursor-pointer ${active ? 'glow' : ''}`} />
      <Tooltip id={`nav-${name}`} place="bottom" content={name} className="small-tooltip-glow" />
    </button>
  )
}