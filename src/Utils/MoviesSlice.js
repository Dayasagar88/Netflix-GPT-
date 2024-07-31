import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "Movies",
    initialState: {
        nowPlayingMovies : null,
        trendingMovies: null,
        upComingMovies : null,
        trailer: null
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrendingMovies:(state , action) => {
            state.trendingMovies = action.payload;
        },
        addUpComingMovies:(state , action) => {
            state.upComingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        }
    }
})

export default MoviesSlice.reducer;

export const { addNowPlayingMovies, addTrailer , addTrendingMovies, addUpComingMovies} = MoviesSlice.actions