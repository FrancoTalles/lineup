import api from "./api";

export async function signUp(data) {
  const { name, email, profileImg, password } = data;

  const response = await api.post("/users", {
    username: name,
    email,
    profileImg,
    password,
  });

  return response.data;
}

export async function signIn(data) {
  const { email, password } = data;

  const response = await api.post("/auth/sign-in", {
    email,
    password,
  });

  return response.data;
}

const authApi = {
  signUp,
  signIn
};

export default authApi;
