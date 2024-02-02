import http from "../../utils/http";
import users from "../../constants/endpoints";

const updateUserById = ({ fname, lname, email, pnumber }) => {
  const ENDPOINT = users.edit();
  console.log(ENDPOINT);
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.put(`${API_BASE_URL}${ENDPOINT}`, {
    data: {
      fname,
      lname,
      email,
      pnumber,
    },
  });
};

export default updateUserById;
