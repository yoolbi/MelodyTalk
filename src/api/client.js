import axios from "axios";

// User
export const getAllUsersAPI = () => {
  return axios
    .get("/users/getAll")
    .then((res) => res)
    .catch((err) => err);
};

export const getUserByUserIdAPI = (id) => {
  return axios({
    method: "get",
    url: "/users/get",
    params: {
      user_id: id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const postUserAPI = (user) => {
  return axios({
    method: "post",
    url: "/users/insert",
    data: {
      username: user.username,
      email: user.email,
      password: user.password,
      name: user.name,
      country: user.country,
      intro: user.intro,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const loginAPI = (user) => {
  return axios({
    method: "post",
    url: "/users/login",
    data: {
      email: user.email,
      password: user.password,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

//Post
export const getAllPostsAPI = () => {
  return axios
    .get("/posts/getAll")
    .then((res) => res)
    .catch((err) => err);
};

export const getPostByUserIdAPI = (id) => {
  return axios({
    method: "get",
    url: "/posts/get",
    params: {
      user_id: id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const postFeedAPI = (formData) => {
  return axios.post("/posts/insert", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteFeedAPI = (id) => {
  return axios({
    method: "delete",
    url: "/posts/delete",
    params: {
      post_id: id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

//like
export const getLikesByPostAPI = (id) => {
  return axios({
    method: "get",
    url: "/likes/get",
    params: {
      post_id: id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const getLikesByUserAPI = (id) => {
  return axios({
    method: "get",
    url: "/likes/getByUser",
    params: {
      user_id: id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const postLikeAPI = (like) => {
  return axios({
    method: "post",
    url: "/likes/insert",
    data: {
      user_id: like.user_id,
      post_id: like.post_id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const deleteLikeAPI = (like) => {
  return axios({
    method: "delete",
    url: "/likes/delete",
    params: {
      user_id: like.user_id,
      post_id: like.post_id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};
