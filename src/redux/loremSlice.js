import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLorem = createAsyncThunk(
  "lorem/fetchLorem",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://api.lorem.com/ipsum");
      if (!response.ok) return rejectWithValue(`HTTP Error ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const loremSlice = createSlice({
  name: "lorem",
  initialState: { title: "", body: "", loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => { state.loading = true; })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.title = action.payload.title;
        state.body = action.payload.body;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch";
      });
  }
});

export default loremSlice.reducer;
