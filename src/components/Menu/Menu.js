import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Post from "../modal/Post";
import HomeIcon from "@mui/icons-material/Home";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div
      className="left"
      style={{
        width: "350px",
        height: "100%",
        borderRight: "1px solid #C4C4C4",
      }}
    >
      <Header />
      <div className="menu" style={{ height: "70%", margin: "20px" }}>
        <Link to="/Home" style={{ textDecoration: "none", color: "black" }}>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <HomeIcon style={{ width: "50", height: "50" }} />
            <div style={{ margin: "0px 20px" }}>
              <h3>홈</h3>
            </div>
          </div>
        </Link>
        <Link to="/Message" style={{ textDecoration: "none", color: "black" }}>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <SendOutlinedIcon style={{ width: "50", height: "50" }} />
            <div style={{ margin: "0px 20px" }}>
              <h3>메시지</h3>
            </div>
          </div>
        </Link>
        <div
          style={{ display: "flex", marginBottom: "20px", cursor: "pointer" }}
          onClick={handleOpen}
        >
          <LibraryAddOutlinedIcon style={{ width: "50", height: "50" }} />
          <div style={{ margin: "0px 20px" }}>
            <h3>만들기</h3>
          </div>
        </div>
        <Link to="/Profile" style={{ textDecoration: "none", color: "black" }}>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <AccountCircleOutlinedIcon style={{ width: "50", height: "50" }} />
            <div style={{ margin: "0px 20px" }}>
              <h3>프로필</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="logout">
        <Link
          to="/"
          style={{
            color: "black",
            position: "absolute",
            bottom: "20px",
            left: "20px",
          }}
        >
          로그아웃
        </Link>
      </div>
      <Post open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
