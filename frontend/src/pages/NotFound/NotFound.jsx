import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
import Nav from "../../containers/Nav/Nav";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      sessionStorage.getItem("argentbank") ||
      localStorage.getItem("argentbank")
    ) {
      navigate("/profile");
    }
  }, [navigate]);
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <li>
            <NavLink to={"/login"}>
              <img
                src="../src/svgs/user-circle-solid.svg"
                width={16}
                height={16}
              />
              <span>Login</span>
            </NavLink>
          </li>
        </Nav>
      </Header>
      <Main>
        <div className="containerMainNotFound">
          <p>Page not found</p>
          <NavLink to={"/"}>
            <span>Go to Home</span>
          </NavLink>
        </div>
      </Main>
    </>
  );
};

export default NotFound;
