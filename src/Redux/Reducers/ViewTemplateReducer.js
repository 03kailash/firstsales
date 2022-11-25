import {
  VIEWTEMPLATE_DATA_REQUEST,
  VIEWTEMPLATE_DATA_SUCCESS,
  VIEWTEMPLATE_DATA_ERROR,
} from "../Actions/ActionType";

let initialState = {
  ViewTemplatedata: [],
  ViewTemplateloading: true,
  ViewTemplateerror: "",
};

function ViewTemplatereducer(state = initialState, action) {
  switch (action.type) {
    case VIEWTEMPLATE_DATA_REQUEST:
      return {
        ...state,
        ViewTemplateloading: true,
        ViewTemplateerror: "",
      };
    case VIEWTEMPLATE_DATA_SUCCESS:
      return {
        ...state,
        ViewTemplateloading: false,
        ViewTemplatedata: action.data,
      };
    case VIEWTEMPLATE_DATA_ERROR: {
      return {
        ...state,
        ViewTemplateloading: false,
        ViewTemplateerror: action.payload,
      };
    }

    default:
      return state;
  }
}
export default ViewTemplatereducer;
