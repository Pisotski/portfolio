import { createSlice } from '@reduxjs/toolkit'

const testReducerSlice = createSlice({
    name: 'test',
    initialState: {
        text: ''
    },
    reducers: {
        displayText: (state, action) => {
            state.text = action.payload
        }
    }
})

export const { displayText } = testReducerSlice.actions
export default testReducerSlice.reducer
// TEST REMOVE ME