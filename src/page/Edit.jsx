import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import authHeader from "../service/auth.header"

// MUI framework
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { createTheme } from '@mui/material/styles';


const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
  headers:authHeader()
};

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
// เปลี่ยนสีของปุ่ม Button cancel
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

export default function Edit() {
  const navigate = useNavigate();
  const [error, setError] = useState([false]);
  const [books, setBooks] = useState({
    name: "",
    type: "",
    title: "",
    publisher: "",
    image: "",
  });
  //   console.log(books);
  const { bookId } = useParams();
  console.log(bookId);
  const handleChange = (e) => {
    setBooks((Prev) => ({ ...Prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(`${URL}/books/${bookId}`,config);
        // console.log(res);
        setBooks(res.data.Books);
        // console.log(res.data.BookList);
        console.log(books);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllBooks();
  }, [bookId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/books/${bookId}`, books,config);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
  const handleClear = () => {
    setRestaurant({
      name: "",
      type: "",
      title: "",
      publisher: "",
      image: "",
    });
    setError(false);
  };
  const handleCancel = () => {
    navigate("/");
  };

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
              "url(https://normcph.com/wp-content/uploads/2022/09/NormArchitects_SoftMinimal_Gestalten_PhotoCredits_ChristianM%C3%B8llerAndersen_Lowres_46.jpg)",
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
              Edit Book
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
                value={books.name}
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
                value={books.type}
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
                value={books.title}
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
                value={books.publisher}
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
                value={books.image}
                autoComplete="current-password"
              />

              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#594035", }}
              >
                Add book
              </Button> */}
              {/* <Button 
              variant="contained"
              onClick={handleSubmit}
              fullWidth
              sx={{backgroundColor:"#594035" }}
              >
                Contained
                </Button> */}
              <Button
                variant="contained"
                // color="brown"
                endIcon={<SendIcon />}
                fullWidth
                
                onClick={handleSubmit}
              >
                Edit
              </Button>
              {/* <Button
              variant="outlined"
              color="error"
              onClick={handleCancel}
               endIcon={<CloseIcon />} 
               fullWidth 

               sx={{backgroundColor:'red',color:'black', marginTop:'5px' }}
               //  className={classes.customButton}
               >
                Cancel
              </Button> */}

              <ColorButton
                variant="contained"
                color="error"
                onClick={handleCancel}
                endIcon={<CloseIcon />}
                fullWidth
                sx={{ marginTop: "5px" }}
              >
                cancel
              </ColorButton>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
