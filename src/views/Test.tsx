import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { Box, Typography, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useRef, useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Test({children}: {children: ReactNode}) {
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar sx={{
                        width: '300px',
                        height: '260px',
                        borderRadius: '10px',
                        position: 'absolute',
                        top: 40,
                        border: '1px solid rgba(0,0,0,0.3)',
                        '& .Mui-selected': {
                            color: 'white',
                            backgroundColor: 'secondary.main',
                        },
                        '& .MuiPickersDay-root:active': {
                            color: 'white',
                            backgroundColor: 'secondary.main',
                        },
                        '& .MuiPickersDay-root:focus': {
                            color: 'white',
                            backgroundColor: 'secondary.main',
                        },
                        '& .MuiPickersDay-root:focus-within': {
                            color: 'white',
                            backgroundColor: 'secondary.main',
                        }
                    }}
                    onChange={handleChange}
                    />
                </LocalizationProvider>
            }
        </button>
    </Box>
  )
}

export default Test
