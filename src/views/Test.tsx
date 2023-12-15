import CustomMenu from "src/components/CustomMenu"
import { useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function Test() {
    const [active, setActive] = useState('');

    const menuclickHandler = (e) => {
        setActive(e.target.innerText);
    }

  return (
    <CustomMenu title={active}>
        <span onClick={menuclickHandler}>{<CircleOutlinedIcon fontSize="10px"/>} Dashboard Application</span>
        <span onClick={menuclickHandler}>Canva Clone</span>
        <span onClick={menuclickHandler}>Tool Board</span>
    </CustomMenu>
  )
}

export default Test
