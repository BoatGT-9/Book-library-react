import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { auth } from '../context/Authcontext'
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import { createTheme,ThemeProvider } from '@mui/material/styles';


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






const Profile = () => {
  const {user} = auth()
  const navigate = useNavigate();

  const handleCancel = () =>{
    navigate("/")
  }

  return (
    <ThemeProvider theme={theme}>

    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      <div
        className="card-detail-profile"
        style={{
          // display:"flex",
          backgroundColor: "#eee",
          backdropFilter: "blur(5px)",
          width:"20cm",
          
        }}
        >
          <div style={{ position:'fixed',top:'7',right:'10'}}>
          <Button 
              onClick={handleCancel}
               endIcon={<CloseIcon/>} 
               > 
              </Button>
            

          </div>
        <br/>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img
          src="data:image/jpeg;base64,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"
          alt="John"
          style={{ width: "10rem", color: "#eee" ,border:"2px solid shadow black "}}
          />
          </div>
          <br/>
        <h1 style={{color:"#999"}}>{user.username} </h1>
        <p className="title" style={{textAlign:"center"}}>{user.email}</p>
        <p style={{color:"red",textAlign:"center"}}>{user.roles}</p>
        <br/>
        
        
      </div>
    </div>
               </ThemeProvider>
  );
};
export default Profile;
