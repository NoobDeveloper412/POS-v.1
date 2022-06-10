import Axios from "axios";

export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = "http://localhost:8000/register";

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};

export const loginUserService = async (authtoken) => {
  const LOGIN_API_ENDPOINT = "http://localhost:8000/login";
  return await Axios.post(
    `${LOGIN_API_ENDPOINT}/create-or-update`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );

  // const parameters = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(request.user),
  // };

  // return fetch(LOGIN_API_ENDPOINT, parameters)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {
  //     return json;
  //   });
};
