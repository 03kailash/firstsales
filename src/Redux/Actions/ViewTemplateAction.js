import {
  VIEWTEMPLATE_DATA_REQUEST,
  VIEWTEMPLATE_DATA_SUCCESS,
  VIEWTEMPLATE_DATA_ERROR,
} from "./ActionType";
export function ViewTemplateDataRequest() {
  return {
    type: VIEWTEMPLATE_DATA_REQUEST,
  };
}

export function ViewTemplateDataSuccess(data) {
  return {
    type: VIEWTEMPLATE_DATA_SUCCESS,
    data,
  };
}

export function ViewTemplateDataError(error) {
  return {
    type: VIEWTEMPLATE_DATA_ERROR,
    payload: error,
  };
}
