import * as ActionTypes from "./ActionTypes";
import {baseUrl} from '../shared/baseUrl'


export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
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
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}