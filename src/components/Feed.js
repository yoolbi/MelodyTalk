import { useState } from "react";
import Comment from "./modal/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const Feed = () => {
  const [likeCount, setLikeCount] = useState(80);
  const [like, setLike] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const handleOpenComment = () => setOpenComment(true);

  const handleClickLike = () => {
    !like ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
    setLike(!like);
  };

  return (
    <>
      {Array.from(Array(3)).map((number, idx) => {
        return (
          <div
            className="feed"
            key={idx}
            style={{ width: "80%", marginBottom: "15px" }}
          >
            <div
              className="feed_image"
              style={{
                backgroundColor: "#C4C4C4",
                width: "100%",
                height: "300px",
              }}
            ></div>
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
            <div className="feed_like">좋아요 {likeCount}개</div>
            <div className="feed_text">
              <b>yoolbi </b>오늘의 노래 <br />
            </div>
            {/* <div className="feed_comment">
        <b>leee </b>너무 좋아요~
      </div> */}
          </div>
        );
      })}
      <Comment openComment={openComment} setOpenComment={setOpenComment} />
    </>
  );
};

export default Feed;
