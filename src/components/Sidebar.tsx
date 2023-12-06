import { Avatar, Box, Button, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import CreateOutlined from '@mui/icons-material/CreateOutlined';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';

type NavItem = {
    text: string,
    icon: any 
}

const sideBarWidth = "280px"

const navItems = [
    {
        text: "Dashboard",
        icon: <GridViewIcon sx={{height: '20px'}}/>,
    },
    {
        text: "Analytics",
        icon: <BarChartRoundedIcon sx={{height: '20px'}} />,
    },
    {
        text: "Projects",
        icon: <WorkOutlineIcon sx={{height: '20px'}} />,
    },
    {
        text: "All Issues",
        icon: <TaskAltIcon sx={{height: '20px'}} />,
    },
]

function Sidebar() {
    const [active, setActive] = useState<string>('dashboard');
    const navigate = useNavigate();
  return (
    <Box width={sideBarWidth} padding='15px' gap='13px' sx={{display: 'flex',flexDirection: 'column'}} borderRight='0.5px solid rgba(0,0,0,0.07)' height='100vh'>
        <Box display='flex' alignItems='center' gap='10px'>
            <ListItemButton sx={{gap: "10px", backgroundColor: "greyAccent.light", borderRadius: "10px", padding: '5px'}}>
                <Avatar sx={{backgroundColor: 'secondary.dark', height: '25px', width: '25px', fontSize: '15px'}} variant='rounded'>T</Avatar>
                <Typography sx={{color: 'primary.dark'}} fontWeight='500' fontSize='14px'>test</Typography>
            </ListItemButton> 
            <Button sx={{justifyContent: 'right'}}>
                <Avatar sx={{backgroundColor: 'secondary.dark', height: '25px', width: '25px', fontSize: '15px'}} variant='rounded'>D</Avatar>
            </Button>
        </Box>
        <Button sx={{color: 'primary.dark', outline: '0.5px solid rgba(0,0,0,0.1)', boxShadow: '0 1px 3px 0 rgba(0,0,0,0.15)', textTransform: 'none', padding: '3px'}} startIcon={<CreateOutlined />}>New Issue</Button>
        <List disablePadding sx={{display: 'grid', gap: '3px'}}>
        {
            navItems.map((item: NavItem) => {
                const lcText = item.text.toLowerCase().split(' ').join('-');
                return (
                <ListItem display='flex' alignItems='center' key={item.text} sx={{
                    padding: 0,
                    color: 
                        active === lcText ?
                            'secondary.main' : 'body.main',
                    backgroundColor:
                        active === lcText ?
                            'secondary.light' : 'white',
                    }} >
                    <ListItemButton sx={{
                        padding: 0, 
                        ":hover": {backgroundColor: 'greyAccent.light'}, 
                        borderRadius: '5px',
                    }} 
                        onClick={() => {setActive(lcText); navigate(lcText);}}>
                        <IconButton color={
                            active === lcText ?
                                'secondary' : 'body'
                            } 
                            size='medium'>
                        {item.icon}
                        </IconButton>
                        <Typography color='body' fontSize='14px' fontWeight='400'>{item.text}</Typography>
                    </ListItemButton>
                </ListItem>
            )})
        }
        </List>
    </Box>
  )
}

export default Sidebar
