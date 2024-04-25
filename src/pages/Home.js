import Menu from "../components/menu/Menu";
import Search from "../components/Search";
import Feed from "../components/Feed";

const Home = () => {
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
        <Search />
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
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Home;
