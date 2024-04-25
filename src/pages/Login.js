import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
// import urlJoin from "url-join";
// import {loginAPIMethod} from "../api/client";
// import Cookies from 'js-cookie';

const Login = () => {
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
          style={{ width: "100px", height: "100px" }}
          src="/logo.jpg"
          alt="logo"
        />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="success"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Link to="/SignUp">{"Don't have an account? Sign Up"}</Link>
        </Box>
      </div>
    </div>
  );
};

export default Login;
