import { createStore, combineReducers, applyMiddleware } from "redux";
import {Staffs} from './staffs';
import {Departments} from './departments';
import { Salarys } from "./staffsSalary";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departs: Departments,
            salarys: Salarys
        }),applyMiddleware(thunk, logger)

    );
    return store;
};