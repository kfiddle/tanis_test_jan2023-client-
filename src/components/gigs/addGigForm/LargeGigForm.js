

const LargeGigForm = () => {

    // return (
    //     <form className={classes.innerContainer}>
    //       <InputText
    //         isValid={validForm.venue}
    //         label={"Venue"}
    //         onChange={(event) =>
    //           gigDispatch({ type: "venue", venue: event.target.value })
    //         }
    //       />
  
    //       <InputText
    //         label={"Address"}
    //         isValid
    //         onChange={(event) =>
    //           gigDispatch({ type: "address", address: event.target.value })
    //         }
    //       />
  
    //       <div className={classes.calendarDiv}>
    //         <Calendar
    //           value={gig.date}
    //           className={classes.calendar}
    //           onChange={(event) => dateHandler(event)}
    //         />
    //       </div>
  
    //       <div className={classes.timeInputDiv}>
    //         <TimeInput
    //           timeSetter={timeSetter}
    //           minuteFormer={minuteFormer}
    //           gig={gig}
    //         />
    //       </div>
  
    //       <div className={classes.instsDiv}>
    //         <InstsDropDown instIds={gig.instIds} gigDispatch={gigDispatch} />
    //       </div>
  
    //       <InputText
    //         label={"Contact Email"}
    //         isValid={validForm.email}
    //         onChange={(event) => {
    //           setSubmitClicked(false);
    //           dispatch({ type: "email", isValid: true });
    //           gigDispatch({
    //             type: "contactEmail",
    //             contactEmail: event.target.value,
    //           });
    //         }}
    //       />
  
    //       <InputText
    //         label={"Contact Phone"}
    //         isValid={true}
    //         onChange={formatFone}
    //         keyDown={checkForDelete}
    //         value={gig.contactPhone}
    //       />
  
    //       <Textarea
    //         label="notes"
    //         onChange={(event) =>
    //           gigDispatch({ type: "notes", notes: event.target.value })
    //         }
    //       />
    //     </form>
  

};

export default LargeGigForm;