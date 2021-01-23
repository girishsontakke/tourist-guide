import { FORM_FIELD_CHANGE } from "./variables";

export const setInputField = (event) => {
  return {
    type: FORM_FIELD_CHANGE,
    payload: event,
  };
};
