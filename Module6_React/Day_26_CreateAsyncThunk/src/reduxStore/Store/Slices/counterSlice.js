import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const counter = createAsyncThunk(
    'counter/counter',
    async(counterObj,{rejectWithValue})=>{
        try {
           await new Promise ((resolve) =>{
            setTimeout(()=>{
                resolve();
            },2000)
        }) 
        return counterObj.countby;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const counterSlice = createSlice(
    {
        name : 'counter',
        initialState : {
            count : 1,
            status : 'idle',
            error : null
        },
        reducers : {},
        extraReducers : (builder) => {
            builder
                  .addCase(counter.pending, (state) => {
                    state.status = 'loading';
                    state.error = null;
                  })
                  .addCase(counter.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.count += action.payload;
                  })
                  .addCase(counter.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = (action.payload) || 'An unexpected error occurred';
                  })
        }
    }
)

export default counterSlice.reducer