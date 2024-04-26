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

const Follow = ({ openFollow, setOpenFollow, clickFollowName }) => {
  const handleCloseComment = () => setOpenFollow(false);

  return (
    <div>
      <Modal
        open={openFollow}
        onClose={handleCloseComment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{clickFollowName}</Box>
      </Modal>
    </div>
  );
};
export default Follow;
