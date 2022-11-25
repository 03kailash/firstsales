import {
  CREATETEMPLATE_DATA_REQUEST,
  CREATETEMPLATE_DATA_SUCCESS,
  CREATETEMPLATE_DATA_ERROR,
} from "../Actions/ActionType";

let initialState = {
  CreateTemplatedata: [],
  CreateTemplateloading: false,
  CreateTemplateerror: "",
};

function CreateTemplatereducer(state = initialState, action) {
  switch (action.type) {
    case CREATETEMPLATE_DATA_REQUEST:
      return {
        ...state,
        CreateTemplateloading: true,
        CreateTemplateerror: "",
      };
    case CREATETEMPLATE_DATA_SUCCESS:
      return {
        ...state,
        CreateTemplateloading: false,
        CreateTemplatedata: action.data,
      };
    case CREATETEMPLATE_DATA_ERROR: {
      return {
        ...state,
        CreateTemplateloading: false,
        CreateTemplateerror: action.payload,
      };
    }

    default:
      return state;
  }
}
export default CreateTemplatereducer;
