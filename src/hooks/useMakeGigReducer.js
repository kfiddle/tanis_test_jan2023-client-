import { useReducer } from "react";

const initialGig = {
  venue: "",
  address: "",
  instIds: [],
  pay: "",
  date: new Date(),
  startHours: "",
  startMin: "",
  endHours: "",
  endMin: "",
  contactEmail: "",
  contactPhone: "",
  notes: "",
};

const gigReducer = (state, action) => {
  switch (action.type) {
    case "venue":
      return { ...state, venue: action.venue };
    case "address":
      return { ...state, address: action.address };
    case "date":
      return { ...state, date: action.date };
    case "contactEmail":
      return { ...state, contactEmail: action.contactEmail };
    case "contactPhone":
      return { ...state, contactPhone: action.contactPhone };
    case "startHours":
      return { ...state, startHours: action.startHours };
    case "startMin":
      return { ...state, startMin: action.startMin };
    case "endHours":
      return { ...state, endHours: action.endHours };
    case "endMin":
      return { ...state, endMin: action.endMin };
    case "instIds":
      return { ...state, instIds: action.instIds };
    case "pay":
      return { ...state, pay: action.pay };
    case "notes":
      return { ...state, notes: action.notes };
  }
};

const useMakeGigReducer = () => {
  //   const [gig, gigDispatch] = useReducer(gigReducer, initialGig);

  return useReducer(gigReducer, initialGig);
};

export default useMakeGigReducer;
