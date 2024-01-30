import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
    <div className="containerMainNotFound">
      <p>Page not found</p>
      <NavLink to={"/"}>
        <span>Go to Home</span>
      </NavLink>
    </div>
  );
};

export default NotFound;
