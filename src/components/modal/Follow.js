import { Modal, Box } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

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
};

const Follow = ({ openFollow, setOpenFollow, clickFollowName, users }) => {
  const handleCloseComment = () => setOpenFollow(false);
  const navigate = useNavigate();

  const handleClickOtherUser = (data) => {
    console.log(data);
    navigate("/Profile", { state: { name: data } });
  };

  return (
    <>
      <Modal
        open={openFollow}
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
            <h3>{clickFollowName}</h3>
          </div>
          <div style={{ overflowY: "auto" }}>
            {users?.map((data, idx) => {
              return (
                <div key={idx} style={{ display: "flex", marginTop: "5px" }}>
                  <AccountCircleOutlinedIcon
                    style={{
                      width: "45px",
                      height: "45px",
                      marginRight: "10px",
                    }}
                  />
                  <b
                    style={{
                      width: "45px",
                      height: "45px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClickOtherUser(data.user_id)}
                  >
                    {data.username}
                  </b>
                </div>
              );
            })}
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default Follow;
