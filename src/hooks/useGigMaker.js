import useMakeGigReducer from "./useMakeGigReducer";

const useGigMaker = () => {
  const [gig, gigDispatch] = useMakeGigReducer();

  const timeSetter = (clockHand) => (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 3) {
      return;
    }
    gigDispatch({ type: clockHand, [clockHand]: event.target.value });
  };

  const minuteFormer = (clockHand) => (event) => {
    let minutes = event.target.value;
    if ((minutes.length === 1 && minutes === "0") || minutes.length === 0)
      return gigDispatch({ type: clockHand, [clockHand]: "00" });
    if (minutes <= 9 && minutes.length > 0 && minutes[0] !== "0")
      return gigDispatch({ type: clockHand, [clockHand]: "0" + minutes });
    gigDispatch({ type: clockHand, [clockHand]: minutes });
  };

  const formatPay = (event) => {
    if (isNaN(event.nativeEvent.data)) {
      return;
    }
    let enteredPay = event.target.value;

    return gigDispatch({ type: "pay", pay: enteredPay });
  };

  const dateHandler = (event) => {
    gigDispatch({ type: "date", date: event });
  };

  return [gig, gigDispatch, timeSetter, minuteFormer, formatPay, dateHandler];
};

export default useGigMaker;
