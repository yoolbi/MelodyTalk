import { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuProfile from "../components/menu/MenuProfile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, ImageList, ImageListItem } from "@mui/material";
import Follow from "../components/modal/Follow";
import ProfileFeed from "../components/modal/ProfileFeed";
import { useTranslation } from "react-i18next";
import {
  getPostByUserIdAPI,
  getUserByUserIdAPI,
  getFollowersAPI,
  getFollowingsAPI,
} from "../api/client";

const Profile = () => {
  const loginUser = sessionStorage.getItem("user_id");
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [selectedPostIdx, setSelectedPostIdx] = useState();
  const { t } = useTranslation();

  const { state } = useLocation();
  const [openFollow, setOpenFollow] = useState(false);
  const handleOpenFollow = () => setOpenFollow(true);
  const [clickFollowName, setClickFollowName] = useState("");

  const [openProfileFeed, setOpenProfileFeed] = useState(false);
  const handleOpenProfileFeed = (post, idx) => {
    setSelectedPost(post);
    setSelectedPostIdx(idx);
    setOpenProfileFeed(true);
  };

  const [followCount, setFollowCount] = useState(10);
  const [followingCount, setFollowingCount] = useState(10);
  const [follow, setFollow] = useState(false);

  const handleClickAddFollow = () => {
    !follow ? setFollowCount(followCount + 1) : setFollowCount(followCount - 1);
    setFollow(!follow);
  };

  const handleClickFollowNum = (name) => {
    if (name === "follower") {
      setClickFollowName(t(`profile.follower`));
      const object = follower.map((obj) => ({
        user_id: obj.from_user_id,
        username: obj.from_user_username,
      }));
      setFollowModalData(object);
    } else if (name === "following") {
      setClickFollowName(t(`profile.following`));
      const object = following.map((obj) => ({
        user_id: obj.to_user_id,
        username: obj.to_user_username,
      }));
      setFollowModalData(object);
    }
    handleOpenFollow();
  };

  const [follower, setFollower] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followModalData, setFollowModalData] = useState([]);

  const getData = (id) => {
    getUserByUserIdAPI(id).then((res) => {
      setUser(res.data);
      getPostByUserIdAPI(res.data.user_id).then((res) => {
        setPosts(res.data);
      });
      getFollowersAPI(id).then((res) => {
        setFollower(res.data);
      });
      getFollowingsAPI(id).then((res) => {
        setFollowing(res.data);
      });
    });
  };

  useState(() => {
    if (!state || state.name === loginUser) {
      getData(loginUser);
    } else if (state.name !== loginUser) {
      getData(state.name);
    }
  }, []);

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
              <b>{user?.username}</b>
              {state &&
                (!follow ? (
                  <Button
                    variant="contained"
                    size="small"
                    style={{ margin: "0px 30px 0px 50px" }}
                    onClick={handleClickAddFollow}
                  >
                    {t(`profile.follow`)}
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    size="small"
                    style={{ margin: "0px 30px 0px 50px" }}
                    onClick={handleClickAddFollow}
                  >
                    {t(`profile.following`)}
                  </Button>
                ))}

              {state && (
                <Button variant="outlined" size="small">
                  {t(`profile.message`)}
                </Button>
              )}
            </div>
            <div style={{ display: "flex", marginTop: "15px" }}>
              <div>
                {t(`profile.feed`)} {posts.length}
              </div>
              <div style={{ margin: "0px 30px" }}>
                {t(`profile.follower`)}{" "}
                <b
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClickFollowNum("follower")}
                >
                  {follower.length}
                </b>
              </div>
              <div>
                {t(`profile.following`)}{" "}
                <b
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClickFollowNum("following")}
                >
                  {following.length}
                </b>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "80%", height: "65%" }}>
          <ImageList sx={{ width: "100%" }} cols={3} gap={24}>
            {posts.map((post, idx) => (
              <ImageListItem key={idx} style={{ position: "relative" }} sx={{}}>
                <img
                  srcSet={`data:image/jpeg;base64,${post?.image_file} 2x`}
                  src={`data:image/jpeg;base64,${post?.image_file}`}
                  alt={post?.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => handleOpenProfileFeed(post, idx)}
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
        users={followModalData}
      />
      <ProfileFeed
        openProfileFeed={openProfileFeed}
        setOpenProfileFeed={setOpenProfileFeed}
        name={user?.user_id}
        post={selectedPost}
        selectedPostIdx={selectedPostIdx}
      />
    </div>
  );
};

export default Profile;
