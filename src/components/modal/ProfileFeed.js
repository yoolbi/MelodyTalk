import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Box } from "@mui/material";
import Comment from "./Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Follow from "../modal/Follow";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useTranslation } from "react-i18next";
import {
  getLikesByUserAPI,
  postLikeAPI,
  deleteLikeAPI,
  getLikesByPostAPI,
  getCommentsByPostAPI,
  deleteFeedAPI,
} from "../../api/client";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "700px",
};

const ProfileFeed = ({
  openProfileFeed,
  setOpenProfileFeed,
  name,
  post,
  selectedPostIdx,
}) => {
  const { t } = useTranslation();
  const handleCloseProfileFeed = () => setOpenProfileFeed(false);
  const [openComment, setOpenComment] = useState(false);
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState();
  const [likeData, setLikeData] = useState([]);
  const [openLike, setOpenLike] = useState(false);
  const [likeUsers, setLikeUsers] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState("");

  const [comments, setComments] = useState([]);
  const handleOpenComment = (id) => {
    setSelectedPostId(id);
    getCommentsByPostAPI(id)
      .then((res) => {
        setComments(res.data);
        setOpenComment(true);
      })
      .catch((err) => console.log(err));
  };

  const handleOpenLike = (post_id) => {
    setSelectedPostId(post_id);
    getLikesByPostAPI(post_id)
      .then((res) => {
        setLikeUsers(res.data);
        setOpenLike(true);
      })
      .catch((err) => console.log(err));
  };

  const isPostLiked = (post_id) => {
    return likeData.some((like) => like.post_id === post_id);
  };

  const handleClickLike = (idx, post_id, like_count) => {
    let body = { user_id: sessionStorage.getItem("user_id"), post_id: post_id };
    if (!isPostLiked(post_id)) {
      setLikeCount(like_count + 1);
      postLikeAPI(body).then((res) => {
        fetchLikesForCurrentUser();
      });
    } else {
      setLikeCount(like_count - 1);
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
    navigate("/Profile", { state: { name: data } });
  };

  const handleClickDeleteFeed = (id) => {
    deleteFeedAPI(id).then((res) => {
      handleCloseProfileFeed();
      window.location.reload();
    });
  };

  useEffect(() => {
    setLikeCount(post.like_count);
    fetchLikesForCurrentUser();
  }, []);

  const isLiked = isPostLiked(post.post_id);
  return (
    <>
      <Modal
        open={openProfileFeed}
        onClose={handleCloseProfileFeed}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="feed" style={{ width: "80%", maxWidth: "500px" }}>
            <img
              src={`data:image/jpeg;base64,${post?.image_file}`}
              alt="logo"
              style={{
                width: "100%",
                height: "300px",
              }}
            />
            <AudioPlayer
              src={`data:audio/mpeg;base64,${post?.music_file}`}
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
                  onClick={() =>
                    handleClickLike(
                      selectedPostIdx,
                      post.post_id,
                      likeCount ? likeCount : post.like_count
                    )
                  }
                />
              ) : (
                <FavoriteIcon
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    handleClickLike(
                      selectedPostIdx,
                      post.post_id,
                      likeCount ? likeCount : post.like_count
                    )
                  }
                />
              )}
              <MessageOutlinedIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleOpenComment(post.post_id)}
              />
            </div>
            <div
              className="feed_like"
              style={{ cursor: "pointer" }}
              onClick={() => handleOpenLike(post.post_id)}
            >
              {t(`home.like`)} {likeCount ? likeCount : post.like_count}{" "}
              {t(`home.like_unit`)}
            </div>
            <div className="feed_text">
              <b
                style={{ cursor: "pointer" }}
                onClick={() => handleClickOtherUser(post.user_id)}
              >
                {post.username}{" "}
              </b>
              {post.content} <br />
            </div>
            {name === sessionStorage.getItem("user_id") && (
              <div
                style={{
                  color: "red",
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginTop: "10px",
                  float: "right",
                }}
                onClick={() => handleClickDeleteFeed(post.post_id)}
              >
                {t(`home.delete`)}
              </div>
            )}
          </div>
        </Box>
      </Modal>
      <Comment
        openComment={openComment}
        setOpenComment={setOpenComment}
        comments={comments}
        setComments={setComments}
        post_id={selectedPostId}
      />
      <Follow
        openFollow={openLike}
        setOpenFollow={setOpenLike}
        clickFollowName={t(`home.like`)}
        users={likeUsers}
      />
    </>
  );
};
export default ProfileFeed;
