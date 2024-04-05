import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";

const defaultTheme = createTheme();

export default function SignIn() {
  const [data, setData] = useState([]);

  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    role: "1",
    email: "",
    accessToken: "",
    avatar: "",
    phone: "",
  });
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLoginGG = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("token", user.accessToken);
        axios
          .post("http://localhost:3001/users", {
            username: user.displayName,
            role: "1",
            email: user.email,
            accessToken: user.accessToken,
            password: "nguyenphuc0062",
            avatar: user.photoURL,
            phone: user.phoneNumber,
          })
          .then(() => {
            login(user.accessToken);
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchUsers = () => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        setData(response.data); // Use response.data directly
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  useEffect(() => {
    // Fetch your data from an API and set it using setData
    fetchUsers();
  }, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const currentEmail = formData.email;
    const currentPw = formData.password;
    if (!currentEmail || !currentPw) {
      console.log("Email và mật khẩu không được để trống.");
      return; // Stop the function if validation fails
    }
    const findUser = data.find(
      (user) => user.email === currentEmail && user.password === currentPw
    );
    if (findUser) {
      console.log("da log in");
    } else {
      console.log("sai pw hoặc mk");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              onClick={handleLoginGG}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in with google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <RouterLink to={"/sign-up"} variant="body2">
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
