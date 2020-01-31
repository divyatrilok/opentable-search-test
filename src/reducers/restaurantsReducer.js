const initialState = {
    city: "",
    filter: ""
}

export default (state = { initialState }, action) => {
    const payload = action.payload;
    switch (action.type) {
        case 'GET_RESTAURANTS':
            console.log("get restaurants")
            var _restaurants = payload || [];
            if(state.filter!== undefined && state.filter !== ''){
                var filter = state.filter.toLowerCase();
                _restaurants = _restaurants.filter((item) => {
                    return item.name.toLowerCase().indexOf(filter) > -1 || item.address.toLowerCase().indexOf(filter) > -1 || item.area.toLowerCase().indexOf(filter) > -1
                })
            }
            return {
                ...state,
                restaurants: payload,
                filteredRestaurants: _restaurants,
                status: action.status,
                statusCode: action.statusCode
            }
        case 'SET_CITY':
            console.log("set city")
            return {
                ...state,
                city: payload
            }
        case 'SET_FILTER':
            console.log("set filter")
            return {
                ...state,
                filter: payload
            }
        default:
            return state
    }
}
