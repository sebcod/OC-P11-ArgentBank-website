import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  const handleDisconnect = () => {
    sessionStorage.getItem("argentbank")
      ? (sessionStorage.removeItem("argentbank"), navigate("/"))
      : (localStorage.removeItem("argentbank"), navigate("/"));
  };

  useEffect(() => {
    sessionStorage.getItem("argentbank") || localStorage.getItem("argentbank")
      ? setIsConnected(true)
      : setIsConnected(false);
  }, []);

  return (
    <nav>
      <ul>
        {!isConnected && (
          <li className="LoginLink">
            <NavLink to={"/login"}>
              <img
                src="../src/svgs/user-circle-solid.svg"
                width={16}
                height={16}
              />
              <span>Login</span>
            </NavLink>
          </li>
        )}
        {isConnected && (
          <>
            <li>
              <img
                src="../src/svgs/user-circle-solid.svg"
                width={16}
                height={16}
              />
            </li>
            <li>
              <span className="LogoutLink" onClick={handleDisconnect}>
                Logout
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
