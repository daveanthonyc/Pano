import { ReactHTMLElement, ReactNode, useState, useEffect } from 'react';
import './CustomMenu.css';

function CustomMenu({title, icon, children} : {title: string, icon?: any | undefined, children?: ReactNode}) {
    const [open, setOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | string>("");

    const toggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
        console.log(anchorEl);
        setOpen(!open);
    }

  return (
    <>
    <button className='custom-menu-button' onClick={(e) => toggleOpen(e)}>{icon}{title}</button>
        {
            open && 
            <div className='open-menu'>
                {children}
            </div>
        }
    </>
  )
}

export default CustomMenu;
