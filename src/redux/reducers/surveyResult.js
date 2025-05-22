import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: []
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
      }
    }
})

export const { addData } = surveyResult.actions
export default surveyResult.reducer