import axios from "axios";

const ApiCall = async () => {
  let URL = "http://localhost:8080/quotes-shayri";

  const result = await axios
    .get(URL)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("getting error from api call", err);
    });

  return result.data;
};

export default ApiCall;
