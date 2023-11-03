import React from "react";
import { Link } from "react-router-dom";
const Card = ({book,handleDelete}) => {
  return (
    <div className="card shadow "style={{ width: "18rem" }}key={book.id}>
      <img src={book.image} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="title">{book.name}</h5>
        <p className="card-text">{book.type}</p>
        <p className="card-text">{book.title}</p>
        <Link to={`/edit/${book.id}`} className="btn btn-warning px-2 mx-1">
          Edit
        </Link>
        <Link to="" className="btn btn-danger px-2 mx-1"
          onClick={() => {
            handleDelete(book.id);
          }}
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Card;
