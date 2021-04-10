const OPEN_DIALOG = 'app-litzer/ui/OPEN_DIALOG';
const CLOSE_DIALOG = 'app-litzer/ui/CLOSE_DIALOG';

export const openDialog = (payload: { title: string; message: string; payload: any }) => ({
    type: OPEN_DIALOG,
    payload
})

export const closeDialog = () => ({
    type: CLOSE_DIALOG
})

const initialState = {
    showDialog: false,
    title: '',
    message: '',
    payload: null
}

const dialogReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case OPEN_DIALOG:
            const payload = action.payload
            return {
                showDialog: true,
                title: payload.title,
                message: payload.message,
                payload: payload.payload
            }
        case CLOSE_DIALOG:
            return {
                showDialog: false,
                title: '',
                message: '',
                payload: null
            }
        default:
            return state
    }
}

export default dialogReducer;