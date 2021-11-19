import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { logout } from "../../service/auth";
import api from "../../service/api";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

const AdminNavbar = (props) => {
  const history = useHistory();

  const [nome, setNome] = useState("");
  const [profileId, setProfileId] = useState("");

  async function handleLogout() {
    await logout();

    history.push("/login");
  }

  async function indexProfile() {
    const response = await api.get("/perfils");
    const data = response.data.perfil;
    const { email, username } = response.data.user;

    const { id } = response.data.perfil;

    setProfileId(id);

    try {
      setNome(data.nome);
    } catch (error) {
      alert("Perfil ainda não criado");
    }
  }

  useEffect(() => {
    indexProfile();
  }, []);

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/theme/william.jpg").default
                      }
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {nome}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Bem Vindo!</h6>
                </DropdownItem>
                <DropdownItem to="/profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>Meu Perfil</span>
                </DropdownItem>
                {/*                 <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem> */}
                {/*                 <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem> */}
                <DropdownItem divider />
                <DropdownItem href="/" onClick={handleLogout}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
