import { Link } from "react-router-dom";
import Header from "../Header";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MenuProfile = () => {
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
            <HomeOutlinedIcon style={{ width: "50", height: "50" }} />
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
        >
          <LibraryAddOutlinedIcon style={{ width: "50", height: "50" }} />
          <div style={{ margin: "0px 20px" }}>
            <h3>업로드</h3>
          </div>
        </div>
        <Link to="/Profile" style={{ textDecoration: "none", color: "black" }}>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <AccountCircleIcon style={{ width: "50", height: "50" }} />
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
    </div>
  );
};

export default MenuProfile;
