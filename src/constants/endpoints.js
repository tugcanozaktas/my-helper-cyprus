const user = {
  login: () => `/login`,
  register: () => `/register`,
  edit: () => `/edit/${localStorage.getItem("userId")}`,
};

export default user;
