import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const favorites_URL = 'https://fakestoreapi.com/products'; // change this API URL  

const initialState = {
    favoritesList: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}
export const fetchfavorites = createAsyncThunk('favorites/fetchfavorites', async () => {
    try {
        const response = await axios.get(favorites_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
})

const favSlice = createSlice({

    name: "favorites",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchfavorites.pending, (state, action) => {
                state.status = 'loading'
                state.error = null;

            }).addCase(fetchfavorites.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.favoritesList = action.payload;
            }).addCase(fetchfavorites.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})
export const { reducer: favReducer } = favSlice;


export const SelectAllFavorites = (state) => {
return state.fav.favoritesList
}

export const SelectfavoritesById = (state, favId) => {
    return state.favorites.favoritesList.find(fav => fav.id === parseInt(favId));
};
export default favSlice.reducer;