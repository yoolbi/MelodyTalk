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
  const { t } = useTranslation();
  const handleClose = () => setOpen(false);
  const [comment, setComment] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [musicFile, setMusicFile] = useState("");

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleMusicFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMusicFile(file);
    }
  };

  const [checked, setChecked] = useState(false);

  const handleChangeChecked = (e) => {
    setChecked(e.target.checked);
  };

  const handleClickShare = () => {
    console.log(imageFile, musicFile, comment, checked);
    handleClose();
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
          >
            {imageFile && (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="postFeedImage"
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </div>
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<AddPhotoAlternateIcon />}
            style={{ width: "50%", marginTop: "10px" }}
          >
            {t(`upload.image`)} {imageFile.name}
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
            {t(`upload.music`)} {musicFile.name}
            <VisuallyHiddenInput type="file" onChange={handleMusicFileChange} />
          </Button>
          <TextField
            id="outlined-textarea"
            label={t(`upload.comment`)}
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
              label={t(`upload.copyright`)}
            />
          </FormGroup>
          <Button
            variant="contained"
            style={{ width: "50%", marginTop: "5px" }}
            onClick={handleClickShare}
          >
            {t(`upload.upload`)}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default Post;
