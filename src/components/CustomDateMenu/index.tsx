import { ReactNode, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';

function CustomDateMenu({onClick, onClose, open, title, children, reset, defaultText} : {onClick: () => void, onClose: (boolean) => void, open: boolean, title: string, children: ReactNode, reset: () => void, defaultText: string}) {

    useEffect(() => {
        }, [title, defaultText])
    const menuRef = useRef(null);

    const handleClickOutside = (e) => {
        if (menuRef.current != null) {
            if (!menuRef.current.contains(e.target)) {
                onClose(false);
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
        <button onClick={onClick} style={{ 
            position: 'relative', 
            borderRadius: '5px',
            outline: 'none',
            cursor: 'pointer',
            border: '1px solid rgba(0,0,0,0.2)'
            }}
            ref={menuRef}>
            <Typography sx={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'primary.dark'}}>
                {(title === defaultText) && <CalendarMonthIcon fontSize='12px' />}
                {title} 
                {(title !== defaultText) && 
                <button style={{ 
                    border: 'none', 
                    backgroundColor: 'none',
                    cursor: 'pointer',
                    paddingInline: '0px',
                    marginInline: '0px',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '5px'
                }} 
                onClick={reset}
                size='small'>
                    <CloseIcon sx={{color: 'primary.dark', fontSize: '13px'}}/>
                </button> 
                }
            </Typography>

            {
                open && children
            }
        </button>
  )
}

export default CustomDateMenu
