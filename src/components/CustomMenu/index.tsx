import { ReactHTMLElement, ReactNode, useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import './CustomMenu.css';

function CustomMenu({title, icon, children} : {title: string, icon?: any | undefined, isOpen: boolean, children?: ReactNode}) {
    const [open, setOpen] = useState<boolean>(false);
    const menuButtonRef = useRef(null);
    const menuMenuRef = useRef(null);

    const toggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(!open);
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!menuButtonRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside)
        };
    }, []);

  return (
    <>
    <button className='custom-menu-button' onClick={(e) => toggleOpen(e)} ref={menuButtonRef}>
        <AssignmentOutlinedIcon sx={{fontSize: '10px'}} />
        {icon}
        <Typography sx={{fontSize: '11px', color: 'primary.dark'}}>{title}</Typography>
    </button>
        {
            open && 
            <div className='open-menu' ref={menuMenuRef}>
                {children.map((child, index: number) => (
                    <Typography sx={{fontSize: '11px', color: 'primary.dark'}} key={index}>
                        {child}
                    </Typography>
                ))}
            </div>
        }
    </>
  )
}

export default CustomMenu;
