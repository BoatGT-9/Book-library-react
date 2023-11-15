import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { auth } from "../context/Authcontext";
import PreviewIcon from '@mui/icons-material/Preview';
import authHeader from "../service/auth.header";

import axios from "axios";

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


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ book, handleDelete }) {
  const [expanded, setExpanded] = React.useState(false);
  const [books,setbooks] =React.useState()
  // console.log(`/edit/${book.id}`);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { user } = auth();

  useEffect(() => {
    const fetchIdbook = async (bookId) => {
      try {
        // console.log(data)
        const res = await axios.get(`${URL}/books/${bookId}`,config);
        setbooks(res.data.BookList);
        // setIsLoading(false);
        // console.log(res.data, booklist);
      } catch (err) {
        console.log(err);
      }
    };
    fetchIdbook(book);
  }, []);
  // console.log(book);


  const handelClick =()=>{
    Swal.fire({
      title: [book.name],
      text: [book.title],
      imageUrl: [book.image],
      imageWidth: "250px",
      imageHeight: "300px",
      imageAlt: "book image",
      
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            
    
            
            // สั่งรีโหลดหน้าของ page  เพื่อจะให้ useEfect ทำงานอีกครั้ง
            // window.location.reload();  
          } catch (error) {
            console.error(error);
          }
        }
      });
    }
    console.log(book);


  return (
    <Card className="card-detail" sx={{ maxWidth: 220, maxHeight: 650 }}>
      <CardMedia
        className="img-container"
        component="img"
        height="300"
        width="100"
        // background-color=" rgb(255, 0, 0)"
        border="2px solid rgb(0, 128, 0)"
        image={book.image}
        alt="book image"
      />
      <div className="card-details">
        <div style={{ Size: "15px" }}>
          <CardHeader
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            // title="Shrimp and Chorizo Paella"
            title={book.name}
          />
        </div>
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            ประเภท : {book.type}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ 
            whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
}}>
            ผู้เขียน : {book.publisher}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ 
            whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
}}>
            title : {book.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* button group */}
          {/* button Update */}
          {user && user.roles.includes("ROLES_ADMIN") && (
            <Link to={`/edit/${book.id}`}>
              <IconButton aria-label="Edit">
                <EditIcon />
              </IconButton>
            </Link>
          )}
          {/* button Delete */}
          {user && user.roles.includes("ROLES_ADMIN") && (
            <Link
              to=""
              onClick={() => {
                handleDelete(book.id);
              }}
            >
              <IconButton aria-label="Delete" display="flex">
                <DeleteOutlineIcon />
              </IconButton>
            </Link>
          )}
            <Link
              to=""
              onClick={() => {
                handelClick(book.id)
              }}
            >
              <IconButton aria-label="Delete" display="flex">
              <PreviewIcon/>
              </IconButton>
            </Link>


          {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </ExpandMore> */}
        </CardActions>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Title:</Typography>
          <Typography paragraph>{book.title}.</Typography>
        </CardContent>
      </Collapse> */}
      </div>
    </Card>
  );
}
