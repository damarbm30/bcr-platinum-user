import api from "./baseUrl";

export const userLogin = async () => {
  try {
    const userCredentials = {
      email: "admin@bcr.io",
      password: "123456",
    };
    const result = await api.post("/customer/auth/login", userCredentials);
  } catch (error) {
    console.log(error);
  }
};
