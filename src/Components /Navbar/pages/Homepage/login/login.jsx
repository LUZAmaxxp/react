import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { auth, provider } from "../../../../../firebase"; // Import Firebase
import { signInWithPopup } from "firebase/auth";
import Img from "../../../../../assets/img/main.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("error");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleCloseSnackbar = () => setOpenSnackbar(false);

  // Firebase Google sign-in handler
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userEmail = user.email;

      // Check if the email exists in MongoDB
      const response = await axios.post(
        "http://localhost:5000/api/auth/check-email",
        {
          email: userEmail,
        }
      );

      if (response.data.exists) {
        // Redirect based on email domain
        if (userEmail.endsWith("@e-polytechnique.ma")) {
          navigate("/adminpage");
        } else {
          navigate("/Productspage");
        }
      } else {
        setAlertMessage("Account does not exist. Please sign up.");
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate("/signup");
        }, 3000);
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      setAlertMessage("Error signing in with Google.");
      setOpenSnackbar(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      const { redirect } = response.data;

      // Redirect based on the role or the login status
      if (redirect) {
        navigate(redirect);
      }
    } catch (error) {
      console.error(error);
      setAlertMessage(error.response?.data?.message || "Sign-In Please!.");
      setAlertSeverity("error");
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/signup");
      }, 3000);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 400,
            borderRadius: 3,
            textAlign: "center",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom color="primary">
            Login
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={3}>
            Enter your credentials to access your account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Login
            </Button>
          </form>
          <Button
            onClick={handleGoogleSignIn}
            variant="outlined"
            fullWidth
            sx={{
              mt: 2,
              py: 1,
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Login with Google
          </Button>
          <Typography variant="body2" color="textSecondary" mt={2}>
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </motion.div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
