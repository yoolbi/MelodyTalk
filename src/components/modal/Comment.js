import { useState } from "react";
import { Modal, Box, TextField } from "@mui/material";

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

const Comment = ({ openComment, setOpenComment }) => {
  const handleCloseComment = () => setOpenComment(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    ["yoolbi", "좋아요"],
    ["leee", "굿"],
  ]);

  const handleChangeComment = (e) => {
    setNewComment(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setComments([...comments, ["yoolbi", newComment]]);
      setNewComment("");
    }
  };

  return (
    <div>
      <Modal
        open={openComment}
        onClose={handleCloseComment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ width: "80%", height: "80%", overflow: "auto" }}>
            {comments.map((data, idx) => {
              return (
                <div key={idx} style={{ marginBottom: "5px" }}>
                  <b>{data[0]}</b> {data[1]}
                </div>
              );
            })}
          </div>
          <TextField
            style={{ width: "80%" }}
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
