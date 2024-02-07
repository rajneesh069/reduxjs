import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type counterState = {
  value: number;
};

const initialState: counterState = {
  value: 0,
};
//useState(0)
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //<slice_name>/<reducer_name> -> redux toolkit :{type : "<reducer_name>", returnValue : reducer ka maal, payload : "valueGivenByDispatchFunction"}
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    reset: (state) => {
      state.value = initialState.value;
      //state = initialState won't work
    },
    setValue: (state, action: PayloadAction<number>) => {
      console.log(action);
      state.value = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, setValue } = counterSlice.actions;
export default counterSlice.reducer;

/**
 * const counterSlice = {
 * name : "counter",
 * initialState : initialState,
 * reducers : {
 * increment : (state)=>{
 * state.value +=1
 * }
 * }
 * }
 * function createSlice(param){
 * const {name, initialState, reducers} = param;
 * const actions = {...reducers};
 * return {
 * actions;
 *
 * }
 * }
 * const someFunction = ()=>{
 * return 2;}
 * const value = someFunction(); // value =2;
 *  const counterSlice = createSlice(param);
 *
 *
 * setTodo : (state, action: PayloadAction<ToDo>)=>{
 * const {title, description} = actiom.payload;
 * {...state} = {...state, title, description};  -> won't work
 * state = {...state, title, description} -> won't work
 * state.title = title; -> will work
 * state.description = description; -> will work
 * }
 */
