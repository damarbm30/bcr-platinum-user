export const doLogin = () => {
  localStorage.setItem(TOKEN, "asdadsa");
};

export const doLogout = () => {
  localStorage.removeItem(TOKEN);
  console.log("Logout");
};

export const TOKEN = "Token";
