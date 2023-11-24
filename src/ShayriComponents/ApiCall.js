import axios from "axios";

const ApiCall = async () => {
  let URL = "http://localhost:8080/quotes-shayri";
  const result = await axios
    .get(URL)
    .then((response) => {
      console.log('response....',response);
      return response;
    })
    .catch((err) => {
      console.log("err...kadir khan///////", err);
    });

  console.log("result...data from apiCall components...", result);

  return result.data;
};

export default ApiCall;
