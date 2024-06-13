import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import { Grade, InsertDriveFileRounded } from "@mui/icons-material";
// import urlJoin from "url-join";
// import {loginAPIMethod} from "../api/client";
// import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n";
import LanguageIcon from "@mui/icons-material/Language";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/Home");
    // loginAPIMethod(data.get('email'), data.get('password')).then((data) => {
    //     console.log(data);
    //     if (data.status === 200) {
    //         Cookies.set('access_token', data.body['access_token']);
    //         window.location.replace(
    //             urlJoin(process.env.REACT_APP_FRONTEND_URL, "/Home")
    //         );
    //     }
    // })
  };

  const [lang, setLang] = useState(i18n.language === "ko" ? "jp" : "ko");
  const changeLanguage = () => {
    i18n.changeLanguage(lang);
    lang === "ko" ? setLang("jp") : setLang("ko");
  };

  const [error, setError] = useState(false);

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "1000px",
          height: "500px",
          backgroundColor: "white",
          opacity: "0.9",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "100px", height: "100px", marginBottom: "5px" }}
          src="/logo.jpg"
          alt="logo"
        />
        <Typography component="h1" variant="h5">
          {t(`login.login`)}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={t(`login.email`)}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={t(`login.password`)}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Box sx={{ height: "0.6em" }} />
          {!error && (
            <Typography style={{ color: "red", width: "100%" }}>
              {t(`login.error_message`)}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="success"
            sx={{ mt: 3, mb: 2 }}
          >
            {t(`login.login`)}
          </Button>
          <Link to="/SignUp">{t(`login.signup`)}</Link>
          <br />
          <div
            style={{
              cursor: "pointer",
              marginTop: "5px",
              width: "fit-content",
              display: "flex",
            }}
            onClick={changeLanguage}
          >
            <LanguageIcon /> {lang}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
