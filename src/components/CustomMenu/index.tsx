import { ReactHTMLElement, ReactNode, useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import './CustomMenu.css';

function CustomMenu({title, icon, children, startAdornment, defaultVal} : {title: string, icon?: any | undefined, isOpen: boolean, children?: ReactNode, startAdornment: any, defaultVal?: string}) {
    const [open, setOpen] = useState<boolean>(false);
    const menuButtonRef = useRef(null);
    const menuMenuRef = useRef(null);

    const toggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(!open);
        console.log(e.currentTarget.getBoundingClientRect().top)
        console.log(e.currentTarget.getBoundingClientRect().left)
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
        {startAdornment}
        {icon}
        <Typography sx={{fontSize: '11px', color: 'primary.dark'}}>{title}</Typography>
        {
            open && 
            <div className='open-menu' ref={menuMenuRef}
                style={{
                    top: '500',
                    left: '515',
                }}
            >
                {children.map((child, index: number) => (
                    <Typography sx={{fontSize: '11px', color: 'primary.dark'}} key={index}>
                        {child}
                    </Typography>
                ))}
            </div>
        }
    </button>
    </>
  )
}

export default CustomMenu;
