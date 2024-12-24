import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
 
// Async thunk to fetch stations data
export const fetchStations = createAsyncThunk(
  "stations/fetchStations",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/mockData/stations.json");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch stations.");
    }
  }
);
 
const stationsSlice = createSlice({
  name: "stations",
  initialState: {
    stations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers:(builder) => {
    builder
      .addCase(fetchStations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStations.fulfilled, (state, action) => {
        state.loading = false;
        state.stations = action.payload;
      })
      .addCase(fetchStations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
 
export default stationsSlice.reducer;