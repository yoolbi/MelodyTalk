import { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuProfile from "../components/menu/MenuProfile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, ImageList, ImageListItem } from "@mui/material";
import Follow from "../components/modal/Follow";
import ProfileFeed from "../components/modal/ProfileFeed";

const ProfileOther = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];
  const { state } = useLocation();
  const [openFollow, setOpenFollow] = useState(false);
  const handleOpenFollow = () => setOpenFollow(true);
  const [clickFollowName, setClickFollowName] = useState("");

  const [openProfileFeed, setOpenProfileFeed] = useState(false);
  const handleOpenProfileFeed = () => setOpenProfileFeed(true);

  const [followCount, setFollowCount] = useState(10);
  const [followingCount, setFollowingCount] = useState(10);
  const [follow, setFollow] = useState(false);

  const handleClickAddFollow = () => {
    !follow ? setFollowCount(followCount + 1) : setFollowCount(followCount - 1);
    setFollow(!follow);
  };

  const handleClickFollowNum = (name) => {
    if (name === "follow") {
      setClickFollowName("팔로워");
    } else if (name === "following") {
      setClickFollowName("팔로잉");
    }
    handleOpenFollow();
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <MenuProfile />
      <div
        className="rightProfile"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="profileInfo"
          style={{
            borderBottom: "1px solid #c4c4c4",
            width: "80%",
            height: "200px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AccountCircleIcon
            style={{ width: "80px", height: "80px", marginRight: "20px" }}
          />
          <div>
            <div>
              <b>{state.name}</b>
              {!follow ? (
                <Button
                  variant="contained"
                  size="small"
                  style={{ margin: "0px 30px 0px 50px" }}
                  onClick={handleClickAddFollow}
                >
                  팔로우 +
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  size="small"
                  style={{ margin: "0px 30px 0px 50px" }}
                  onClick={handleClickAddFollow}
                >
                  팔로잉
                </Button>
              )}

              <Button variant="outlined" size="small">
                메시지 보내기
              </Button>
            </div>
            <div style={{ display: "flex", marginTop: "15px" }}>
              <div>게시물 {itemData.length}</div>
              <div style={{ margin: "0px 30px" }}>
                팔로워{" "}
                <b
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClickFollowNum("follow")}
                >
                  {followCount}
                </b>
              </div>
              <div>
                팔로잉{" "}
                <b
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClickFollowNum("following")}
                >
                  {followingCount}
                </b>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "80%", height: "65%" }}>
          <ImageList sx={{ width: "100%", height: "100%" }} cols={3} gap={20}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={handleOpenProfileFeed}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
      <Follow
        openFollow={openFollow}
        setOpenFollow={setOpenFollow}
        clickFollowName={clickFollowName}
      />
      <ProfileFeed
        openProfileFeed={openProfileFeed}
        setOpenProfileFeed={setOpenProfileFeed}
        name={state.name}
      />
    </div>
  );
};

export default ProfileOther;
