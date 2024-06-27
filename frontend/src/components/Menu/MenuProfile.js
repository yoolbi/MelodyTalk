import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import Post from "../modal/Post";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";
import i18n from "../../locales/i18n";
import LanguageIcon from "@mui/icons-material/Language";

const MenuProfile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const { t } = useTranslation();
  const [lang, setLang] = useState(i18n.language === "ko" ? "jp" : "ko");
  const changeLanguage = () => {
    i18n.changeLanguage(lang);
    lang === "ko" ? setLang("jp") : setLang("ko");
  };

  const handleClickLogout = () => {
    sessionStorage.removeItem("user_id");
  };

  const handleClickProfile = () => {
    navigate("/Profile");
    window.location.reload();
  };
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
              <h3>{t(`menu.home`)}</h3>
            </div>
          </div>
        </Link>
        <Link to="/Message" style={{ textDecoration: "none", color: "black" }}>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <SendOutlinedIcon style={{ width: "50", height: "50" }} />
            <div style={{ margin: "0px 20px" }}>
              <h3>{t(`menu.message`)}</h3>
            </div>
          </div>
        </Link>
        <div
          style={{ display: "flex", marginBottom: "20px", cursor: "pointer" }}
          onClick={handleOpen}
        >
          <LibraryAddOutlinedIcon style={{ width: "50", height: "50" }} />
          <div style={{ margin: "0px 20px" }}>
            <h3>{t(`menu.post`)}</h3>
          </div>
        </div>
        <Link
          to="/Profile"
          style={{ textDecoration: "none", color: "black" }}
          onClick={handleClickProfile}
        >
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <AccountCircleIcon style={{ width: "50", height: "50" }} />
            <div style={{ margin: "0px 20px" }}>
              <h3>{t(`menu.profile`)}</h3>
            </div>
          </div>
        </Link>
      </div>
      <div
        className="logout"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          display: "flex",
        }}
        onClick={handleClickLogout}
      >
        <Link
          to="/"
          style={{
            color: "black",
          }}
        >
          {t(`menu.logout`)}
        </Link>
        <div
          style={{ display: "flex", cursor: "pointer", marginLeft: "25px" }}
          onClick={changeLanguage}
        >
          <LanguageIcon />
          {lang}
        </div>
      </div>
      <Post open={open} setOpen={setOpen} />
    </div>
  );
};

export default MenuProfile;
