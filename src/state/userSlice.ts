import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: {},
        bool: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setTest: (state) => {
            state.bool = !state.bool
        }
    }
});

export default userSlice.reducer;
export const {setUser, setTest} = userSlice.actions;
