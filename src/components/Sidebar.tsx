import { Avatar, Box, Button, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material'
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import CreateOutlined from '@mui/icons-material/CreateOutlined';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type NavItem = {
    text: string,
    icon: any 
}

const sideBarWidth = "280px"

const navItems = [
    {
        text: "Dashboard",
        icon: <GridViewIcon />,
    },
    {
        text: "Analytics",
        icon: <AssessmentIcon />,
    },
    {
        text: "Projects",
        icon: <WorkOutlineIcon />,
    },
    {
        text: "All Issues",
        icon: <TaskAltIcon />,
    },
]

function Sidebar() {
    const [active, setActive] = useState<string>('');
    const navigate = useNavigate();
  return (
    <Box width={sideBarWidth} padding='15px' gap='13px' display='grid'>
        <Box display='flex' alignItems='center' gap='10px'>
            <ListItemButton sx={{gap: "10px", backgroundColor: "secondary.light", borderRadius: "10px", padding: '5px'}}>
                <Avatar sx={{backgroundColor: 'secondary.dark', height: '25px', width: '25px', fontSize: '15px'}} variant='rounded'>T</Avatar>
                <Typography sx={{color: 'primary.dark'}} fontWeight='500'>test</Typography>
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
                        ":hover": {backgroundColor: 'secondary.light'}, 
                        borderRadius: '5px',
                    }} 
                        onClick={() => {setActive(lcText); navigate(lcText);}}>
                        <IconButton color={
                            active === lcText ?
                                'secondary' : 'body'
                        } >
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
