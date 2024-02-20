import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { disconnectUser } from "../../store/user/userSlice";

/*
  Display navbar
    Get userStatus and userData from store
      connected && display: username and logout
      !connected && display: login link
*/

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((store) => store.USER.userStatus);
  const userData = useSelector((store) => store.USER.userData);

  const handleDisconnect = () => {
    sessionStorage.getItem("argentbank")
      ? (sessionStorage.removeItem("argentbank"), navigate("/"))
      : localStorage.removeItem("argentbank");
    dispatch(disconnectUser());
    navigate("/");
  };

  return (
    <nav>
      <ul>
        {!userStatus.connected && (
          <li className="link">
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
        {userStatus.connected && (
          <>
            <li>
              <img
                src="../src/svgs/user-circle-solid.svg"
                width={16}
                height={16}
              />
              <span>{userData.userName}</span>
            </li>
            <li className="link">
              <img src="../src/svgs/logout.svg" width={16} height={16} />
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
