import { Box } from "@mui/material";
import Topbar from "../../components/Topbar";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllIssuesByUserIdQuery } from "src/services/issue";
import Issue from "src/types/Issue";

function AllIssues() {
    const { data, isLoading } = useGetAllIssuesByUserIdQuery();


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
        return {
            project: issue.project,
            id: issue.title,
            state: issue.state,
            priority: issue.priorityLevel,
            startDate: issue.startDate,
            dueDate: issue.dueDate
        }
    })
    console.log(rows)

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
                        pageSize: 5,
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
