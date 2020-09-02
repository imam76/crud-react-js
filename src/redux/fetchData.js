import Axios from "axios";
import { URL_MAIN } from "./url";
import {
  fetchDataPending,
  fetchDataSuccess,
  fetchDataError,
  fetchDetailSuccess,
  fetchDetailPending,
  fetchDetailError,
} from "./actions";

export const fetchdData = () => {
  return (dispatch) => {
    dispatch(fetchDataPending());
    Axios.get(`${URL_MAIN}/users`)
      .then((res) => {
        dispatch(fetchDataSuccess(res.data));
        return res.data;
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
}; 

export const  fetchDetail = (id) => {
  return (dispatch) => {
    dispatch(fetchDetailPending());
    Axios.get(`${URL_MAIN}/users/${id}`)
      .then((res) => {
        dispatch(fetchDetailSuccess(res.data));
        return res.data;
      })
      .catch((error) => {
        dispatch(fetchDetailError(error));
      });
  };
};
