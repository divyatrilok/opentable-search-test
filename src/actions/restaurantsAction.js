import axios from 'axios';

export const restaurantsAction = () => (dispatch, getState) => {
    var state = getState().restaurantsReducer;
    if(typeof state.restaurants === "undefined" || (state.restaurants && state.restaurants.length === 0)){

    
    dispatch({
        type: 'GET_RESTAURANTS',
        payload: [],
        status: 'LOADING',
        statusCode: 200
    })
    var url = `http://opentable.herokuapp.com/api/restaurants?city=${state.city}`
    axios.get(url)
        .then((res) => {
            dispatch({
                type: 'GET_RESTAURANTS',
                payload: res.data.restaurants,
                status: 'SUCCESS',
                statusCode: 200
            })
        })
        .catch((error) => {
            dispatch({
                type: 'GET_RESTAURANTS',
                payload: [],
                status: "ERROR",
                statusCode: error.response.status
            })
        })
    }
    else{
        dispatch({
            type: 'GET_RESTAURANTS',
            payload: state.restaurants,
            status: 'SUCCESS',
            statusCode: 200
        })
    }
}

export const clearRestaurants = () => dispatch => {
    dispatch({
        type: 'GET_RESTAURANTS',
        payload: [],
        status: 'SUCCESS',
        statusCode: 200
    })
}

export const updateCity = (city) => dispatch => {
    dispatch({
        type: 'SET_CITY',
        payload: city
    })
}

export const updateFilter = (filter) => dispatch => {
    dispatch({
        type: 'SET_FILTER',
        payload: filter
    })
}
