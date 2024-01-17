import { Typography, Box, CircularProgress } from "@mui/material";
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
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

function Dashboard() {
    const date = new Date();
    const user: User = useSelector((state) => state.user.user);
    const { data, isLoading } = useGetAllIssuesByUserIdQuery(user._id);

    const columns = (firstHeaderName: string, thirdHeaderName: string) => {
        return(
        [
            {
                field: 'overdue',
                headerName: firstHeaderName,
                width: 100,
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
                headerName: thirdHeaderName,
                width: 200,
                editable: false,
            },
        ]
        )
    }

    const [overdueRows, setOverdueRows] = useState(undefined);
    const [upcomingRows, setUpcomingRows] = useState(undefined);
    const [backlog, setBacklog] = useState<number>(0);
    const [todo, setTodo] = useState<number>(0);
    const [inProgress, setInProgress] = useState<number>(0);
    const [done, setDone] = useState<number>(0);
    const [cancelled, setCancelled] = useState<number>(0);

    useEffect(() => {
        if (data != undefined) {
            const overdueIssues = data.message.filter((issue: Issue) => {
                if (issue.dueDate) {
                    const currDate = new Date(issue.dueDate);
                    const OVERDUE = currDate < date;
                    return OVERDUE
                }
            })

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

            const upcomingIssues = data.message.filter((issue: Issue) => {
                if (issue.dueDate) {
                    const issueDueDate = new Date(issue.dueDate);
                    return date < issueDueDate;
                }
            })

            const upcomingRowsGridFormat = upcomingIssues.map((issue: Issue) => {
                const daysUpcoming = -1*Math.round((date - new Date(issue.dueDate)) / (24*60*60*1000));
                return({
                    overdue: `${daysUpcoming} ${daysUpcoming <= 1 ? 'day' : 'days'}`,
                    id: issue.title,
                    dueDate: new Date(issue.dueDate).toDateString()
                })
            })
            setUpcomingRows(upcomingRowsGridFormat);


            data.message.forEach((issue) => {
                switch (issue.state) {
                    case "Backlog":
                        setBacklog(backlog+1);
                        break;
                    case "Todo":
                        setTodo(todo+1);
                        break;
                    case "In Progress":
                        setInProgress(inProgress+1);
                        break;
                    case "Done":
                        setDone(done+1);
                        break;
                    case "Cancelled":
                        setCancelled(cancelled+1);
                        break;
                }
            })
            console.log(data.message)
        }
    }, [data])
        
// need to get values
// async issues
// on useeffect when data is loaded, changeState of my state for graph
// in tsx, when data loaded, use the variable

const graphData = (backlog, todo, inProgress, done, cancelled) => {
    const finalGraphData = [];
    if (backlog > 0) {
        finalGraphData.push(
            {
                "id": "Backlog",
                "label": "Backlog",
                "value": backlog,
                "color": "rgb(100,240,100)"
            },
        )
    }
    if (todo > 0) {
        finalGraphData.push(
            {
                "id": "Todo",
                "label": "Todo",
                "value": todo,
                "color": "rgb(240,100,100)"
            },
        )
    }
    if (inProgress > 0) {
        finalGraphData.push(
            {
                "id": "In Progress",
                "label": "In Progress",
                "value": inProgress,
                "color": "rgb(240,100,100)"
            },
        )
    }
    if (done > 0) {
        finalGraphData.push(
            {
                "id": "Done",
                "label": "Done",
                "value": done,
                "color": "rgb(100,100,100)"
            },
        )
    }
    if (cancelled > 0) {
        finalGraphData.push(
            {
                "id": "Cancelled",
                "label": "Cancelled",
                "value": cancelled,
                "color": "rgb(255,100,100)"
            },
        )
    }
    console.log(finalGraphData);
    return finalGraphData
    }

  return (
    <Box width='100%'>
        <Topbar title='Dashboard'/>

        <Box padding='25px'>
            <Typography fontWeight='600' fontSize='26px' color='primary.dark'>
                {timeOfDayGreeting() + user.displayName}
            </Typography>
        </Box>

        <Box paddingInline='25px' display='grid' gap='20px' paddingBottom='25px'>

            {/* 1st STAT ROW */}

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
                                    return (dateDifferenceInMs < msInAWeek) && (dateDifferenceInMs > 0);
                                }
                            }).length}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '800px', height: '300px' }}>
                    {
                        isLoading ? 
                            <CircularProgress /> 
                                :
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
                    }
                </Box>
            </StyledBox>

            {/* 2nd STAT ROW */}

            <Box display='grid' gap='20px' gridTemplateColumns='1fr 1fr'>
                <Box>
                    <Typography fontSize='19px' fontWeight='600' marginBottom='10px' sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        Overdue Issues <ErrorOutlineOutlinedIcon fontSize="10px" sx={{color: 'rgb(255,90,90)'}}/>
                    </Typography>
                    <StyledBox>
                        <Box width={'100%'} height={300}>
                        {
                            (!isLoading && (overdueRows != undefined)) &&
                            <DataGrid rows={overdueRows} columns={columns("Overdue", "Due Date")} initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 3,
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
                    <Typography fontSize='19px' fontWeight='600' marginBottom='10px' sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        Upcoming Issues <AccessTimeOutlinedIcon fontSize="10px" sx={{color: 'secondary.main'}}/>
                    </Typography>
                    <StyledBox>
                        <Box width={'100%'} height={300}>
                        {   ((upcomingRows != undefined) && !isLoading) &&
                            <DataGrid rows={upcomingRows} columns={columns("Upcoming", "Start Date")} initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 3,
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

            {/* 3rd STAT ROW */}

            <Box display='grid' gap='20px' gridTemplateColumns='1fr 1fr'>
                <Box>
                    <Typography fontSize='19px' fontWeight='600' marginBottom='10px'>Issues by States</Typography>
                    <StyledBox>
                        <Box width={'100%'} height={300}>
                            {/* need props for data */}
                            {
                            (data != undefined) && 
                            <IssueStateGraph data={graphData(backlog, todo, inProgress, done, cancelled)}/>
                            }
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
