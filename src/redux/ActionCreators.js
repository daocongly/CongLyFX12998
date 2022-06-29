import * as ActionTypes from "./ActionTypes";
import {baseUrl} from '../share/baseUrl'

// fetch danh sách staff
export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error' + response.status + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message)
        throw errmess;
    }
    )
    .then(response => response.json())
    .then(staffs => dispatch(addStaffs(staffs)))
    .catch(error => dispatch(staffsFailed(error.message)));
}

export const staffsLoading =()=> ({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
})

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
})

// fetch danh sách bộ phận
export const fetchDepart = () => (dispatch) => {
    dispatch(departLoading(true));

    return fetch(baseUrl + 'departments')
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error' + response.status + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message)
        throw errmess;
    }
    )
    .then(response => response.json())
    .then(depart => dispatch(addDepart(depart)))
    .catch(error => dispatch(departFailed(error.message)));
}

export const departLoading =()=> ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const departFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
})

export const addDepart = (depart) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: depart
    
})

//fetch danh sách bảng lương nhân viên

export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading(true));

    return fetch(baseUrl + 'staffsSalary')
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error' + response.status + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message)
        throw errmess;
    }
    )
    .then(response => response.json())
    .then(salary => dispatch(addSalary(salary)))
    .catch(error => dispatch(salaryFailed(error.message)));
}

export const salaryLoading =()=> ({
    type: ActionTypes.SALARY_LOADING
});

export const salaryFailed = (errmess) => ({
    type: ActionTypes.SALARY_FAILED,
    payload: errmess
})

export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary
    
})