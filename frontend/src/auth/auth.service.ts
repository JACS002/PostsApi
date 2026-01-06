import api from "../api/axios";

export async function login(email: string, password: string) {
  const formData = new FormData();
  formData.append("username", email);
  formData.append("password", password);

  const res = await api.post("/auth/jwt/login", formData);
  return res.data;
}

export async function register(email: string, password: string) {
  const res = await api.post("/auth/register", {
    email,
    password,
  });
  return res.data;
}
