import { server } from "../components/utils/WhichServer";

const usePush = () => {
  let headers = { "Content-Type": "application/json" };

  const pusher = async (objectToPush, url) => {
    let response = await fetch(server + url, {
      method: "POST",
      headers,
      body: JSON.stringify(objectToPush),
    });

    if (response.ok) {
      let answer = await response.json();
      return answer;
    } 
    let errorReply = await response.json();
    return errorReply.message;
  };

  return pusher;
};

export default usePush;
