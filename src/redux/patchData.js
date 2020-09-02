import Axios from "axios";
import { URL_MAIN } from "./url";
import { fetchdData, fetchDetail } from "../redux/fetchData";
import {
  patchDataPending,
  patchDataSuccess,
  patchDataError,
  detailUpdatePending,
  detailUpdateSuccess,
  detailUpdateError,
} from "./actions";

export const patchSwitch = (id, status) => {
  const body = {
    is_active: !status,
  };
  return (dispatch) => {
    dispatch(patchDataPending());
    Axios.put(`${URL_MAIN}/users/${id}`, body)
      .then((res) => {
        dispatch(patchDataSuccess(res.data));
        dispatch(fetchdData());
        return res.data;
      })
      .catch((error) => {
        dispatch(patchDataError(error));
      });
  };
};

export const updateData = (data) => {
  console.log("patch activated", data);
  return (dispatch) => {
    dispatch(detailUpdatePending());
    Axios.put(`${URL_MAIN}/users/${data.id}`, data)
      .then((res) => {
        dispatch(detailUpdateSuccess(res.data));
        dispatch(fetchdData());
        return res.data;
      })
      .catch((error) => {
        dispatch(detailUpdateError(error));
      });
  };
};
