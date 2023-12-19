import CustomDateMenu from "src/components/CustomDateMenu";
import { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CustomDatePicker from "src/components/CustomDatePicker";

function Menu() {
    const [chosenStartDate, setChosenStartDate] = useState<string>("Start Date");

    const handleChange = (e) => {
        const date: Date = e.$d;
        const dateString = date.toDateString().split(' ').slice(1).join(' ');
        setChosenStartDate(dateString);
        setStartOpen(false);
    }

    const resetStartDate = () => {
        setChosenStartDate('Start Date');
    }

    const [startOpen, setStartOpen] = useState<boolean>(false);

    // =========

    const [chosenDueDate, setChosenDueDate] = useState<string>("Due Date");

    const handleDueChange = (e) => {
        const date: Date = e.$d;
        const dateString = date.toDateString().split(' ').slice(1).join(' ');
        setChosenDueDate(dateString);
        setDueOpen(false);
    }

    const resetDueDate = () => {
        setChosenDueDate('Due Date');
    }

    const [dueOpen, setDueOpen] = useState<boolean>(false);

  return (
  <div>
    <CustomDateMenu onClick={() => setStartOpen(true)} onClose={() => setStartOpen(false)} open={startOpen} title={chosenStartDate} reset={resetStartDate} defaultText='Start Date'>
        <CustomDatePicker handleChange={handleChange} />
    </CustomDateMenu>
    <CustomDateMenu onClick={() => setDueOpen(true)} onClose={() => setDueOpen(false)} open={dueOpen} title={chosenDueDate} reset={resetDueDate} defaultText='Due Date'>
        <CustomDatePicker handleChange={handleDueChange} />
    </CustomDateMenu>
  </div>
  )
}

export default Menu
