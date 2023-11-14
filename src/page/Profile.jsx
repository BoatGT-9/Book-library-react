import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Profile = () => {
    return (
      <div>
        <div class="page shadow">
          <div class="main-container shadow">
            <MDBContainer>
              <br />
              <br />
              <MDBRow>
                <MDBCol sm={12} md={4}>
                  <div class="container">
                    <img
                      src="./img.jpg"
                      alt="John"
                      style={{ width: "65%", borderRadius: "100%" }}
                    />
                    <br />
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </MDBCol>
  
                <MDBCol>
                  <div class="container">
                    <h2>Abhinav Dubey</h2>
                    <p>IIT Roorkee</p>
                    <p>Roorkee, Uttarakhand, India</p>
                  </div>
  
                  <hr />
  
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol sm={2} lg={2} md={2}>
                        <h6 className="m-4">Bio </h6>
                      </MDBCol>
                      <MDBCol>
                        <p class="bio">
                          Hello, I am a pre final year student at Indian Institute
                          of Technology Roorkee (IIT'R). I am a tech enthusiast
                          and like to learn new stuffs related to technology.
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                  <br />
                  <br />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
  
          <div class="bottom-container" style={{ textAlign: "center" }}>
            <h4
              style={{
                paddingBottom: "1%",
                paddingTop: "3%",
                color: "rgb(70, 131, 192)"
              }}
            >
              {" "}
              Portfolio
            </h4>
            <table>
              <tr>
                <th>Sr No.</th>
                <th>Company Name</th>
                <th>Company Website</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Company 1</td>
                <td>
                  <a href="#" class="links">
                    Link 1
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Company 2</td>
                <td>
                  <a href="#" class="links">
                    Link 2{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Company 3</td>
                <td>
                  <a href="#" class="links">
                    Link 3
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Company 4</td>
                <td>
                  <a href="#" class="links">
                    Link 4
                  </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Company 5</td>
                <td>
                  <a href="#" class="links">
                    Link 5
                  </a>
                </td>
              </tr>
            </table>
            <p>
              <button>Submit Pitch</button>
            </p>
          </div>
        </div>
      </div>
    );
  };
  export default Profile;