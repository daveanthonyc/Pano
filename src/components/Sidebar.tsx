import { Avatar, Box, Button, IconButton, List, ListItem, ListItemButton, Menu, MenuItem, Switch, Typography } from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import CreateOutlined from '@mui/icons-material/CreateOutlined';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import WestIcon from '@mui/icons-material/West';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';
import CreateProject from './CreateProject';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { setUser } from 'src/state/userSlice';
import { toggleTheme } from 'src/state/themeSlice';
import { useGetUserByNameQuery, useGetProjectsByIdsQuery } from 'src/services/issue';

type NavItem = {
    text: string,
    icon: any 
}

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
    const theme = useTheme();
    const location = useLocation();
    const currentPath = location.pathname.replace('/', '')
    const [open, setOpen] = useState<boolean>(true);
    const [active, setActive] = useState<string>(currentPath);
    const navigate = useNavigate();
    const params = useParams();
    const themeState = useSelector((state) => state.theme.theme);
    const themeBool = useMemo(() => {
        return (themeState === 'light') ? false : true;
    }, [themeState]);

    const { data: userData, isLoading: userLoading, refetch: refetchUsers } = useGetUserByNameQuery(params.id);
    const { data: projects, isLoading: projectsLoading, refetch } = useGetProjectsByIdsQuery(
        userData?.user.projects,
        {
            skip: userLoading
        }
    )
        
    useEffect(() => {
        if (userData && projectsLoading) {
            refetch();
        }
    }, [userData, projectsLoading])

    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);
    const [ profileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);
    const [ openProjectModal, setOpenProjectModal] = useState<boolean>(false);
    const dispatch = useDispatch();


    const signOut = () => {
        navigate('/login');
        dispatch(setUser({}));
    }

    const toggleProfileMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        setProfileMenuOpen(!profileMenuOpen);
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const profileOpen = Boolean(anchorEl);

    const toggleMenu = (): void => {
        setOpen(!open);
    }

    const widthThing = useMemo(() => {
        return open ? "280px" : "80px"
    }, [open])

  return (
    <Box width={widthThing} gap='13px' sx={{display: 'flex',flexDirection: 'column', justifyContent: 'space-between'}} borderRight='0.5px solid' borderColor='border.main' height='100vh'>
      <Box padding='15px' sx={{display: 'flex', gap: '15px', flexDirection: 'column', justifyContent: open ? 'center' : 'auto'}}>
        <Box display='flex' alignItems='center' gap='10px'>
            <ListItemButton sx={{display: 'flex', justifyContent:open ? 'left' : 'center', gap: "10px", backgroundColor: "greyAccent.light", borderRadius: "10px", padding: '5px'}}>
                <Avatar sx={{backgroundColor: 'secondary.dark', height: '25px', width: '25px', fontSize: '15px'}} variant='rounded'>T</Avatar>
                <Typography sx={{color: 'primary.dark'}} fontWeight='500' fontSize='14px' display={open ? 'block' : 'none'}>
                    test
                </Typography>
            </ListItemButton> 
            {
                    open &&
                <Button sx={{display: 'flex', justifyContent: 'right', padding: '0px'}}>
                    <Avatar sx={{backgroundColor: 'secondary.dark', height: '28px', width: '28px', fontSize: '15px'}} 
                        variant='rounded'
                        onClick={toggleProfileMenu}
                        >
                        {!userLoading && userData.user.displayName[0]}
                    </Avatar>
                    <Menu id='profile-menu' open={profileOpen} anchorEl={anchorEl} onClose={handleClose} sx={{backgroundColor: 'success'}}>
                        <Typography paddingInline='10px' fontWeight='300' fontSize='12px'>{!userLoading && userData.user.email}</Typography>
                        <MenuItem sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography fontWeight='300' fontSize='13px' marginLeft='5px'>Light/Dark Mode</Typography>
                            <Switch color='success' checked={themeBool} onChange={() => dispatch(toggleTheme())}></Switch>
                        </MenuItem>
                        <MenuItem onClick={signOut}>
                            <LogoutIcon fontSize='10px' />
                            <Typography fontWeight='300' fontSize='13px' marginLeft='5px'>Sign out</Typography>
                        </MenuItem>
                    </Menu>
                </Button>
            }
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <button style={{
            display: 'flex', 
            width: '100%',
            justifyContent: 'left',
            alignItems: 'center',
            backgroundColor: theme.palette.background.main,
            border: `0.5px solid ${theme.palette.border.main}`, 
            borderRadius: '5px',
            paddingInline: '0px', 
            paddingBlock: '5px', 
            cursor: 'pointer', 
            boxShadow: '0 2px 2px 0 rgba(0,0,0,0.1)', 
            color: theme.palette.body.main,
            fontWeight: '600'
            }}>
                <CreateOutlined sx={{marginInline: '8px'}}/>
                {open && 'New Issue'}
        </button>
        </Box>
        <List sx={{display: 'grid', gap: '3px', padding: 0}}>
        {
            navItems.map((item: NavItem) => {
                const lcText = item.text.toLowerCase().split(' ').join('-');
                return (
                <ListItem key={item.text} sx={{
                    borderRadius: '5px',
                    padding: 0,
                    color: 
                        active === lcText ?
                            'secondary.main' : 'body.main',
                    backgroundColor:
                        active === lcText ?
                            'secondary.light' : 'backgound.main',
                    }} >
                    <ListItemButton sx={{
                        padding: 0, 
                        ":hover": {backgroundColor: 'greyAccent.light',
                        borderRadius: '5px'
                        }, 
                        display: 'flex',
                        justifyContent: !open && 'center'
                    }} 
                        onClick={() => {setActive(lcText); navigate(`${params.id}/${lcText}`);}}>
                        <IconButton color={
                            (active === lcText) ?
                                'secondary' : 'body'
                            } 
                            size='medium'>
                        {item.icon}
                        </IconButton>
                        { open && <Typography color='body' fontSize='14px' fontWeight='400'>{item.text}</Typography> }
                    </ListItemButton>
                </ListItem>
            )})
        }
        {open &&
            <>
            <Box marginTop='40px' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography color='grey' fontWeight='600' fontSize='12px'>Projects</Typography>
                <IconButton onClick={() => setOpenProjectModal(true)}>
                   <AddIcon sx={{height: '14px', width: '12px', color: 'primary.dark'}}/> 
                </IconButton>
            </Box>
            {
                (projects != undefined) && projects.map((project) => (
                    <Typography key={project._id}>{project.projectTitle}</Typography>
                ))
            }
            </>
        }
        </List>
        {
            (projects != undefined) && <CreateProject open={openProjectModal} setOpen={setOpenProjectModal} refetch={refetchUsers}/> 
        }

      </Box>
        <Box height='30px' borderTop='0.5px solid' borderColor='border.main' sx={{height: '50px', display: 'flex', alignItems: 'center', paddingInline: '15px'}} display='flex' justifyContent='space-between'>
            { open &&
                <Box bgcolor='success.light' paddingInline='1.6rem' paddingBlock='4px' borderRadius='5px'>
                    <Typography color='success.dark' fontSize='14px'>Free Plan</Typography>
                </Box>
            }
            <IconButton onClick={toggleMenu}>
                <WestIcon sx={{color: 'body.main', height: '20px',
                    transform: (open) ? 0 : 'rotate(180deg)'
                }}/>
            </IconButton>
        </Box>
    </Box>
  )
}

export default Sidebar;
