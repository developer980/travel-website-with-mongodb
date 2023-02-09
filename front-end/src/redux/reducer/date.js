import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice(
    {
        name: "date",
        initialState: {
            checkIn: '',
            checkOut: '',
            token: '',
            favourites:[],
            data: {
                
            },
            email:""
        },
        reducers: {
            setCheckIn: (state, action) => {
                console.log(action.payload)
                state.checkIn = action.payload;
                console.log(state.checkIn)
            },
            
            setCheckOut: (state, action) => {
                console.log(action.payload)
                state.checkOut = action.payload;
                console.log(state.checkOut)
            },
            setToken: (state, action) => {
                state.token = action.payload
            },
            setEmail: (state, action) => {
                state.email = action.payload
            }
            // setFavourites: (state, action) => {
            //     state.favourites = action.payload
            //     console.log(state.favourites)
            // }
        }
    }
)

export const { setCheckIn, setCheckOut, setToken, setEmail } = dateSlice.actions
export default dateSlice.reducer