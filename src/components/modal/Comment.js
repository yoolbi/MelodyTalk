import { useState, useEffect } from "react";
import { Modal, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getUserByUserIdAPI, postCommentAPI } from "../../api/client";

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
  justifyContent: "center",
  alignItems: "center",
};

const Comment = ({
  openComment,
  setOpenComment,
  comments,
  setComments,
  post_id,
}) => {
  const { t } = useTranslation();
  const [currentUser, setCurrentUser] = useState("");
  const handleCloseComment = () => setOpenComment(false);
  const [newComment, setNewComment] = useState("");

  const handleChangeComment = (e) => {
    setNewComment(e.target.value);
  };

  const handleKeyPress = (e) => {
    let postNewComment = {
      user_id: currentUser.user_id,
      post_id: post_id,
      comment_content: newComment,
    };
    if (e.key === "Enter") {
      postCommentAPI(postNewComment)
        .then((res) => {
          let temp = [...comments];
          temp.push({
            username: currentUser.username,
            comment_content: newComment,
          });

          setComments(temp);
          setNewComment("");
        })
        .catch((err) => console.log(err));
    }
  };

  const navigate = useNavigate();
  const handleClickOtherUser = (data) => {
    console.log(data);
    navigate("/Profile", { state: { name: data } });
  };

  useEffect(() => {
    getUserByUserIdAPI(sessionStorage.getItem("user_id")).then((res) => {
      setCurrentUser(res.data);
    });
  }, []);

  return (
    <div>
      <Modal
        open={openComment}
        onClose={handleCloseComment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              width: "100%",
              height: "60px",
              borderBottom: "1px solid #c4c4c4",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            <h3>{t(`home.comment`)}</h3>
          </div>
          <div style={{ width: "90%", height: "80%", overflow: "auto" }}>
            {comments?.map((data, idx) => {
              return (
                <div key={idx} style={{ marginBottom: "5px" }}>
                  <b
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickOtherUser(data.user_id)}
                  >
                    {data.username}
                  </b>{" "}
                  {data.comment_content}
                </div>
              );
            })}
          </div>
          <TextField
            style={{ width: "100%" }}
            value={newComment}
            onKeyPress={handleKeyPress}
            onChange={handleChangeComment}
          />
        </Box>
      </Modal>
    </div>
  );
};
export default Comment;
