export const doLogin = () => {
  localStorage.setItem(TOKEN, "userInfo");
};

export const doLogout = () => {
  localStorage.removeItem(TOKEN);
  console.log("Logout");
};

export const TOKEN = "Token";
