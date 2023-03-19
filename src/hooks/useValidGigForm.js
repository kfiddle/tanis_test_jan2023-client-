import { useReducer } from "react";

const initialState = {
  venue: true,
  firstInst: true,
  secondInst: true,
  email: true,
};

const validReducer = (state, action) => {
  switch (action.type) {
    case "venue":
      return { ...state, venue: action.isValid };
    case "firstInst":
      return { ...state, firstInst: action.isValid };
    case "secondInst":
      return { ...state, secondInst: action.isValid };
    case "email":
      return { ...state, email: action.isValid };
    case "time":
      return { ...state, [action.clockHand]: action.time };
    case "reset":
      return { ...initialState };
  }
};
const useValidGigForm = () => {
  return useReducer(validReducer, initialState);
};

export default useValidGigForm;
