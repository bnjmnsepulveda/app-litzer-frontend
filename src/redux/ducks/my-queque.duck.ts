const ADD_SONG = 'app-litzer-frontend/my-queque/ADD_SONG';

export const addSong = (payload: MyQueque) => ({
    type: ADD_SONG,
    payload
})

export interface MyQueque {
    id: string;
    name: string;
    duration: string;
}

const initialState: MyQueque[] = []

const myQuequeReducer = (state = initialState, action: { type: string; payload: any }) => {

    switch (action.type) {
        case ADD_SONG: {
            state.push(action.payload)
            return state
        }
        default:
            return state
    }
}

export default myQuequeReducer;