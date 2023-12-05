import { Box, IconButton, Typography } from '@mui/material'
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import WorkOutline from '@mui/icons-material/WorkOutline';

type NavItem = {
    text: string,
    icon: any 
}

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
        icon: <WorkOutline />,
    },
    {
        text: "All Issues",
        icon: <TaskAltIcon />,
    },
]

function Sidebar() {
  return (
    <Box>
        <Typography>Side bar</Typography>        
        {
            navItems.map((item: NavItem) => (
                <Box display='flex' alignItems='center'>
                    <IconButton color='body'>
                        {item.icon}
                    </IconButton>
                    <Typography color='body' fontWeight='500'>{item.text}</Typography>
                </Box>
            ))
        }
    </Box>
  )
}

export default Sidebar
