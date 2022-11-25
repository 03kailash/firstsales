import {
  VIEWTEMPARCHIVE_DATA_REQUEST,
  VIEWTEMPARCHIVE_DATA_SUCCESS,
  VIEWTEMPARCHIVE_DATA_ERROR,
} from "../Actions/ActionType";

let initialState = {
  ViewTempArchivedata: [],
  ViewTempArchiveloading: true,
  ViewTempArchiveerror: "",
};

function ViewTempArchivereducer(state = initialState, action) {
  switch (action.type) {
    case VIEWTEMPARCHIVE_DATA_REQUEST:
      return {
        ...state,
        ViewTempArchiveloading: true,
        ViewTempArchiveerror: "",
      };
    case VIEWTEMPARCHIVE_DATA_SUCCESS:
      return {
        ...state,
        ViewTempArchiveloading: false,
        ViewTempArchivedata: action.data,
      };
    case VIEWTEMPARCHIVE_DATA_ERROR: {
      return {
        ...state,
        ViewTempArchiveloading: false,
        ViewTempArchiveerror: action.payload,
      };
    }

    default:
      return state;
  }
}
export default ViewTempArchivereducer;
