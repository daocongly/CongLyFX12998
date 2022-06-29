import * as ActionTypes from "./ActionTypes";

export const Salarys = (state = {
    isLoading: true,
    errMess:null,
    salarys: []
},action)=> {
    switch(action.type) {
        case ActionTypes.ADD_SALARY:
            return {...state,isLoading: false, errMess: null, salarys: action.payload}
        case ActionTypes.SALARY_LOADING:
            return {...state,isLoading: true, errMess: null, salarys: []}
        case ActionTypes.SALARY_FAILED:
            return {...state,isLoading: false, errMess: action.payload, salarys: []}

        default:
        return state;
    }
}