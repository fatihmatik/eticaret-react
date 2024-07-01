import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfileData = createAsyncThunk("fetchmyData", async () => {
  const data = await fetch(
    "http://localhost:8000/users"
  );
  return data.json();
});
const profileDataSlice = createSlice({
  name: "profileData",
  initialState: {
    data: [],
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default profileDataSlice.reducer;
