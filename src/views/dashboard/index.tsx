import { Typography, Box, CircularProgress } from "@mui/material";
import Topbar from "../../components/Topbar";
import { useGetAllIssuesQuery } from "../../services/issue";

function Dashboard() {
    const { data, isLoading } = useGetAllIssuesQuery();

  return (
    <Box width='100%'>
        <Topbar title='Dashboard'/>
        <Box padding='25px'>
            <Typography fontWeight='600' fontSize='26px' color='primary.dark'>Welcome, David Chiang</Typography>
            <Typography color='primary.dark'>
                {isLoading ? <CircularProgress color="primary"/> : data.fact}
            </Typography>
        </Box>
    </Box>
  )
}

export default Dashboard;
