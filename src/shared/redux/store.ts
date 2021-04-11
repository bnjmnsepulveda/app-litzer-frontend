import { createStore, combineReducers } from 'redux';
import dialogReducer from './ducks/dialog.duck';
import myQuequeReducer from './ducks/my-queque.duck';

const rootReducer = combineReducers({
    dialog: dialogReducer,
    myQueque: myQuequeReducer
});

const configureStore = createStore(
    rootReducer,
)

export type RootState = ReturnType<typeof rootReducer>
export default configureStore
