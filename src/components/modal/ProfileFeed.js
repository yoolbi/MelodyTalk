import { useState } from "react";
import { Modal, Box } from "@mui/material";
import Comment from "./Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

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
  const handleCloseComment = () => setOpenProfileFeed(false);
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
      <Modal
        open={openProfileFeed}
        onClose={handleCloseComment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="feed" style={{ width: "80%", maxWidth: "500px" }}>
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
                삭제
              </div>
            )}
          </div>
        </Box>
      </Modal>
      <Comment openComment={openComment} setOpenComment={setOpenComment} />
    </>
  );
};
export default ProfileFeed;
