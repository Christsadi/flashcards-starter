import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
        const { id } = action.payload;
        state.quizzes[id] = action.payload;
    },
    }
}

export const quizzesSlice = createSlice(options);
export const selectQuiz = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;