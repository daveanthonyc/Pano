import { Typography, Box } from "@mui/material";
import Topbar from "../../components/Topbar";
import timeOfDayGreeting from "src/utils/timeOfDayGreeting"
import { useSelector } from "react-redux";
import User from "src/types/User";
import StyledBox from "src/components/StyledBox";
import MainCalendar from "../../components/ResponsiveCalendar";

function Dashboard() {
    const user: User = useSelector((state) => state.user.user);
    // get Issues
    const issuesAssigned = 4;

  return (
    <Box width='100%'>
        <Topbar title='Dashboard'/>

        <Box padding='25px'>
            <Typography fontWeight='600' fontSize='26px' color='primary.dark'>
                {timeOfDayGreeting() + user.displayName}
            </Typography>
        </Box>

        <Box paddingInline='25px' display='grid' gap='20px'>
        <StyledBox >
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}> 
                <Box padding='15px' borderBottom='1px solid' borderRight='1px solid' borderColor='border.main'>
                    <Typography fontSize='12px' sx={{ color: 'primary.dark'}}>Issues assigned to you</Typography>
                    <Typography fontWeight='600' fontSize='20px'>{issuesAssigned}</Typography>
                </Box>
                <Box padding='15px' borderBottom='1px solid' borderRight='1px solid' borderColor='border.main'>
                    <Typography fontSize='12px' sx={{ color: 'primary.dark'}}>Pending Issues</Typography>
                    <Typography fontWeight='600' fontSize='20px'>{issuesAssigned}</Typography>
                </Box>
                <Box padding='15px' borderRight='1px solid' borderColor='border.main'>
                    <Typography fontSize='12px' sx={{ color: 'primary.dark'}}>Completed Issues</Typography>
                    <Typography fontWeight='600' fontSize='20px'>{issuesAssigned}</Typography>
                </Box>
                <Box padding='15px' borderRight='1px solid' borderColor='border.main'>
                    <Typography fontSize='12px' sx={{ color: 'primary.dark'}}>Issues due by this week</Typography>
                    <Typography fontWeight='600' fontSize='20px'>{issuesAssigned}</Typography>
                </Box>
            </Box>
            <Box sx={{ width: '800px', height: '300px' }}>
                <MainCalendar data={[
                    {
                        day: '2023-01-01',
                        value: 1
                    },
                    {
                        day: '2023-06-06',
                        value: 3
                    },
                ]}/>
            </Box>
        </StyledBox>

        <Box display='grid' gap='20px' gridTemplateColumns='1fr 1fr'>
        <Box>
            <Typography fontSize='19px' fontWeight='600' marginBottom='10px'>Overdue Issues</Typography>
            <StyledBox>
                <p>test</p>
            </StyledBox>
        </Box>
        <Box>
            <Typography fontSize='19px' fontWeight='600' marginBottom='10px'>Upcoming Issues</Typography>
            <StyledBox>
                <p>test</p>
            </StyledBox>
        </Box>
        </Box>
        <Box>
        </Box>
        </Box>
    </Box>
  )
}

export default Dashboard;
