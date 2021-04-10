import { createStore, combineReducers } from 'redux';
import dialogReducer from './ducks/dialog.duck';

const rootReducer = combineReducers({
    dialog: dialogReducer
});

const configureStore = createStore(
    rootReducer,
)

export type RootState = ReturnType<typeof rootReducer>
export default configureStore
