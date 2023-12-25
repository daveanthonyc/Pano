import { Typography, Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Topbar from "../../components/Topbar";
import timeOfDayGreeting from "src/utils/timeOfDayGreeting"
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import User from "src/types/User";
import StyledBox from "src/components/StyledBox";
import MainCalendar from "../../components/ResponsiveCalendar";
import IssueStateGraph from "src/components/IssueStateGraph";
import { useGetAllIssuesByUserIdQuery } from "src/services/issue";
import Issue from "src/types/Issue";

function Dashboard() {
    const date = new Date();
    const user: User = useSelector((state) => state.user.user);
    const { data, isLoading } = useGetAllIssuesByUserIdQuery(user._id);

    // get Issues
    const pendingIssues = 5;
    const completedIssues = 7;
    const issuesDueThisWeek = 3;

    const columns: GridColDef[] = [
        {
            field: 'overdue',
            headerName: 'Overdue',
            width: 80,
            editable: false,
        },
        {
            field: 'id',
            headerName: 'Issue',
            width: 260,
            editable: false,
        },
        {
            field: 'dueDate',
            headerName: 'Due Date',
            width: 200,
            editable: false,
        },
    ]

    const [overdueRows, setOverdueRows] = useState(undefined);

    useEffect(() => {
        if (data != undefined) {
            console.log(data);
            const overdueIssues = data.message.filter((issue: Issue) => {
                if (issue.dueDate) {
                    const currDate = new Date(issue.dueDate);
                    console.log(currDate - date);
                    const OVERDUE = currDate < date;
                    console.log(issue.title + " " + OVERDUE);
                    return OVERDUE
                }
            })
            console.log(overdueIssues)

            const overdueRows = overdueIssues.map((issue: Issue) => {
                const currentDate = new Date(issue.dueDate);
                const differenceInMs = currentDate - date;
                const daysOverdue = -1 * Math.round(differenceInMs / (24*60*60*1000));
                return ({
                    overdue: `${daysOverdue} ${daysOverdue <= 1 ? 'day' : 'days'}`,
                    id: issue.title,
                    dueDate: currentDate.toDateString()
                })
            })
            setOverdueRows(overdueRows);
        }
    }, [data])

    const rows = [
        {  overdue: '2 days', id: 'Create Ai functionality', dueDate: 'Dec 21, 2023'},
        {  overdue: '4 days', id: 'Center Div', dueDate: 'Dec 24, 2023'},
        {  overdue: '5 days', id: 'Finish Dashboard', dueDate: 'Dec 11, 2023'},
    ]

  return (
    <Box width='100%'>
        <Topbar title='Dashboard'/>

        <Box padding='25px'>
            <Typography fontWeight='600' fontSize='26px' color='primary.dark'>
                {timeOfDayGreeting() + user.displayName}
            </Typography>
        </Box>

        <Box paddingInline='25px' display='grid' gap='20px' paddingBottom='25px'>
            <StyledBox >
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}> 
                    <Box padding='15px' borderBottom='1px solid' borderRight='1px solid' borderColor='border.main'>
                        <Typography fontSize='12px' sx={{ color: 'primary.dark'}}>Issues assigned to you</Typography>
                        <Typography fontWeight='600' sx={{ color: 'primary.dark'}} fontSize='20px'>
                            {!isLoading && data.message.length}
                        </Typography>
                    </Box>
                    <Box padding='15px' borderBottom='1px solid' borderRight='1px solid' borderColor='border.main'>
                        <Typography fontSize='12px' sx={{ color: 'primary.dark'}}>Pending Issues</Typography>
                        <Typography fontWeight='600' sx={{ color: 'primary.dark'}} fontSize='20px'>
                            {!isLoading && data.message.filter((issue: Issue) => {
                                if (issue.startDate) {
                                    const issueDate = new Date(issue.startDate)
                                    return issueDate < date
                                }
                            }).length}
                        </Typography>
                    </Box>
                    <Box padding='15px' borderRight='1px solid' borderColor='border.main'>
                        <Typography fontSize='12px' sx={{ color: 'primary.dark'}}>Completed Issues</Typography>
                        <Typography fontWeight='600' sx={{ color: 'primary.dark'}} fontSize='20px'>
                            {!isLoading && data.message.filter((issue: Issue) => {
                                return issue.state === 'Done'
                            }).length}
                        </Typography>
                    </Box>
                    <Box padding='15px' borderRight='1px solid' borderColor='border.main'>
                        <Typography fontSize='12px' sx={{ color: 'primary.dark'}}>Issues due by this week</Typography>
                        <Typography fontWeight='600' sx={{ color: 'primary.dark'}} fontSize='20px'>
                            {!isLoading && data.message.filter((issue: Issue) => {
                                if (issue.dueDate) {
                                    const currentIssueDate = new Date(issue.dueDate)
                                    const dateDifferenceInMs = date - currentIssueDate;
                                    const msInAWeek = 604800000
                                    return dateDifferenceInMs < msInAWeek && dateDifferenceInMs > 0;
                                }
                            }).length}
                        </Typography>
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
                        <Box width={'100%'} height={300}>
                        {
                            (!isLoading && (overdueRows != undefined)) &&
                            <DataGrid rows={overdueRows} columns={columns} initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                        }
                                    }
                            }}
                            sx={{ border: 'none', color: 'primary.dark' }}
                            pageSizeOptions={[5]}
                            />
                        }
                        </Box>
                    </StyledBox>
                </Box>
                <Box>
                    <Typography fontSize='19px' fontWeight='600' marginBottom='10px'>Upcoming Issues</Typography>
                    <StyledBox>
                        <Box width={'100%'} height={300}>
                        {
                            <DataGrid rows={rows} columns={columns} initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 4,
                                        }
                                    }
                            }}
                            sx={{ border: 'none', color: 'primary.dark' }}
                            pageSizeOptions={[5]}
                            />
                        }
                        </Box>
                    </StyledBox>
                </Box>
            </Box>

            <Box display='grid' gap='20px' gridTemplateColumns='1fr 1fr'>
                <Box>
                    <Typography fontSize='19px' fontWeight='600' marginBottom='10px'>Issues by States</Typography>
                    <StyledBox>
                        <Box width={'100%'} height={300}>
                            <IssueStateGraph />
                        </Box>
                    </StyledBox>
                </Box>
                <Box>
                    <Typography fontSize='19px' fontWeight='600' marginBottom='10px'>Issues closed by you</Typography>
                    <StyledBox>
                        <p>stuff</p>
                    </StyledBox>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Dashboard;
