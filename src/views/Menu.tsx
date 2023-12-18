import CustomDateMenu from "src/components/CustomDateMenu";
import { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CustomDatePicker from "src/components/CustomDatePicker";

function Menu() {
    const [date, setDate] = useState<string>("Start date");
    const [open, setOpen] = useState<boolean>(false);

    const handleChange = (e) => {
        setOpen(true);
    }

  return (
    <div>
        <CustomDateMenu icon={<CalendarMonthIcon />} title={date} open={open} clickHandler={handleChange}>
            <CustomDatePicker handleChange={handleChange}/>
        </CustomDateMenu>
    </div>
  )
}

export default Menu
