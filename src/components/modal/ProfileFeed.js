import { useState } from "react";
import { Modal, Box } from "@mui/material";
import Comment from "./Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Follow from "../modal/Follow";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "50%",
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

const ProfileFeed = ({ openProfileFeed, setOpenProfileFeed, name }) => {
  const { t } = useTranslation();
  const handleCloseComment = () => setOpenProfileFeed(false);
  const [likeCount, setLikeCount] = useState(80);
  const [like, setLike] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const handleOpenComment = () => setOpenComment(true);

  const handleClickLike = () => {
    !like ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
    setLike(!like);
  };

  const [openLike, setOpenLike] = useState(false);
  const handleOpenLike = () => setOpenLike(true);
  return (
    <>
      <Modal
        open={openProfileFeed}
        onClose={handleCloseComment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="feed" style={{ width: "80%", maxWidth: "500px" }}>
            <img
              src="/빵빵카와.png"
              alt="logo"
              style={{
                width: "100%",
                height: "300px",
              }}
            />
            <AudioPlayer
              autoPlay
              src="/musicTest.mp3"
              onPlay={(e) => console.log("onPlay")}
            />
            <div
              className="feed_reaction"
              style={{
                marginTop: "5px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              {!like ? (
                <FavoriteBorderIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleClickLike}
                />
              ) : (
                <FavoriteIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleClickLike}
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
              onClick={handleOpenLike}
            >
              {t(`home.like`)} {likeCount} {t(`home.like_unit`)}
            </div>
            <div className="feed_text">
              <b>yoolbi </b>
              오늘의 노래 <br />
            </div>
            {name === "yoolbi" && (
              <div
                style={{
                  color: "red",
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginTop: "10px",
                  float: "right",
                }}
              >
                {t(`home.delete`)}
              </div>
            )}
          </div>
        </Box>
      </Modal>
      <Comment openComment={openComment} setOpenComment={setOpenComment} />
      <Follow
        openFollow={openLike}
        setOpenFollow={setOpenLike}
        clickFollowName={t(`home.like`)}
      />
    </>
  );
};
export default ProfileFeed;
