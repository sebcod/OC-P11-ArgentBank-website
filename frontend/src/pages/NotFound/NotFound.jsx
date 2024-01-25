import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";

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
      <Header />
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
