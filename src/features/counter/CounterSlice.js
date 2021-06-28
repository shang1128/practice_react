import {createSlice} from '@reduxjs/toolkit';


export const counterSlice = createSlice({
	name:'MyCart',
	initialState:{
		cart:[],
	},
	reducers: {
		add: (state, action) =>{
			state.cart = push(action.payload)
		}
	}
})

export const { add } = counterSlice.actions

export default counterSlice.reducer