import React from "react";
import {MDBContainer, MDBFooter } from "mdbreact";
import { Typography, Link }  from '@material-ui/core';

const Footer = () => {
  return (
    <MDBFooter className="">
      <div className="">
        <MDBContainer fluid>
        <Typography color="textSecondary" gutterBottom > &copy; {new Date().getFullYear()} Copyright:
          <Typography color="textSecondary" gutterBottom ><Link  target = "_blank" href="https://she.rusu.io/">Raluca-Maria Rusu</Link>  </Typography>
        </Typography>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer;