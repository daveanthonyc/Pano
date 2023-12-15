import { Box, Dialog, TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem, Paper, InputBase, DialogContent } from '@mui/material'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomMenu from './CustomMenu';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

function CreateIssue({open, setOpen}: {open: boolean, setOpen: (arg: boolean) => void}) {
    const projects = useSelector((state) => state.project.project);
    const user  = useSelector((state) => state.user.user);
    const { _id } = user;
    const closeDialog = () => {
        setOpen(false);
    }


    const [selectedOption, setSelectedOption] = useState('');
    const [issueTitle, setIssueTitle] = useState<string>("");
    const [identifer, setIdentifier] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [project, setProject] = useState<string>("");

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const createProject = async () => {
        const date = new Date();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: _id, 
                projectTitle: issueTitle,
                identifer: identifer,
                description: description,
                users: [_id],
                issues: [],
                creationDate: date
            })
        }
        const res = await fetch(`${import.meta.env.VITE_REACT_BASE_URL}/project`, reqOptions);
        closeDialog();
    }


    const menuclickHandler = (e) => {
        setProject(e.target.innerText);
    }

  return (
    <Dialog open={open} onClose={closeDialog} sx={{}}>
        <DialogContent sx={{overflow: 'hidden', width: '600px'}}>
        <Box sx={{ display: 'grid', gap: '1rem'}}>

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
                            <span onClick={menuclickHandler} key={index} style={{ 
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
            aria-autocomplete='none' 
            autoComplete='off'
            size='small'
            />

        {/* 3rd ROW */}
            <TextField variant='outlined' 
            size='small'
            onChange={(e) => setDescription(e.target.value)} 
            label='Description' 
            sx={{'@:focus': {borderColor: 'red'}}} 
            aria-autocomplete='none' 
            multiline
            rows={5}
            autoComplete='off' />

        {/* 4th ROW */}
            <Box display='flex' justifyContent='space-between' gap='10px'>
                <CustomMenu title='Cool Button' icon={<CircleOutlinedIcon fontSize='8px'/>}>
                    <p>this is the children</p>
                    <p>this is the children</p>
                    <p>this is the children</p>
                    <p>this is the children</p>
                </CustomMenu>
            </Box>
        </Box>

        {/* 5th ROW */}
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
                        onClick={createProject}
                        >Add Issue</Button>
                </Box>
            </Box>
        </DialogContent>
    </Dialog>
  )
}

export default CreateIssue
