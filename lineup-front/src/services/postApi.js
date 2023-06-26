import api from "./api";

export async function getPosts(token) {
  const response = await api.get("/home", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

const postsApi = {
  getPosts,
};

export default postsApi;
