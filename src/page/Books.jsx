import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Swal from "sweetalert2";

// MUI framework
import { styled, alpha, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { createTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";

// config .env
const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};


const theme = createTheme();

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "15rem",
    border: "1px solid #ccc", // เพิ่มเส้นขอบด้วยสีเทาอ่อน
    borderRadius: "4px", // กำหนดรูปร่างให้เป็นวงกลม
    backgroundColor: "rgba(255, 255, 255, 0.8)", // กำหนดสีพื้นหลังให้โปร่งแสง
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // เพิ่มเงาบริเวณใต้กรอบ
    cursor: "pointer", // เปลี่ยนเคอร์เซอร์เป็นรูปขีดแสดงว่าเป็นสิ่งที่คลิกได้
    transition: "background-color 0.2s ease-in-out", // เพิ่มอายุการเปลี่ยนสีพื้นหลัง
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)", // สีพื้นหลังเมื่อโฮเวอร์
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// const handleDelete = async (id) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then(async (result) => {
//     if (result.isConfirmed) {
//       try {
        
//         await axios.delete(`${URL}/books/${id}`,config);

//         await Swal.fire("Deleted!", "Your file has been deleted.", "success");
//         // สั่งรีโหลดหน้าของ page  เพื่อจะให้ useEfect ทำงานอีกครั้ง
//         window.location.reload();
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   });
// };

// const handleDelete = async (id) => {
//   Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then( async(result) => {
//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`${URL}/books/${id}`,config);

//         await Swal.fire(
//           'Deleted!',
//           'Your file has been deleted.',
//           'success'
//           )
//           // สั่งรีโหลดหน้าของ page  เพื่อจะให้ useEfect ทำงานอีกครั้ง 
//           window.location.reload();
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     })
// };
const handleDelete = async (id) => {
  try {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      await axios.delete(`${URL}/books/${id}`, config);

      await Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );

      // อัพเดทสถานะหรือ UI โดยตรง แทนการรีโหลดหน้า
      // เช่น อัพเดทข้อมูลที่แสดงในหน้า
      // updateData();
    }
  } catch (error) {
    console.error(error);

    // จัดการข้อผิดพลาด แสดงข้อความผิดพลาดหรือดำเนินการตามกรณี
    // เช่น Swal.fire('Error', 'An error occurred.', 'error');
  }
};


const Books = () => {
  const [books, setBooks] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchAllRes = async () => {
      try {
        // console.log(data)
        const res = await axios.get(`${URL}/books`,config);
        setBooks(res.data.BookList);
        // setIsLoading(false);
        // console.log(res.data, booklist);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRes(books);
  }, []);
  console.log(books);
  return (
    <div>
      <h1 style={{marginTop:"90px"}}>Welcome to LibraryBook</h1>
      <div className="search-bar">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      {/* {!isLoading?( */}
      <Box xs={12} sm={6} md={4}>
        <Stack
          xs={12}
          sm={6}
          md={4}
          direction={"row"}
          spacing={2}
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "auto",
            padding:"10px",
            flexWrap:"wrap",
            gap:"15px"
          }}
        >
          {books.map((book) => {
            // return <div>{book.id}</div>
            return <Card handleDelete={handleDelete} book={book} key={book.id} />;
          })}
           {/* <div className="">
            {books.map((book) => {
              return <Card book={book} key={book.id} />;
            })} 
      </div> */}
      </Stack>
       </Box>
      {/* ):(<Loading animation={Loading}/>)} */}
      
        
   
    </div>
  );
}; 

export default Books;
