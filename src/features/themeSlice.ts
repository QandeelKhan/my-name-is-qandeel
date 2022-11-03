import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface userDataInterface {
    themeMode: string;
    // email: string;
}

const initialState: userDataInterface = {
    themeMode: "light-mode",
};

export const themeSlice = createSlice({
    name: "theme_info",
    initialState,
    reducers: {
        setThemeMode: (state, action) => {
            state.themeMode = action.payload;
            // state.themeMode = action.payload.mode;
        },
        // unSetUserInfo: (state, action) => {
        //     state.email = action.payload.email;
        //     state.mode = action.payload.name;
        // },
    },
});

export const { setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
