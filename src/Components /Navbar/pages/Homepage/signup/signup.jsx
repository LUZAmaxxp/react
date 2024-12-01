import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import Img from "../../../../../assets/img/main.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Axios to make API calls
import user from "../../../../../Backend/models/user";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // To handle redirects after signup

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if the email already exists
      const res = await axios.post(
        "http://localhost:5000/api/auth/check-email",
        { email }
      );

      if (res.data.exists) {
        navigate("/"); // Redirect to login page if email already exists
      } else {
        // Register new user and check role in response
        const registerRes = await axios.post(
          "http://localhost:5000/api/auth/register",
          { email, password }
        );

        console.log("Registration response:", registerRes.data);
        localStorage.setItem("userRole", registerRes.data.role);

        // Redirect based on the role received from backend
        if (registerRes.data.role === "admin") {
          navigate("/adminpage");
        } else {
          navigate("/Productspage");
        }
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    } finally {
      setLoading(false);
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
            Sign Up
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={3}>
            Create an account to get started
          </Typography>
          <form>
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
              onClick={handleSubmit}
              sx={{
                mt: 3,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: 2,
              }}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Get Started"}
            </Button>
          </form>

          <Typography variant="body2" color="textSecondary" mt={2}>
            By signing up, you agree to our Terms & Conditions.
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
}
