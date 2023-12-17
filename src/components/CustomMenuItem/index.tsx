import { ReactNode } from "react"

function CustomMenuItem({ children, onClick, icon } : { children: ReactNode, onClick: () => void, icon?: ReactNode }) {
  return (
    <span style={{ 
        width: '100%', 
        height: '100%', 
        paddingBlock: '5px',
    }}
    onClick={onClick}
    >
        { icon }
        { children }
    </span>
  )
}

export default CustomMenuItem
