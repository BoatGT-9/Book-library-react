import { Link } from "@mui/material";
import React, { useState } from "react";

const Footer = () => {
  const [click, setClick] = useState("");

  // const onClick = () => {
  //   click("Click Success");
  // };
  return (
    <footer>
      <div className="container">
        <div className="footer-text">
          <div className="icon-container shadow-sm">
            <div>
              <p>&copy; Books Library Store</p>
            </div>

            <a href="https://www.facebook.com/surapong.kaeynin.s.r.p/">
              <img
                // onclick={onClick}
                src="src/assets/icon/facebook .png"
                alt=""
                width={"40px"}
              />
            </a>
            <a href="https://www.instagram.com/boat_s.r.p/">
              <img
                // onclick={onClick}
                src="src/assets/icon/instagram .png"
                alt=""
                width={"40px"}
              />
            </a>

            <a href="https://twitter.com/KUNG_69DOG">
              <img 
              // onclick={onClick} 
              src="src/assets/icon/twitter.png" alt="" width={"40px"} />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
