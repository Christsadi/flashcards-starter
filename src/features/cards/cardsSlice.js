import { createSlice } from "@reduxjs/toolkit";

const option = {
    name: "cards",
    initialState: {
        cards: {},
    },
    reducers: {
        addCard: (state, action) => {
            const { id } = action.payload;
            state.cards[id] = action.payload;
        }
    }
}

export const cardsSlice = createSlice(option);
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
export const selectCards = state => state.cards.cards;