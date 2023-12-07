import { Typography, Box, CircularProgress } from "@mui/material";
import Topbar from "../../components/Topbar";
import { useGetUserByIdQuery } from "../../services/issue";

function Dashboard() {
    const userId = '6571e9dfaacc14d194017add'
    const { data, isLoading } = useGetUserByIdQuery(userId);

  return (
    <Box width='100%'>
        <Topbar title='Dashboard'/>
        <Box padding='25px'>
            <Typography fontWeight='600' fontSize='26px' color='primary.dark'>Welcome, {!isLoading && `${data.firstName} ${data.lastName}`}</Typography>
            <Typography color='primary.dark'>
                {isLoading ? <CircularProgress sx={{color: 'greyAccent.main'}} /> : data.message}
            </Typography>
        </Box>
    </Box>
  )
}

export default Dashboard;
