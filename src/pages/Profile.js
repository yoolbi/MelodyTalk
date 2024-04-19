import MenuProfile from "../components/menu/MenuProfile";

const Profile = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <MenuProfile />
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
        Profile
      </div>
    </div>
  );
};

export default Profile;
