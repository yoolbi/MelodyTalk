import { Link } from "react-router-dom";
import { TextField, InputAdornment } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const Home = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div
        className="left"
        style={{
          width: "350px",
          height: "100%",
          border: "1px soid black",
        }}
      >
        <div
          className="header"
          style={{
            display: "flex",
            height: "100px",
            margin: "20px",
          }}
        >
          <img
            src="/logo.jpg"
            alt="logo"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
          <div style={{ fontSize: "20px", margin: "5px 20px" }}>MelodyTALK</div>
        </div>
        <div className="menu" style={{ height: "70%", margin: "20px" }}>
          <div
            style={{ display: "flex", marginBottom: "20px", cursor: "pointer" }}
          >
            <HomeIcon style={{ width: "50", height: "50" }} />
            <div style={{ margin: "0px 20px" }}>
              <h3>홈</h3>
            </div>
          </div>
          <div
            style={{ display: "flex", marginBottom: "20px", cursor: "pointer" }}
          >
            <SendOutlinedIcon style={{ width: "50", height: "50" }} />
            <div style={{ margin: "0px 20px" }}>
              <h3>메시지</h3>
            </div>
          </div>
          <div
            style={{ display: "flex", marginBottom: "20px", cursor: "pointer" }}
          >
            <LibraryAddOutlinedIcon style={{ width: "50", height: "50" }} />
            <div style={{ margin: "0px 20px" }}>
              <h3>업로드</h3>
            </div>
          </div>
          <div
            style={{ display: "flex", marginBottom: "20px", cursor: "pointer" }}
          >
            <AccountCircleOutlinedIcon style={{ width: "50", height: "50" }} />
            <div style={{ margin: "0px 20px" }}>
              <h3>프로필</h3>
            </div>
          </div>
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
      <div
        className="right"
        style={{
          borderLeft: "1px solid #C4C4C4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          id="input-with-icon-textfield"
          label="검색"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ marginTop: "40px", width: "80%", marginBottom: "60px" }}
        />
        <div
          className="feeds"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <div className="feed" style={{ width: "80%", marginBottom: "15px" }}>
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
              <FavoriteBorderOutlinedIcon />
              <MessageOutlinedIcon />
            </div>
            <div className="feed_text">
              <b>yoolbi </b>오늘의 노래 <br />
            </div>
            <div className="feed_comment">
              <b>leee </b>너무 좋아요~
            </div>
          </div>
          <div className="feed" style={{ width: "80%", marginBottom: "15px" }}>
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
              <FavoriteBorderOutlinedIcon />
              <MessageOutlinedIcon />
            </div>
            <div className="feed_text">
              <b>yoolbi </b>오늘의 노래 <br />
            </div>
            <div className="feed_comment">
              <b>leee </b>너무 좋아요~
            </div>
          </div>
          <div className="feed" style={{ width: "80%", marginBottom: "15px" }}>
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
              <FavoriteBorderOutlinedIcon />
              <MessageOutlinedIcon />
            </div>
            <div className="feed_text">
              <b>yoolbi </b>오늘의 노래 <br />
            </div>
            <div className="feed_comment">
              <b>leee </b>너무 좋아요~
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
