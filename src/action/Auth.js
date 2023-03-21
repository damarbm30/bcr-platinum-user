export const doLogout = () => {
  localStorage.removeItem("userInfo");
  console.log("Logout");
};
