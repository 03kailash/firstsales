import {
  VIEWSUBJECT_DATA_REQUEST,
  VIEWSUBJECT_DATA_SUCCESS,
  VIEWSUBJECT_DATA_ERROR,
} from "./ActionType";
export function ViewSubjectDataRequest() {
  return {
    type: VIEWSUBJECT_DATA_REQUEST,
  };
}

export function ViewSubjectDataSuccess(data) {
  return {
    type: VIEWSUBJECT_DATA_SUCCESS,
    data,
  };
}

export function ViewSubjectDataError(error) {
  return {
    type: VIEWSUBJECT_DATA_ERROR,
    payload: error,
  };
}
