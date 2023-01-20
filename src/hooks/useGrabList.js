import { useState, useEffect } from "react";
import { server } from "../components/utils/WhichServer";

const useGrabList = (listString) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const grablist = async () => {
      const response = await fetch(server + listString);

      if (response.ok) {
        const jsonedList = await response.json();
        setList(jsonedList[listString]);
      }
    };

    grablist();
  }, [listString]);

  return list ? list: [];
};

export default useGrabList;
