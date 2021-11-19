import React from "react";
// reactstrap components
import { Navbar, Container } from "reactstrap";

const AdminNavbar = () => {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          {/*           <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={
                require("../../assets/img/brand/logo.png").default
              }
            />
          </NavbarBrand> */}
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
