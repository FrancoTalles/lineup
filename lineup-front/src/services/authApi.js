import api from "./api";

export async function signUp(username, email, profileImg, password) {
  const response = await api.post("/users", {
    username,
    email,
    profileImg,
    password,
  });

  return response.data;
}
