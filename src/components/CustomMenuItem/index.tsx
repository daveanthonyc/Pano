import { ReactNode } from "react"

function CustomMenuItem({ children, onClick } : { children: ReactNode, onClick: () => void }) {
  return (
    <span style={{ 
        width: '100%', 
        height: '100%', 
        paddingBlock: '5px',
    }}
    onClick={onClick}
    >
        { children }
    </span>
  )
}

export default CustomMenuItem
