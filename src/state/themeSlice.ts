import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        theme: 'light'
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = (state.theme === 'light') ? 'dark' : 'light'
        }
    }
});

export default themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;
