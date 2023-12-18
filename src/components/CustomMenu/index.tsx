import { ReactNode, useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import './CustomMenu.css';

function CustomMenu({title, icon, startAdornment, children} : {title: string, icon?: any | undefined, isOpen: boolean, startAdornment?: any, children?: ReactNode}) {
    const isSingleComponent = Array.isArray(children);
    const [open, setOpen] = useState<boolean>(false);
    const menuButtonRef = useRef(null);
    const menuMenuRef = useRef(null);

    const toggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(!open);
    }

    const handleClickOutside = (e) => {
        if (menuButtonRef.current != null) {
            if (!menuButtonRef.current.contains(e.target)) {
                setOpen(false);
                document.removeEventListener('click', handleClickOutside);
            }
        }
    }

    useEffect(() => {
        addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside)
        };
    }, []);

  return (
    <button className='custom-menu-button' onClick={(e) => toggleOpen(e)} ref={menuButtonRef}>
        {startAdornment}
        {icon}
        <Typography sx={{fontSize: '11px', color: 'primary.dark'}}>{title}</Typography>

        {/* ABSOLUTELY POSITIONED MENU INSIDE BUTTON */}
        {
            open && 
            <div className='open-menu' ref={menuMenuRef}
                style={{
                    top: '500',
                    left: '515',
                }}
            >
                {isSingleComponent ? children.map((child, index: number) => (
                    <Typography sx={{fontSize: '11px', color: 'primary.dark'}} key={index}>
                        {child}
                    </Typography>
                )) :
                    <Typography sx={{fontSize: '11px', color: 'primary.dark'}}>
                        {children}
                    </Typography>
                }
            </div>
        }
    </button>
  )
}

export default CustomMenu;
