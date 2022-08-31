import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
	authReducer,
});
let store = null;
export const makeStore = (initialState) => {
	const { composeWithDevTools } = require("redux-devtools-extension");
	const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(
		createStore
	);
	store = createStoreWithMiddleware(rootReducer, initialState);
	return store;
};
export const wrapper = createWrapper(makeStore, { debug: true });