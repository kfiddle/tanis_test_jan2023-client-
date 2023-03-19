
const useFoneFormatter = () => {

    const formatFone = (event) => {
        let enteredNum = event.target.value;
        if (isNaN(event.nativeEvent.data) || enteredNum.length === 13) {
          return;
        }
        if (enteredNum.length === 3 || enteredNum.length === 7) {
          return gigDispatch({
            type: "contactPhone",
            contactPhone: enteredNum + "-",
          });
        }
        return gigDispatch({ type: "contactPhone", contactPhone: enteredNum });
      };
    
      const checkForDelete = (event) => {
        if (
          event.code === "Backspace" &&
          gig.contactPhone[gig.contactPhone.length - 1] === "-"
        ) {
          return gigDispatch({
            type: "contactPhone",
            contactPhone: gig.contactPhone.slice(0, -1),
          });
        }
        return;
      };

};

export default useFoneFormatter;