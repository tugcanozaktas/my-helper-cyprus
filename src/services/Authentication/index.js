/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-else-return */
import axios from "axios";
import user from "../../constants/endpoints";
import parseJWTPayload from "./utils/parseJWTPayload";

class Authentication {
  login({ email, password }) {
    const loginEndpoint = user.login();
    const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
    return axios(`${API_BASE_URL}${loginEndpoint}`, {
      method: "POST",
      data: {
        email,
        password,
      },
    }).then((response) => {
      const accessToken = response.data.accessToken;
      const userId = response.data.user.userId;
      const firstName = response.data.user.firstName;
      const lastName = response.data.user.lastName;
      const pnumber = response.data.user.phoneNumber;
      localStorage.setItem("creds", accessToken);
      localStorage.setItem("fname", firstName);
      localStorage.setItem("lname", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("userId", userId);
      localStorage.setItem("pnumber", pnumber);
    });
  }

  logout() {
    localStorage.removeItem("creds");
  }

  isAuthenticated() {
    let hasAccessTokenExpired;
    const accessToken = this.getAccessToken();
    if (accessToken) {
      const parsedToken = parseJWTPayload(accessToken);
      const { exp } = parsedToken;
      if (!exp) {
        hasAccessTokenExpired = true;
      } else {
        const now = Math.floor(Date.now() / 1000);
        hasAccessTokenExpired = exp < now;
      }
      return !hasAccessTokenExpired;
    } else {
      return false;
    }
  }

  getAccessToken() {
    return localStorage.getItem("creds");
  }

  getAccessTokenPayload() {
    const accessToken = this.getAccessToken();
    if (accessToken) {
      return parseJWTPayload(accessToken);
    }
    return null;
  }
}

export default Authentication;
