import {createAsyncThunk , createSlice} from "@reduxjs/toolkit"

export const DelayedMultiply = createAsyncThunk(
    'delayMultiply/DelayedMultiply',
    async(multiplyObj , thunkAPI) => {
        try{
                await new Promise((resolve) => {
                    setTimeout(()=>{
                        resolve();
                    },5000)
                });
                return multiplyObj.multiplyBy;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const delayMultiplyerSlice = createSlice(
    {
        name : "delayMultiplyer",
        initialState : {
            value : 2,
            loading : true,
            error : null
        },
        reducers :{

        },
        extraReducers : (builder) => {
    builder
      .addCase(DelayedMultiply.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(DelayedMultiply.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload * state.value;
      })
      .addCase(DelayedMultiply.rejected, (state, action) => {
        state.status = 'failed';
        state.error = (action.payload) || 'An unexpected error occurred';
      })

    }
})


export default delayMultiplyerSlice.reducer
