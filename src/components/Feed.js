import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Comment from "./modal/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Follow from "../components/modal/Follow";
import { useTranslation } from "react-i18next";

const Feed = () => {
  const { t } = useTranslation();
  const [likeCount, setLikeCount] = useState(80);
  const [like, setLike] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const handleOpenComment = () => setOpenComment(true);
  const navigate = useNavigate();

  const [openLike, setOpenLike] = useState(false);
  const handleOpenLike = () => setOpenLike(true);

  const handleClickLike = () => {
    !like ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
    setLike(!like);
  };

  const handleClickOtherUser = (data) => {
    console.log(data);
    navigate("/ProfileOther", { state: { name: data } });
  };

  return (
    <>
      {Array.from(Array(3)).map((number, idx) => {
        return (
          <div
            className="feed"
            key={idx}
            style={{ width: "80%", marginBottom: "20px", maxWidth: "800px" }}
          >
            <img
              src="/feed_image.png"
              alt="logo"
              style={{
                width: "100%",
                height: "300px",
              }}
            />
            <AudioPlayer
              // autoPlay
              src="/musicTest.mp3"
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
              <b
                style={{ cursor: "pointer" }}
                onClick={(e) => handleClickOtherUser(e.target.textContent)}
              >
                leee{" "}
              </b>
              오늘의 노래 <br />
            </div>
            {/* <div className="feed_comment">
        <b>leee </b>너무 좋아요~
      </div> */}
          </div>
        );
      })}
      <Comment openComment={openComment} setOpenComment={setOpenComment} />
      <Follow
        openFollow={openLike}
        setOpenFollow={setOpenLike}
        clickFollowName={t(`home.like`)}
      />
    </>
  );
};

export default Feed;
