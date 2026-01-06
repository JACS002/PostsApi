import api from "./axios";

export async function getFeed() {
  const res = await api.get("/feed");
  return res.data.posts;
}
