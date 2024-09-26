import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Avatar,
  Grid2,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/auth-context";

const Register = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = existingUsers.find(
      (user: { email: string; username: string }) =>
        user.email === formData.email || user.username === formData.username
    );

    if (userExists) {
      setError("Username or email already exists.");
      return;
    }

    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    login(formData.email, formData.password);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-green-500">
      <Container component="main" maxWidth="xs">
        <Paper elevation={10} style={{ padding: "30px", borderRadius: "10px" }}>
          <Avatar style={{ margin: "auto", backgroundColor: "#3f51b5" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            variant="h5"
            component="h1"
            align="center"
            style={{ margin: "20px 0" }}
          >
            Register
          </Typography>
          {error && (
            <Typography
              color="error"
              align="center"
              style={{ marginBottom: "15px" }}
            >
              {error}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
              color="primary"
              style={{ borderRadius: "5px" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              color="primary"
              style={{ borderRadius: "5px" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              color="primary"
              style={{ borderRadius: "5px" }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{
                marginTop: "20px",
                borderRadius: "5px",
                padding: "10px",
                fontSize: "16px",
              }}
            >
              Register
            </Button>
          </form>
        </Paper>
        <Grid2 container justifyContent="center" style={{ marginTop: "15px" }}>
          <Typography variant="body2">
            Already have an account?
            <Button
              onClick={() => navigate("/auth/login")}
              color="primary"
              style={{ textTransform: "none" }}
            >
              Login
            </Button>
          </Typography>
        </Grid2>
      </Container>
      <footer className="mt-10 text-gray-200">
        &copy; 2024 My Ecommerce App. All rights reserved.
      </footer>
      <svg
        className="absolute bottom-0 left-0 right-0 h-48 text-white"
        viewBox="0 0 1440 320"
      >
        <path
          fillOpacity="1"
          d="M0,192L30,197.3C60,203,120,213,180,229.3C240,245,300,267,360,245.3C420,224,480,160,540,133.3C600,107,660,117,720,128C780,139,840,149,900,138.7C960,128,1020,96,1080,96C1140,96,1200,128,1260,144C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Register;
