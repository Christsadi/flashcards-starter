import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'topics',
    initialState: {
        topics: {
            topics: {
                '123': {
                    id: '123',
                    name: 'name of topic',
                    icon: 'icon url',
                    quizIds: ['456']
                    }
                }
            },
        },
    reducers: {
            addTopic: (state, action) => {
                const {id, name, icon} = action.payload;
                state.topics[id] = {
                    id: id, 
                    name: name, 
                    icon: icon,
                    quizIds: []
                }
            }
        }, 
    };

const topicsSlice = createSlice(options);

export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;

