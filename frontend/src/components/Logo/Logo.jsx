import { NavLink } from "react-router-dom";

const Logo = () => (
  <div className="logo">
    <NavLink to={"/"}>
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

export default Logo;
