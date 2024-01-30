import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [setUserEmail, setUserEmailsetUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [remenberMe, setRememberMe] = useState(false);
  const [showError, setShowError] = useState(false);

  const onchangeName = (e) => {
    setUserEmailsetUserEmail(e.target.value);
  };
  const onchangePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const onchangeRememberMe = () => {
    setRememberMe(!remenberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: setUserEmail,
          password: userPassword,
        }),
      })
        .then((res) => res.json())
        .then((res_json) => {
          if (res_json.body.token) {
            // stockage du token JWT dans localStorage si rememberMe true, ou sessionStorage si false.
            remenberMe === false
              ? sessionStorage.setItem("argentbank", res_json.body.token)
              : localStorage.setItem("argentbank", res_json.body.token);
            // redirection sur la page user
            navigate("/profile");
          } else {
            // si pas de token, affichage d'un message d'erreur
            setShowError(true);
          }
        });
    } catch {
      // si erreur, affichage d'un message d'erreur
      setShowError(true);
    }
  };

  useEffect(() => {
    if (
      sessionStorage.getItem("argentbank") ||
      localStorage.getItem("argentbank")
    ) {
      navigate("/profile");
    }
  }, [navigate]);

  return (
    <div className="containerMainSignIn">
      <section className="sign-in-content">
        <img src="../src/svgs/user-circle-solid.svg" width={16} height={16} />
        <h2>Log In</h2>
        {showError && (
          <p className="errorLogin">
            Either your email or password is incorrect.
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={onchangeName}
              type="email"
              id="email"
              // autoComplete="off"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input onChange={onchangePassword} type="password" id="password" />
          </div>
          <div className="input-remember">
            <input
              onChange={onchangeRememberMe}
              type="checkbox"
              id="remember-me"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input className="sign-in-button" type="submit" value="Log In" />
        </form>
      </section>
    </div>
  );
};

export default Login;
