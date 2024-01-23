import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
import Nav from "../../containers/Nav/Nav";

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !(
        sessionStorage.getItem("argentbank") ||
        localStorage.getItem("argentbank")
      )
    ) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <li>
            <NavLink to={"/"}>
              <img
                src="../src/svgs/user-circle-solid.svg"
                width={16}
                height={16}
              />
              <span>Logout</span>
            </NavLink>
          </li>
        </Nav>
      </Header>
      <Main>Profile</Main>
    </>
  );
};

export default Profile;
