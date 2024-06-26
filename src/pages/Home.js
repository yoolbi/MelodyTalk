import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/menu/Menu";
import Search from "../components/Search";
import Feed from "../components/Feed";

const Home = () => {
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    !sessionStorage.getItem("user_id") && navigate("/");
  }, []);

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
        <Search setSearch={setSearch} />
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
          <Feed search={search} />
        </div>
      </div>
    </div>
  );
};

export default Home;
