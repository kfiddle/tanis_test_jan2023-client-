import { useState, useEffect } from "react";
import { server } from "../components/utils/WhichServer";

const useSimpleFetch = () => {
  return async (listString) => {
    const response = await fetch(server + listString);

    if (response.ok) {
      const jsonedList = await response.json();
      return jsonedList;
    }
  };
};

export default useSimpleFetch;
