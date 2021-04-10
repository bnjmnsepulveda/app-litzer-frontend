const ADD_SONG = 'app-litzer-frontend/my-queque/ADD_SONG';

export const addSong = (payload: Song) => ({
    type: ADD_SONG,
    payload
})

export interface Song {
    id: string;
    name: string;
    duration: string;
}

export interface MyQueque {
    addedAt: Date;
    song: Song;
}

const initialState: MyQueque[] = []

const myQuequeReducer = (state = initialState, action: { type: string; payload: any }) => {

    switch (action.type) {
        case ADD_SONG: {
            const payload = action.payload
            const addSong = {
                addedAt: new Date(),
                song: payload
            }
            state.push(addSong)
            return state
        }
        default:
            return state
    }
}

export default myQuequeReducer;