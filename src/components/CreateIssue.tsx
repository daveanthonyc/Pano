import { Box, Dialog, TextField, Typography, Button, DialogContent } from '@mui/material'
import { useState, useRef  } from 'react';
import { useSelector } from 'react-redux';
import CustomMenu from './CustomMenu';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CustomMenuItem from './CustomMenuItem';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SignalCellularAlt1BarIcon from '@mui/icons-material/SignalCellularAlt1Bar';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BlockIcon from '@mui/icons-material/Block';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import getAiResponse from 'src/services/ai';
import CustomDateMenu from './CustomDateMenu';
import CustomDatePicker from "src/components/CustomDatePicker";

function CreateIssue({open, setOpen}: {open: boolean, setOpen: (arg: boolean) => void}) {
    const projects = useSelector((state) => state.project.project);
    const user  = useSelector((state) => state.user.user);
    const { _id } = user;
    const closeDialog = () => {
        setOpen(false);
    }
    const descriptionRef = useRef(null);

    const [issueTitle, setIssueTitle] = useState<string>("");
    const [identifer, setIdentifier] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [project, setProject] = useState<string>("Select a Project");
    const [state, setState] = useState<string>("Backlog");
    const [stateIcon, setStateIcon] = useState(<BlurCircularOutlinedIcon fontSize='10px' />);
    const [aiMenuOpen, setAiMenuOpen] = useState<boolean>(false);
    const [aiPrompt, setAiPrompt] = useState<string>('');

    const handleAiMenuClose = () => {
        setAiMenuOpen(false);
    }

    const aiMenuClickHandler = () => {
        setAiMenuOpen(true);
    }

    const handleAiTextFieldChange = (e) => {
        setAiPrompt(e.target.value);
    }

    const submitAiPrompt = async () => {
        const res = await getAiResponse(aiPrompt);
        setDescription(res);
    }



    const stateOptions = [
        {
            text: "Backlog",
            icon: <PendingOutlinedIcon fontSize='10px' />
        },
        {
            text: "Todo",
            icon: <CircleOutlinedIcon fontSize='10px'/>
        },
        {
            text: "In Progress",
            icon: <BlurCircularOutlinedIcon fontSize='10px' sx={{ color: 'warning.main'}}/>
        },
        {
            text: "Done",
            icon: <TaskAltOutlinedIcon fontSize='10px' sx={{ color: 'success.main' }}/>
        },
        {
            text: "Cancelled",
            icon: <CancelOutlinedIcon fontSize='10px' sx={{ color: 'rgb(255,90,90)'}}/>
        }
    ]

    const priorityOptions = [
        { 
            text: "Urgent",
            icon: <ErrorOutlineIcon fontSize='10px' />
        },
        { 
            text: "High",
            icon: <SignalCellularAltIcon fontSize='10px' />
        },
        { 
            text: "Medium",
            icon: <SignalCellularAlt2BarIcon fontSize='10px' />
        },
        { 
            text: "Low",
            icon: <SignalCellularAlt1BarIcon fontSize='10px' />
        },
        { 
            text: "None",
            icon: <BlockIcon fontSize='10px' />
        },
    ]

    const [priority, setPriority] = useState('None');
    const [priorityIcon, setPriorityIcon] = useState(<BlockIcon fontSize='10px'/>);

    const createIssue = async () => {
        const date = new Date();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: issueTitle, 
                description: description,
                state: state,
                priorityLevel: priority,
                startDate: payloadStartDate,
                dueDate: payloadDueDate, 
                user: _id,
                project: projectId,
                creationDate: date
            })
        }
        await fetch(`${import.meta.env.VITE_REACT_BASE_URL}/issue/create`, reqOptions);
        closeDialog();
    }

    const handleStateChange = (e, icon?) => {
        setState(e.target.innerText);
        if (icon) {
            setStateIcon(icon);
        }
    }

    const handleProjectChange = (e, icon?) => {
        setPriority(e.target.innerText);
        if (icon) {
            setPriorityIcon(icon);
        }
    }
    const [projectId, setProjectId] = useState<string | undefined>();
    const menuclickHandler = (e, id: string) => {
        setProjectId(id);
        setProject(e.target.innerText);
    }

    const [chosenStartDate, setChosenStartDate] = useState<string>("Start Date");
    const [payloadStartDate, setPayloadStartDate] = useState<Date | undefined>();
    const [payloadDueDate, setPayloadDueDate] = useState<Date | undefined>();

    const handleChange = (e) => {
        const date: Date = e.$d;
        setPayloadStartDate(date);
        const dateString = date.toDateString().split(' ').slice(1).join(' ');
        setChosenStartDate(dateString);
        setStartOpen(false);
    }

    const resetStartDate = () => {
        setChosenStartDate('Start Date');
    }

    const [startOpen, setStartOpen] = useState<boolean>(false);

    const [chosenDueDate, setChosenDueDate] = useState<string>("Due Date");

    const handleDueChange = (e) => {
        const date: Date = e.$d;
        setPayloadDueDate(date);
        const dateString = date.toDateString().split(' ').slice(1).join(' ');
        setChosenDueDate(dateString);
        setDueOpen(false);
    }

    const resetDueDate = () => {
        setChosenDueDate('Due Date');
    }

    const [dueOpen, setDueOpen] = useState<boolean>(false);



  return (
    <Dialog open={open} onClose={closeDialog} sx={{
        '& .MuiPaper-elevation': {
            overflow: 'visible',
        },
    }}>
        <Box sx={{ display: 'grid', gap: '1rem', padding: '15px', width: '600px'}}>

        {/* 1st ROW */}

            <Box display='flex' gap='10px' alignItems='center'>
                <Typography 
                    variant='h2' 
                    fontSize='20px' 
                    fontWeight='600'>
                    Create Issue
                </Typography>
                <CustomMenu title={project} startAdornment={<AssignmentOutlinedIcon sx={{fontSize: '12px'}} />}>
                    {
                        Array.isArray(projects) && projects.length > 0 && (
                        projects.map((project, index) => (
                            <span onClick={(e) => menuclickHandler(e, project._id)} key={index} style={{ 
                                width: '100%', 
                                height: '100%', 
                                paddingBlock: '5px'
                            }}>
                                {project.projectTitle}
                            </span>
                        )))
                    }
                </CustomMenu>
            </Box>

        {/* 2nd ROW */}
            <TextField variant='outlined' 
            onChange={(e) => setIssueTitle(e.target.value)} 
            label='Title' 
            required={true}
            aria-autocomplete='none' 
            autoComplete='off'
            size='small'
            />

            <Box display='flex' justifyContent='right' size='small'>
                <Button variant='text' sx={{ color: 'primary.dark', display: 'flex', gap: '5px', border: '1px solid', borderColor: 'border.main'}} size='small' onClick={aiMenuClickHandler}>
                    <AutoAwesomeIcon fontSize='10px'/>
                    Ai
                </Button>
            </Box>
            <Dialog open={aiMenuOpen} onClose={handleAiMenuClose} sx={{overflow: 'visible'}}>
                <Box padding={'15px'} display='flex' flexDirection='column' gap='15px' width={'500px'}>
                    <TextField placeholder='Ask Ai anything...' size='small' onChange={handleAiTextFieldChange} label='Ai Prompt'/>
                    <Box display='flex' justifyContent='right'>
                        <Box display='flex' flexDirection='row' gap='10px'>
                            <Button variant='contained' 
                            sx={{
                                textTransform: 'none', 
                                color: 'primary.dark',
                                fontSize: '10px',
                                '&:hover': {backgroundColor: 'primary.light'}
                            }} 
                            onClick={handleAiMenuClose}
                            >Cancel</Button>
                            <Button sx={{
                                textTransform: 'none', 
                                fontSize: '10px',
                                color: 'white', 
                                backgroundColor: 'secondary.main', 
                                '&:hover': {backgroundColor: 'secondary.main'}}}
                                size='small'
                                onClick={submitAiPrompt}
                                >Generate Response</Button>
                        </Box>
                    </Box>
                </Box>
            </Dialog>


        {/* 3rd ROW */}
            <TextField variant='outlined' 
            size='small'
            onChange={(e) => setDescription(e.target.value)} 
            label='Description' 
            sx={{'@:focus': {borderColor: 'red'}}} 
            aria-autocomplete='none' 
            multiline
            rows={5}
            autoComplete='off'
            value={description}
            ref={descriptionRef}
            />


        {/* 4th ROW */}
            <Box display='flex' gap='10px' marginBottom='15px'>
                <CustomMenu title={state} icon={stateIcon}>
                    {stateOptions.map((state) => (
                        <CustomMenuItem onClick={(e) => handleStateChange(e, state.icon)} key={state.text}>{state.icon}{state.text}</CustomMenuItem>
                    ))}
                </CustomMenu>

                <CustomMenu title={priority} icon={priorityIcon}>
                    {priorityOptions.map((priority) => (
                        <CustomMenuItem onClick={(e) => handleProjectChange(e, priority.icon)} key={priority.text}>{priority.icon}{priority.text}</CustomMenuItem>
                    ))}
                </CustomMenu>
                <CustomDateMenu onClick={() => setStartOpen(true)} onClose={() => setStartOpen(false)} open={startOpen} title={chosenStartDate} reset={resetStartDate} defaultText='Start Date'>
                    <CustomDatePicker handleChange={handleChange} />
                </CustomDateMenu>
                <CustomDateMenu onClick={() => setDueOpen(true)} onClose={() => setDueOpen(false)} open={dueOpen} title={chosenDueDate} reset={resetDueDate} defaultText='Due Date'>
                    <CustomDatePicker handleChange={handleDueChange} />
                </CustomDateMenu>
            </Box>
        </Box>

        {/* 5th ROW: FOOTER */}
            <Box display='flex' justifyContent='right' borderTop='1px solid' borderColor='border.main'
                padding={'15px'}
            >
                <Box display='flex' flexDirection='row' gap='10px'>
                    <Button variant='contained' 
                    sx={{
                        textTransform: 'none', 
                        color: 'primary.dark',
                        fontSize: '10px',
                        '&:hover': {backgroundColor: 'primary.light'}
                    }} 
                    onClick={closeDialog}>Cancel</Button>
                    <Button sx={{
                        textTransform: 'none', 
                        fontSize: '10px',
                        color: 'white', 
                        backgroundColor: 'secondary.main', 
                        '&:hover': {backgroundColor: 'secondary.main'}}}
                        size='small'
                        onClick={createIssue}
                        >Add Issue</Button>
                </Box>
            </Box>
    </Dialog>
  )
}

export default CreateIssue
