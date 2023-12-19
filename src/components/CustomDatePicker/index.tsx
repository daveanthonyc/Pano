import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function CustomDatePicker({handleChange} : {handleChange: (e: any) => void}) {
  return (
                <LocalizationProvider dateAdapter={AdapterDayjs}
                >
                    <DateCalendar sx={{
                        overflow: 'visible',
                        width: '300px',
                        height: '260px',
                        borderRadius: '10px',
                        position: 'absolute',
                        top: 40,
                        zIndex: 300,
                        backgroundColor: 'primary.main',
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
  )
}

export default CustomDatePicker
