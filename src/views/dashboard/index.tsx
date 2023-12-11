import { Typography, Box } from "@mui/material";
import Topbar from "../../components/Topbar";
import timeOfDayGreeting from "src/utils/timeOfDayGreeting"
import { useSelector } from "react-redux";
import User from "src/types/User";

function Dashboard() {
    const user: User = useSelector((state) => state.user.user);

  return (
    <Box width='100%'>
        <Topbar title='Dashboard'/>
        <Box padding='25px'>
            <Typography fontWeight='600' fontSize='26px' color='primary.dark'>
                {timeOfDayGreeting() + user.displayName}
            </Typography>
            <Typography color='primary.dark'>
                {user.role}
            </Typography>
        </Box>
    </Box>
  )
}

export default Dashboard;
