import api from "configs/api";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

const getPosts = () => api.ger("post/my");

export { getProfile, getPosts };
