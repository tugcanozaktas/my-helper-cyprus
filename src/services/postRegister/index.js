import http from "../../utils/http";
import users from "../../constants/endpoints";

const postRegister = ({ firstName, lastName, email, password }) => {
  const ENDPOINT = users.register();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${ENDPOINT}`, {
    data: {
      firstName,
      lastName,
      email,
      password,
      userTypeId: 1,
    },
  });
};

export default postRegister;
