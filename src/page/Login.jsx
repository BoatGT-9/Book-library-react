// import * as React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../service/auth.service";
// import { userAuthContext } from "../context/Authcontext";

// MUI framework
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#594035",
      dark: "#3e2c25",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignIn() {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  // const {login} = userAuthContext();
  const [username, setUsername] = useState({
    username: "",
    password: "",
  });

  const Input = (e) => {
    setUsername((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const current = await authService.login(
        username.username,
        username.password
      );
      // console.log(current);
      authService.login(current);
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      {/* <Card sx={{}}> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" marginTop={15}>
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
              id="username"
              label="Username"
              onChange={Input}
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange={Input}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item sm={12}>
                <Typography fontSize={15}>
                  Don't have an account?
                  <Link
                    to="/Register"
                    variant="body2"
                    color="#594035"
                    spacing={6}
                  >
                    Sign Up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
      {/* </Card> */}
    </ThemeProvider>
  );
}
