import { useState } from "react";
import {
  Modal,
  Box,
  Button,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { styled } from "@mui/material/styles";

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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Post = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [comment, setComment] = useState("");
  const [imageFileName, setImageFileName] = useState("");
  const [musicFileName, setMusicFileName] = useState("");

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFileName(file.name);
    }
  };

  const handleMusicFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMusicFileName(file.name);
    }
  };

  const [checked, setChecked] = useState(false);

  const handleChangeChecked = (e) => {
    setChecked(e.target.checked);
  };

  const handleClickShare = () => {
    console.log(imageFileName, musicFileName, comment, checked);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{ width: "50%", height: "200px", backgroundColor: "grey" }}
          ></div>
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<AddPhotoAlternateIcon />}
            style={{ width: "50%", marginTop: "10px" }}
          >
            사진 파일 업로드: {imageFileName}
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={handleImageFileChange}
            />
          </Button>
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            style={{ width: "50%", marginTop: "10px" }}
          >
            음원 파일 업로드: {musicFileName}
            <VisuallyHiddenInput type="file" onChange={handleMusicFileChange} />
          </Button>
          <TextField
            id="outlined-textarea"
            label="문구를 입력하세요"
            placeholder="음원 설명"
            multiline
            style={{ width: "50%", marginTop: "10px" }}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <FormGroup style={{ width: "50%" }}>
            <FormControlLabel
              required
              control={
                <Checkbox checked={checked} onChange={handleChangeChecked} />
              }
              label="저작권 확인"
            />
          </FormGroup>
          <Button
            variant="contained"
            style={{ width: "50%", marginTop: "5px" }}
            onClick={handleClickShare}
          >
            게시물 공유하기
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default Post;
