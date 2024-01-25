import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  const [isJWT, setIsJWT] = useState(false);

  useEffect(() => {
    if (
      sessionStorage.getItem("argentbank") ||
      localStorage.getItem("argentbank")
    ) {
      setIsJWT(true);
    }
  }, [isJWT]);

  return (
    <div className="logo">
      <NavLink to={isJWT ? "/profile" : "/"}>
        <img
          width={199}
          height={54}
          className="main-nav-logo-image"
          src="/imgs/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
    </div>
  );
};

export default Logo;
