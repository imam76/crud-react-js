import { combineReducers } from "redux";
import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DETAIL_PENDING,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_ERROR,
  FETCH_DATA_ERROR,
  PATCH_DATA_PENDING,
  PATCH_DATA_SUCCESS,
  PATCH_DATA_ERROR,
  DETAIL_UPDATE_ON_CHANGE,
  DETAIL_UPDATE_SUCCESS,
  DETAIL_UPDATE_PENDING,
  DETAIL_UPDATE_ERROR,
  UPDATA_DETAIL_SWITCH,
} from "./actions";

//initial state
const initialState = {
  pending: false,
  string: [],
  data: [],
  error: null,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

function detailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DETAIL_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case FETCH_DETAIL_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case DETAIL_UPDATE_ON_CHANGE:
      return {
        ...state,
        pending: false,
        data: {
          ...state.data,
          [action.data.key]: action.data[action.data.key],
        },
      };
    case DETAIL_UPDATE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case DETAIL_UPDATE_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case DETAIL_UPDATE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case UPDATA_DETAIL_SWITCH:
      return {
        ...state,
        pending: false,
        data: {
          ...state.data,
          is_active: action.data,
        },
      };
    default:
      return state;
  }
}

function patchData(state = initialState, action) {
  switch (action.type) {
    case PATCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case PATCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case PATCH_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  patchData: patchData,
  dataReducer: dataReducer,
  detailReducer: detailReducer,
});

export default rootReducers;
