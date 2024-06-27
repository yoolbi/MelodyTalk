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

export const getSearchPostAPI = (searchString) => {
  return axios({
    method: "get",
    url: "/posts/search",
    params: {
      searchString: searchString,
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

//comment
export const getCommentsByPostAPI = (id) => {
  return axios({
    method: "get",
    url: "/comments/get",
    params: {
      post_id: id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const postCommentAPI = (like) => {
  return axios({
    method: "post",
    url: "/comments/insert",
    data: {
      user_id: like.user_id,
      post_id: like.post_id,
      comment_content: like.comment_content,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

//follow
export const getFollowersAPI = (id) => {
  return axios({
    method: "get",
    url: "/follows/getFollowers",
    params: {
      to_user_id: id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const getFollowingsAPI = (id) => {
  return axios({
    method: "get",
    url: "/follows/getFollowings",
    params: {
      from_user_id: id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const postFollowAPI = (follow) => {
  return axios({
    method: "post",
    url: "/follows/insert",
    data: {
      from_user_id: follow.from_user_id,
      to_user_id: follow.to_user_id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const deleteFollowAPI = (id) => {
  return axios({
    method: "delete",
    url: "/follows/delete",
    params: {
      follow_id: id,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};
