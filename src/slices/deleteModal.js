import { createSlice } from "@reduxjs/toolkit";

const deleteModalSlice = createSlice({
    name: 'deleteModal',
    initialState: {
        data: null,
        open: false,
    },
    reducers: {
        deleteOpen(state, action) {
            state.open = true;
            state.data = action.payload
        },
        deleteClose(state,action) {
            state.open = false
            state.data = null
        }

    }
})

export const {deleteOpen, deleteClose} = deleteModalSlice.actions
export const deleteModalReducer = deleteModalSlice.reducer