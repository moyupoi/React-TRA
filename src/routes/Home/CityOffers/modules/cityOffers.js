import { CALL_API } from 'redux-api-middleware'
import { extend } from 'lodash/fp'
import cookie from 'react-cookie'
import config from 'config'

// Constants
export const FETCH_OKEXES_TICKER_REQUEST = 'FETCH_OKEXES_TICKER_REQUEST'
export const FETCH_OKEXES_TICKER_SUCCESS = 'FETCH_OKEXES_TICKER_SUCCESS'
export const FETCH_OKEXES_TICKER_FAILURE = 'FETCH_OKEXES_TICKER_FAILURE'

// Actions
export function fetchOkexesTicker () {
  return {
    [CALL_API]: {
      endpoint: 'http://api.travel.one/okexes/ticker',
      method: 'GET',
      types: [
        FETCH_OKEXES_TICKER_REQUEST,
        {
          type: FETCH_OKEXES_TICKER_SUCCESS,
          payload: (action, state, res) => {
            return res.json()
          }
        },
        FETCH_OKEXES_TICKER_FAILURE
      ]
    }
  }
}

export const actions = {
  fetchOkexesTicker
}

// Action Handlers
const ACTION_HANDLERS = {
  [FETCH_OKEXES_TICKER_REQUEST]: (state, action) => {
    return ({ ...state, okex: { isFetching: true, error: {}, items: {} } })
  },
  [FETCH_OKEXES_TICKER_SUCCESS]: (state, action) => {
    return ({ ...state, okex: { isFetching: false, lastUpdate: Date.now(), items: action.payload } })
  },
  [FETCH_OKEXES_TICKER_FAILURE]: (state, action) => {
    return ({ ...state, okex: { isFetching: false, error: {}, items: {} } })
  }
}

// Reducers
const initialState = { okex: { isFetching: false, error: {}, items: [] } }
export default function cityOffersReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
