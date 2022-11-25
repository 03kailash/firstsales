import {
  VIEWTEMPARCHIVE_DATA_REQUEST,
  VIEWTEMPARCHIVE_DATA_SUCCESS,
  VIEWTEMPARCHIVE_DATA_ERROR,
} from "./ActionType";
export function ViewTempArchiveDataRequest() {
  return {
    type: VIEWTEMPARCHIVE_DATA_REQUEST,
  };
}

export function ViewTempArchiveDataSuccess(data) {
  return {
    type: VIEWTEMPARCHIVE_DATA_SUCCESS,
    data,
  };
}

export function ViewTempArchiveDataError(error) {
  return {
    type: VIEWTEMPARCHIVE_DATA_ERROR,
    payload: error,
  };
}
