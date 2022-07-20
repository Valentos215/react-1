import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": " 4bef36b2-4ada-472f-9051-da2cddd347fa" },
});

export const usersAPI = {
  getUsers(page = 1, pageSize = 6) {
    return instance
      .get(`users?page=${page}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};

export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const profileAPI = {
  getUserProfile(id) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },
};