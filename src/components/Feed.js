import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Comment from "./modal/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Follow from "../components/modal/Follow";
import { useTranslation } from "react-i18next";
import {
  getAllPostsAPI,
  getLikesByUserAPI,
  postLikeAPI,
  deleteLikeAPI,
  getLikesByPostAPI,
} from "../api/client";

const Feed = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [likeCounts, setLikeCounts] = useState([]);
  const [likeData, setLikeData] = useState([]);
  const [openLike, setOpenLike] = useState(false);
  const [likeUsers, setLikeUsers] = useState([]);

  const [openComment, setOpenComment] = useState(false);
  const handleOpenComment = () => setOpenComment(true);

  const [posts, setPosts] = useState([]);

  const handleOpenLike = (post_id) => {
    getLikesByPostAPI(post_id)
      .then((res) => {
        setLikeUsers(res.data);
        setOpenLike(true);
      })
      .catch((err) => console.log(err));
  };

  const updateArray = (array, idx, newData, setArray) => {
    let temp = [...array];
    temp[idx] += newData;
    setArray(temp);
  };

  const isPostLiked = (post_id) => {
    return likeData.some((like) => like.post_id === post_id);
  };

  const handleClickLike = (idx, post_id) => {
    let body = { user_id: sessionStorage.getItem("user_id"), post_id: post_id };
    if (!isPostLiked(post_id)) {
      updateArray(likeCounts, idx, 1, setLikeCounts);
      postLikeAPI(body).then((res) => {
        fetchLikesForCurrentUser();
      });
    } else {
      updateArray(likeCounts, idx, -1, setLikeCounts);
      deleteLikeAPI(body).then((res) => {
        fetchLikesForCurrentUser();
      });
    }
  };

  const fetchLikesForCurrentUser = () => {
    getLikesByUserAPI(sessionStorage.getItem("user_id"))
      .then((res) => {
        setLikeData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleClickOtherUser = (data) => {
    console.log(data);
    navigate("/ProfileOther", { state: { name: data } });
  };

  useEffect(() => {
    getAllPostsAPI()
      .then((res) => {
        setPosts(res.data);
        setLikeCounts(res.data.map((post) => post.like_count));
      })
      .catch((err) => console.log(err));
    fetchLikesForCurrentUser();
  }, []);

  return (
    <>
      {Array.from(posts).map((post, idx) => {
        const isLiked = isPostLiked(post.post_id);
        return (
          <div
            className="feed"
            key={idx}
            style={{ width: "80%", marginBottom: "20px", maxWidth: "800px" }}
          >
            <img
              src={`data:image/jpeg;base64,${posts[idx]?.image_file}`}
              alt="logo"
              style={{
                width: "100%",
                height: "300px",
              }}
            />
            <AudioPlayer
              src={`data:audio/mpeg;base64,${posts[idx]?.music_file}`}
              onPlay={(e) => console.log("onPlay")}
            />
            <div
              className="feed_reaction"
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              {!isLiked ? (
                <FavoriteBorderIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClickLike(idx, post.post_id)}
                />
              ) : (
                <FavoriteIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClickLike(idx, post.post_id)}
                />
              )}
              <MessageOutlinedIcon
                style={{ cursor: "pointer" }}
                onClick={handleOpenComment}
              />
            </div>
            <div
              className="feed_like"
              style={{ cursor: "pointer" }}
              onClick={() => handleOpenLike(posts[idx].post_id)}
            >
              {t(`home.like`)} {likeCounts[idx]} {t(`home.like_unit`)}
            </div>
            <div className="feed_text">
              <b
                style={{ cursor: "pointer" }}
                onClick={(e) => handleClickOtherUser(e.target.textContent)}
              >
                {posts[idx].username}{" "}
              </b>
              {posts[idx].content} <br />
            </div>
          </div>
        );
      })}
      <Comment openComment={openComment} setOpenComment={setOpenComment} />
      <Follow
        openFollow={openLike}
        setOpenFollow={setOpenLike}
        clickFollowName={t(`home.like`)}
        users={likeUsers}
      />
    </>
  );
};

export default Feed;
