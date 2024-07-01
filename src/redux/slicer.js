import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetctmydata = createAsyncThunk("fetchmyData", async () => {
  const data = await fetch(
    "https://my-json-server.typicode.com/fatihmatik/json-server/products"
  );
  return data.json();
});
const mydataSlice = createSlice({
  name: "mydata",
  initialState: {
    data: [],
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetctmydata.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetctmydata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetctmydata.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default mydataSlice.reducer;
