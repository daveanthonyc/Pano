import { Box, Typography } from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CustomDatePicker from 'src/components/CustomDatePicker';

function Test() {
    const handleChange = (e) => {
        setChosenDate(e.$d);
        const date: Date = e.$d;
        const dateString = date.toDateString().split(' ').slice(1).join(' ');
        setChosenDate(dateString);
        setIsOpen(false);
    }

    const [chosenDate, setChosenDate] = useState<string>("Start Date");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleMenuToggle = () => {
        setIsOpen(true);
    }

    // create ref
    const menuRef = useRef(null);


    const handleClickOutside = (e) => {
        if (menuRef.current != null) {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
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
    <Box>
        <button onClick={handleMenuToggle} style={{ 
            position: 'relative', 
            borderRadius: '5px',
            outline: 'none',
            cursor: 'pointer',
            border: '1px solid rgba(0,0,0,0.2)'
            }}
            ref={menuRef}
            >
            <Typography sx={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'primary.dark'}}>
                {(chosenDate === 'Select Start Date') && <CalendarMonthIcon fontSize='12px'/>}
                {chosenDate} 
                {(chosenDate != 'Select Start Date') && 
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
                onClick={() => setChosenDate("Select Start Date")}
                size='small'>
                    <CloseIcon sx={{color: 'primary.dark', fontSize: '13px'}}/>
                </button> 
                }
            </Typography>

            {
                isOpen && 
                <CustomDatePicker handleChange={handleChange}/>
            }
        </button>
    </Box>
  )
}

export default Test;
