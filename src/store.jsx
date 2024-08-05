import { createStore } from "redux";
import reducerCounter from "./services/reducers/reducerCounter";

const store = createStore(reducerCounter);

export default store;
