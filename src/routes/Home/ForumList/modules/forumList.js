import { CALL_API } from 'redux-api-middleware'
import { extend } from 'lodash/fp'
import cookie from 'react-cookie'
import config from 'config'

// Constants
export const FETCH_ENTRANCE_REQUEST = 'FETCH_ENTRANCE_REQUEST'
export const FETCH_ENTRANCE_SUCCESS = 'FETCH_ENTRANCE_SUCCESS'
export const FETCH_ENTRANCE_FAILURE = 'FETCH_ENTRANCE_FAILURE'

export function fetchEntrance () {
  return {
    [CALL_API]: {
      endpoint: config.api_root_v2 + '/suggests/entrance',
      method: 'GET',
      headers: config.headers,
      types: [
        FETCH_ENTRANCE_REQUEST,
        {
          type: FETCH_ENTRANCE_SUCCESS,
          payload: (action, state, res) => {
            return res.json()
          }
        },
        FETCH_ENTRANCE_FAILURE
      ]
    }
  }
}

export const actions = {
}

// Action Handlers
const ACTION_HANDLERS = {
  [FETCH_ENTRANCE_REQUEST]: (state, action) => {
    return ({ ...state, entrance: { isFetching: true, error: {}, items: [] } })
  },
  [FETCH_ENTRANCE_SUCCESS]: (state, action) => {
    return ({ ...state, entrance: { isFetching: false, lastUpdate: Date.now(), items: action.payload } })
  },
  [FETCH_ENTRANCE_FAILURE]: (state, action) => {
    return ({ ...state, entrance: { isFetching: false, error: {}, items: [] } })
  }
}

// Reducers
const initialState = { entrance: { isFetching: false, error: {}, items: [] }, offers: { isFetching: false, error: {}, items: [], lastUpdate: '' } }
export default function forumListReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
