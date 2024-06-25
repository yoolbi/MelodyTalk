import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
// import urlJoin from "url-join";
// import {loginAPIMethod} from "../api/client";
// import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";
import { postUserAPI } from "../api/client";

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
      country: data.get("country"),
      intro: data.get("intro"),
    };
    postUserAPI(user).then((res) => {
      if (res.status === 200) {
        navigate("/");
      } else {
        console.log(res);
      }
    });
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
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
            {t(`signup.signup`)}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={t(`signup.email`)}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label={t(`signup.name`)}
              name="name"
              autoComplete="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label={t(`signup.id`)}
              name="username"
              autoComplete="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t(`signup.password`)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              fullWidth
              name="country"
              label={t(`signup.nationality`)}
              type="country"
              id="country"
              autoComplete="country"
            />
            <TextField
              margin="normal"
              fullWidth
              name="intro"
              label={t(`signup.intro`)}
              type="intro"
              id="intro"
              autoComplete="intro"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              {t(`signup.signup`)}
            </Button>
            <Link to="/"> {t(`signup.login`)}</Link>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
