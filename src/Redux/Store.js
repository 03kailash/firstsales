import { createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import ViewTemplatereducer from "./Reducers/ViewTemplateReducer";
import ViewSubjectreducer from "./Reducers/ViewSubjectReducer";
import CreateTemplatereducer from "./Reducers/CreateTemplateReducer";
import ViewTempArchivereducer from "./Reducers/ViewTempArchiveReducer";

export const store = createStore(
  combineReducers({
    ViewTemplatereducer,
    ViewSubjectreducer,
    CreateTemplatereducer,
    ViewTempArchivereducer,
  }),
  applyMiddleware(thunk)
);
