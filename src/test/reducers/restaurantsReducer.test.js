import reducer from '../../reducers/restaurantsReducer'


describe('restaurants reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      "initialState": {
        "city": "",
        "filter": ""
      }
    })
  })
})