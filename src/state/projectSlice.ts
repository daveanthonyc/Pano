import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: {
        project: {},
        bool: false,
    },
    reducers: {
        setProject: (state, action) => {
            state.project = action.payload;
        },
    }
});

export default projectSlice.reducer;
export const {setProject} = projectSlice.actions;
