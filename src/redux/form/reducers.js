import { FORM_FIELD_CHANGE } from "./variables";
const initialstate = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const formField = (state = initialstate, action = {}) => {
  switch (action.type) {
    case FORM_FIELD_CHANGE:
      const { name, value } = action.payload.target;
      return { ...state, [name]: value };
    default:
      return state;
  }
};
