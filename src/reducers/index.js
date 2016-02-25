import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";

const rootReducer = combineReducers({
	books: BooksReducer //the state books has the value booksReducer which is the list of objects
});

export default rootReducer;
