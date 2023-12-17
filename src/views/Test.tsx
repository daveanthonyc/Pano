import CustomMenu from "src/components/CustomMenu"
import CustomMenuItem from "src/components/CustomMenuItem"
import { useState } from 'react';
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function Test() {
    const [active, setActive] = useState('Test');
    const [icon, setIcon] = useState(<BarChartRoundedIcon />);

    const menuclickHandler = (e, icon) => {
        setActive(e.target.innerText);
        setIcon(icon);
    }

  return (
    <CustomMenu title={active} icon={icon}>
        <CustomMenuItem onClick={(e) => menuclickHandler(e, <BarChartRoundedIcon />)} icon={<BarChartRoundedIcon />}>Test</CustomMenuItem>
        <CustomMenuItem onClick={(e) => menuclickHandler(e, <AccessAlarmsIcon />)} icon={<AccessAlarmsIcon />}>Test</CustomMenuItem>
        <CustomMenuItem onClick={(e) => menuclickHandler(e, <AddReactionIcon />)} icon={<AddReactionIcon />}>Test</CustomMenuItem>
    </CustomMenu>
  )
}

export default Test
