import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";


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

export default function RecipeReviewCard({ book, handleDelete, }) {
  const [expanded, setExpanded,] = React.useState(false);
  // console.log(`/edit/${book.id}`); 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="card-detail" sx={{ maxWidth: 220, maxHeight:550,
    }}>
      <CardMedia 
        className="img-container"
        component="img"
        height="300"
        width="100"
        // background-color=" rgb(255, 0, 0)"
        border= "2px solid rgb(0, 128, 0)"
        image={book.image}
        alt="book image"
      />
      <div className="card-details">
      <div style={{Size:"23px"}}>
      <CardHeader
        // title="Shrimp and Chorizo Paella"
        title={book.name}
        />
        </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          ประเภท : {book.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ผู้เขียน : {book.publisher}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {/* title : {book.title} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* button group */}
        {/* button Update */}
        <Link to={`/edit/${book.id}`} >  
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
        </Link>
        {/* button Delete */}
        <Link to="" onClick={() => { handleDelete(book.id);}}>
          <IconButton aria-label="Delete" display="flex">
            <DeleteOutlineIcon />
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
