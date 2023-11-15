import { useEffect, useState } from 'react';
import {Link , useNavigate } from 'react-router-dom';
import authService from '../service/auth.service';

// MUI framework
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#594035',
      dark: '#3e2c25',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});



const SignUp = () => {

  const navigate = useNavigate();

  const [username, setusername] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setError] = useState({});
  const [errormessage, Seterrormessage] = useState({ message: "" });
  const Input = (event) => {
    setusername((Prev) => ({
      ...Prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (username.password === username.password) {
        const register = await authService.register(
          // ทำเป็น string นะ แปลงจาก array 
          username.username[0],
          username.email[0],
          username.password[0]
        );

        navigate("/login");
      } else {
        setError(ture), 
        Seterrormessage({ message: "มันซ้ำกันอะ" });
      }
    } catch (error) {
      console.log(error);
      setError(error);
      // Seterrormessage(error.response.data);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5" marginTop={15}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User name"
                  name="username"
                  onChange={Input}
                  value={username.username}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={Input}
                  value={username.email}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={Input}
                  value={username.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item sm={10}>
              Already have an account?
                <Link to="/Login" variant="body2" spacing={6} style={{color:"#594035"}}>
                   Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;