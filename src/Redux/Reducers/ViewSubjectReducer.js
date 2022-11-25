import {
  VIEWSUBJECT_DATA_REQUEST,
  VIEWSUBJECT_DATA_SUCCESS,
  VIEWSUBJECT_DATA_ERROR,
} from "../Actions/ActionType";

let initialState = {
  ViewSubjectdata: [],
  ViewSubjectloading: true,
  ViewSubjecterror: "",
};

function ViewSubjectreducer(state = initialState, action) {
  switch (action.type) {
    case VIEWSUBJECT_DATA_REQUEST:
      return {
        ...state,
        ViewSubjectloading: true,
        ViewSubjecterror: "",
      };
    case VIEWSUBJECT_DATA_SUCCESS:
      return {
        ...state,
        ViewSubjectloading: false,
        ViewSubjectdata: action.data,
      };
    case VIEWSUBJECT_DATA_ERROR: {
      return {
        ...state,
        ViewSubjectloading: false,
        ViewSubjecterror: action.payload,
      };
    }

    default:
      return state;
  }
}
export default ViewSubjectreducer;
