import { useState } from "react";
import Menu from "../components/menu/Menu";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const Home = () => {
  const [search, setSearch] = useState("");
  const [likeCount, setLikeCount] = useState(80);
  const [like, setLike] = useState(false);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(search);
    }
  };

  const handleClickLike = () => {
    !like ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
    setLike(!like);
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <Menu />
      <div
        className="right"
        style={{
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
          onKeyPress={handleKeyPress}
          onChange={handleChangeSearch}
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
              {!like ? (
                <FavoriteBorderIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleClickLike}
                />
              ) : (
                <FavoriteIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleClickLike}
                />
              )}

              <MessageOutlinedIcon style={{ cursor: "pointer" }} />
            </div>
            <div className="feed_like">좋아요 {likeCount}개</div>
            <div className="feed_text">
              <b>yoolbi </b>오늘의 노래 <br />
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
              <FavoriteBorderIcon />
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
              <FavoriteBorderIcon />
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
