import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  Facebook,
  GitHub,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://wa.me/0716 483268" className="me-4 text-reset">
            <WhatsApp style={{color:"red"}}  />
          </a>
          <a href="https://twitter.com/ridge_techs" className="me-4 text-reset">
            <Twitter style={{color:"red"}} />
          </a>
          <a href="edyche@gmail.com" className="me-4 text-reset">
            <Google style={{color:"red"}} />
          </a>
          <a href="https://www.instagram.com/peterrgachau/" className="me-4 text-reset">
            <Instagram style={{color:"red"}} fab icon="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/peter-gachau-991736277/" className="me-4 text-reset">
            <LinkedIn style={{color:"red"}} fab icon="linkedin" />
          </a>
          <a href="https://github.com/petergachau" className="me-4 text-reset">
            <GitHub style={{color:"red"}} fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className=" text-primary text-uppercase fw-bold mb-4 ">
                <MDBIcon
                  style={{ color: "blue" }}
                  icon="gem"
                  className="me-3"
                />
                Edyche Builders Ltd <span style={{ color: "red" }}>Builders Ltd</span>
              </h6>
              <p>
                Buld Your Dream Home/ Apartment with Edyche Builders Ltd
              </p>
              <Link to='/contact'>
                <button className="buy">
                    Build Your House Today
                </button>
              </Link>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-primary text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="/phones" className="text-reset">
                 Plots
                </Link>
              </p>
              <p>
                <Link to="/cars" className="text-reset">
                  Homes
                </Link>
              </p>
              <p>
                <Link to="/electronics" className="text-reset">
                  Apartments
                </Link>
              </p>
              <p>
                <Link to="/clothing" className="text-reset">
                 Mansions
                </Link>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className=" text-primary text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/pricing" className="text-reset">
                  Pricing
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-reset">
                 About
                </Link>
              </p>
              <p>
                <Link to='/contact' className="text-reset">
                 Contact
                </Link>
              </p>
              <p>
                <Link to="projects" className="text-reset">
                  Products
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className=" text-primary text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Nairobi,Ozzi plazza 2nd Floor,<span style={{ color: "red" }}>Kenya</span>
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                edyche@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +254 716 483268
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +254 716 483268
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >

        ©{new Date().getFullYear()} Copyright: 
       <span> developed by <a href="https://peter-gachau-dev.netlify.app/">
        <span style={{color:'red'}}>P.G</span></a></span>
        <p>             <a style={{ color: "black" }} href="https://wa.me/0757198515">
        if you need similar projectstext  
        <WhatsApp/>
        </a>
</p>
      </div>
    </MDBFooter>
  );
};

export default Footer;
