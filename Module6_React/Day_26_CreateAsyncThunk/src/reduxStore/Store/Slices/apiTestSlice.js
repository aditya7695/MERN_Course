import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const fetchdata = createAsyncThunk(
    'fetchdata/fetchdata',
    async(_,{rejectWithValue})=>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return await response.json();

        }catch(error){

            return rejectWithValue(error.message);

        }

    }
)

const apiTestSlice = createSlice(
    {
        name : 'apiTester',
        initialState : {
            data : [],
            status : 'idle',
            error : null
        },
        reducers : {},
        extraReducers : (builder) => {
            builder
              .addCase(fetchdata.pending, (state) => {
                state.status = 'loading';
                state.error = null;
              })
              .addCase(fetchdata.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
              })
              .addCase(fetchdata.rejected, (state, action) => {
                state.status = 'failed';
                state.error = (action.payload) || 'An unexpected error occurred';
              })
        
            }
    }
)


export default apiTestSlice.reducer