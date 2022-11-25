import {
  CREATETEMPLATE_DATA_REQUEST,
  CREATETEMPLATE_DATA_SUCCESS,
  CREATETEMPLATE_DATA_ERROR,
} from "./ActionType";
export function CreateTempDataRequest() {
  return {
    type: CREATETEMPLATE_DATA_REQUEST,
  };
}

export function CreateTempDataSuccess(data) {
  return {
    type: CREATETEMPLATE_DATA_SUCCESS,
    data,
  };
}

export function CreateTempDataError(error) {
  return {
    type: CREATETEMPLATE_DATA_ERROR,
    payload: error,
  };
}
