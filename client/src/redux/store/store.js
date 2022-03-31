import { configureStore } from '@reduxjs/toolkit'
import testReducer from '../reducers/testReducer'

export default configureStore({
    // TEST REMOVE ME
    reducer : {
        test : testReducer 
    }
})

