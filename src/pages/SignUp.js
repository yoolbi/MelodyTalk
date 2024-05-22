import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
// import urlJoin from "url-join";
// import {loginAPIMethod} from "../api/client";
// import Cookies from 'js-cookie';

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
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
            회원가입
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
              label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="이름"
              name="name"
              autoComplete="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="userID"
              label="사용자 ID"
              name="userID"
              autoComplete="userID"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="country"
              label="국적"
              type="country"
              id="country"
              autoComplete="country"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            <Link to="/">{"계정이 있으신가요? 로그인"}</Link>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
