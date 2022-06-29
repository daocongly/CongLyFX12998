import * as ActionTypes from "./ActionTypes";

export const Departments = (state = {
    isLoading: true,
    errMess:null,
    departs: []
},action)=> {
    switch(action.type) {
        case ActionTypes.ADD_DEPARTMENTS:
            return {...state,isLoading: false, errMess: null, departs: action.payload}
        case ActionTypes.DEPARTMENTS_LOADING:
            return {...state,isLoading: true, errMess: null, departs: []}
        case ActionTypes.DEPARTMENTS_FAILED:
            return {...state,isLoading: false, errMess: action.payload, departs: []}

        default:
        return state;
    }
}