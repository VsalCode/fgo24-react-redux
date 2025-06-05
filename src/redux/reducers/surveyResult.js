import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: [],
}

const surveyResult = createSlice({
    name: 'surveyResult',
    initialState,
    reducers: {
      addData: (state, action) => {
        const id = state.data.length + 1
        state.data.push({
          id,
          ...action.payload
        })
        return
      },
      removeData: (state, action) => {
        state.data = state.data.filter((_, index) => index !== action.payload);
        return
      }
    }
})

export const { addData, removeData } = surveyResult.actions
export default surveyResult.reducer