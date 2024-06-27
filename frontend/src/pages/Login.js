import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n";
import LanguageIcon from "@mui/icons-material/Language";
import { loginAPI } from "../api/client";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    loginAPI({ email: data.get("email"), password: data.get("password") }).then(
      (res) => {
        if (res.status === 200) {
          sessionStorage.setItem("user_id", res.data);
          setError(false);
          navigate("/Home");
        } else {
          setError(true);
        }
      }
    );
  };

  const [lang, setLang] = useState(i18n.language === "ko" ? "jp" : "ko");
  const changeLanguage = () => {
    i18n.changeLanguage(lang);
    lang === "ko" ? setLang("jp") : setLang("ko");
  };

  useEffect(() => {
    sessionStorage.getItem("user_id") && navigate("/Home");
  }, []);

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
          {error && (
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
