import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// MUI framework
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider, } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from '@mui/icons-material/Close';
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

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      >
      {"Copyright © "}
      <Link color="inherit" href="https://arit.npru.ac.th/">
        Web Books NPRU
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

// const Add = () => {};
// const useStyles = makeStyles((theme) => ({
//   customButton: {
//     backgroundColor: 'red', // สีพื้นหลังเริ่มต้น
//     color: 'black',          // สีตัวอักษรเริ่มต้น
//     marginTop: '5px',
//     '&:hover': {
//       backgroundColor: 'blue', // สีพื้นหลังเมื่อโฮเวอร์
//     },
//   },
// }));


export default function Add() {
  
  const [books, setBooks] = useState({
    name: "",
    type: "",
    title: "",
    image: "",
    publisher: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(books);
    try {
      await axios.post(`${URL}/books`, books,config);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
  const handleClear = () => {
    setBooks({
      name: "",
      type: "",
      title: "",
      image: "",
      publisher: "",
    });
    setError(false);
  };
  const handleCancel = () =>{
    navigate("/")
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://normcph.com/wp-content/uploads/2022/09/NormArchitects_SoftMinimal_Gestalten_PhotoCredits_ChristianM%C3%B8llerAndersen_Lowres_29.jpg)",
              // https://source.unsplash.com/random?wallpapers
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" marginTop={3}>
              Add new Books
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange={handleChange}
                // value={books.name}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="type"
                label="Type"
                type="text"
                id="type"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="title"
                label="Title"
                type="text"
                id="title"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="publisher"
                label="publisher"
                type="text"
                id="publisher"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="image"
                label="Image"
                type="text"
                id="Image"
                onChange={handleChange}
                autoComplete="current-password"
              />

             
              <Button 
              onClick={handleSubmit}
               endIcon={<SendIcon />} 
               fullWidth 
               variant="contained"
                
               >
                Add book 
              </Button>
              
              <Button
              variant="contained"
              color="error"
              onClick={handleCancel}
               endIcon={<CloseIcon />} 
               fullWidth 
               sx={{marginTop:'5px' }}
               
               >
                Cancel
              </Button>
                 
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
