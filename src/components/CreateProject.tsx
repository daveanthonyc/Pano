import { Box, Dialog, TextField, Typography, Button } from '@mui/material'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function CreateProject({open, setOpen, refetch}: {open: boolean, setOpen: (arg: boolean) => void, refetch: () => void}) {
    const user  = useSelector((state) => state.user.user);
    const { _id } = user;
    const closeDialog = () => {
        setOpen(false);
    }

    const [projectTitle, setProjectTitle] = useState<string>("");
    const [identifer, setIdentifier] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const createProject = async () => {
        const date = new Date();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: _id, 
                projectTitle: projectTitle,
                identifer: identifer,
                description: description,
                users: [_id],
                issues: [],
                creationDate: date
            })
        }
        const res = await fetch(`${import.meta.env.VITE_REACT_BASE_URL}/project`, reqOptions);
        refetch();
        closeDialog();
    }

  return (
    <Dialog open={open} onClose={closeDialog}>
        <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-betwen', gap: '1rem'}}>
            <DesignServicesIcon sx={{color: 'secondary.main', fontSize: '80px'}}/>
            <Typography variant='h2' fontSize='30px' fontWeight='500'>Create a new Project</Typography>
            <Box display='flex' gap='10px' padding='10px'>
                <TextField variant='outlined' onChange={(e) => setProjectTitle(e.target.value)} label='Project Title' aria-autocomplete='none' autoComplete='off' />
                <TextField variant='outlined' onChange={(e) => setIdentifier(e.target.value)} label='Identifer' aria-autocomplete='none' autoComplete='off'/>
            </Box>
            <Box>
                <TextField variant='outlined' onChange={(e) => setDescription(e.target.value)} label='Description' sx={{'@:focus': {borderColor: 'red'}}} aria-autocomplete='none' autoComplete='off' />
            </Box>
            <Box display='flex' justifyContent='right'>
                <Box display='flex' flexDirection='row' gap='10px'>
                    <Button variant='contained' sx={{textTransform: 'none', color: 'primary.dark','&:hover': {backgroundColor: 'primary.light'}}} onClick={closeDialog}>Cancel</Button>
                    <Button sx={{textTransform: 'none', color: 'primary.main', backgroundColor: 'secondary.main', '&:hover': {backgroundColor: 'secondary.main'}}}
                        onClick={createProject}
                        >Create Project</Button>
                </Box>
            </Box>
        </Box>
    </Dialog>
  )
}

export default CreateProject
