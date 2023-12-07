import { Typography, Box } from "@mui/material";
import Topbar from "../../components/Topbar";

function Dashboard() {
  return (
    <Box width='100%'>
        <Topbar title='Dashboard'/>
        <Box padding='25px'>
            <Typography fontWeight='600' fontSize='26px' color='primary.dark'>Welcome, David Chiang</Typography>
        </Box>
    </Box>
  )
}

export default Dashboard;
