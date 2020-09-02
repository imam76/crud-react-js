//action fetch data
export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

//detail data
export const FETCH_DETAIL_SUCCESS = "FETCH_DETAIL_SUCCESS";
export const FETCH_DETAIL_PENDING = "FETCH_DETAIL_PENDING";
export const FETCH_DETAIL_ERROR = "FETCH_DETAIL_ERROR";

//detail update data
export const DETAIL_UPDATE_SUCCESS = "DETAIL_UPDATE_SUCCESS";
export const DETAIL_UPDATE_PENDING = "DETAIL_UPDATE_PENDING";
export const DETAIL_UPDATE_ON_CHANGE = "DETAIL_UPDATE_ON_CHANGE";
export const DETAIL_UPDATE_ERROR = "DETAIL_UPDATE_ERROR";
export const UPDATA_DETAIL_SWITCH = "UPDATA_DETAIL_SWITCH";

//action patch data
export const PATCH_DATA_PENDING = "PATCH_DATA_PENDING";
export const PATCH_DATA_SUCCESS = "PATCH_DATA_SUCCESS";
export const PATCH_DATA_ERROR = "PATCH_DATA_ERROR";

export const fetchDataPending = (pending) => {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_DATA_PENDING,
    });
  };
};

export const fetchDataSuccess = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_DATA_SUCCESS,
      data: data,
    });
  };
};

export const fetchDataError = (error) => {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_DATA_ERROR,
      data: error,
    });
  };
};

export const fetchDetailPending = (pending) => {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_DETAIL_PENDING,
    });
  };
};

export const fetchDetailSuccess = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_DETAIL_SUCCESS,
      data: data,
    });
  };
};

export const fetchDetailError = (error) => {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_DETAIL_ERROR,
      data: error,
    });
  };
};

export const detailUpdatePending = (pending) => {
  return (dispatch, getState) => {
    dispatch({
      type: DETAIL_UPDATE_PENDING,
    });
  };
};

export const detailUpdateChange = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: DETAIL_UPDATE_ON_CHANGE,
      data: data,
    });
  };
};

export const detailUpdateSuccess = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: DETAIL_UPDATE_SUCCESS,
      data: data,
    });
  };
};

export const detailUpdateError = (error) => {
  return (dispatch, getState) => {
    dispatch({
      type: DETAIL_UPDATE_ERROR,
      data: error,
    });
  };
};

export const updateDetailSwitch = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATA_DETAIL_SWITCH,
      data: data,
    });
  };
};

export const patchDataPending = (pending) => {
  return (dispatch, getState) => {
    dispatch({
      type: PATCH_DATA_PENDING,
    });
  };
};

export const patchDataSuccess = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: PATCH_DATA_SUCCESS,
      data: data,
    });
  };
};

export const patchDataError = (error) => {
  return (dispatch, getState) => {
    dispatch({
      type: PATCH_DATA_ERROR,
      data: error,
    });
  };
};
