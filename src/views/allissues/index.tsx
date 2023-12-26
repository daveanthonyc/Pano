import { Box } from "@mui/material";
import Topbar from "../../components/Topbar";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllIssuesByUserIdQuery } from "src/services/issue";
import Issue from "src/types/Issue";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function AllIssues() {
    const user = useSelector((state) => state.user.user);
    const { data, isLoading, refetch } = useGetAllIssuesByUserIdQuery(user._id);

    useEffect(() => {
        if (!user && isLoading) {
            refetch();
        }
    }, [user]);


    if (isLoading) {
        return (
            <Box width='100%'>
                <Topbar title='All Issues'/>
                <Box padding='25px'>
                </Box>
            </Box>
        )
    }

    const rows = data?.message.map((issue: Issue) => {
        const startDate = new Date(issue.startDate).toDateString()
        const dueDate = new Date(issue.dueDate).toDateString()

        return {
            project: issue.project,
            id: issue.title,
            state: issue.state,
            priority: issue.priorityLevel,
            startDate: (startDate != "Invalid Date") ? startDate : "",
            dueDate: (dueDate != "Invalid Date") ? dueDate : ""
        }
    })

    // access issues
    const columns: GridColDef[] = [
        {
            field: 'project',
            headerName: 'Project',
            width: 150,
            editable: false,
        },
        {
            field: 'id',
            headerName: 'Issue',
            width: 200,
            editable: false,
        },
        {
            field: 'state',
            headerName: 'State',
            width: 110,
            editable: false,
        },
        {
            field: 'priority',
            headerName: 'Priority',
            width: 110,
            editable: false,
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            width: 200,
            editable: false,
        },
        {
            field: 'dueDate',
            headerName: 'Due Date',
            width: 200,
            editable: false,
        },
    ]


  return (
    <Box width='100%'>
        <Topbar title='All Issues'/>
        <Box padding='25px'>
        {
            !isLoading && 
            <DataGrid rows={rows} columns={columns} initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 10,
                    }
                }
                }}
                pageSizeOptions={[5]}
            />
        }
        </Box>
    </Box>
  )
}

export default AllIssues;
