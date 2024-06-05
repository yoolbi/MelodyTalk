import { useState } from "react";
import { Link } from "react-router-dom";
import Post from "../modal/Post";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SendIcon from "@mui/icons-material/Send";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useTranslation } from "react-i18next";

const MenuMessage = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div
      className="left"
      style={{
        width: "100px",
        height: "100%",
        borderRight: "1px solid #C4C4C4",
      }}
    >
      <img
        src="/logo.jpg"
        alt="logo"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          margin: "30px",
        }}
      />
      <div
        className="menu"
        style={{
          height: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <Link to="/Home" style={{ color: "black" }}>
          <HomeOutlinedIcon
            style={{ width: "50", height: "50", marginBottom: "30px" }}
          />
        </Link>
        <Link to="/Message" style={{ color: "black" }}>
          <SendIcon
            style={{ width: "50", height: "50", marginBottom: "30px" }}
          />
        </Link>
        <div
          style={{ cursor: "pointer", marginBottom: "30px" }}
          onClick={handleOpen}
        >
          <LibraryAddOutlinedIcon style={{ width: "50", height: "50" }} />
        </div>
        <Link to="/Profile" style={{ color: "black" }}>
          <AccountCircleOutlinedIcon
            style={{ width: "50", height: "50", marginBottom: "30px" }}
          />
        </Link>
      </div>
      <div className="logout">
        <Link
          to="/"
          style={{
            color: "black",
            position: "absolute",
            bottom: "20px",
            left: "15px",
          }}
        >
          {t(`menu.logout`)}
        </Link>
      </div>
      <Post open={open} setOpen={setOpen} />
    </div>
  );
};

export default MenuMessage;
