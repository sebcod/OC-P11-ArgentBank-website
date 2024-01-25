import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";

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
      <Header />
      <Main>
        <div className="containerMainProfile">
          <p>Profile</p>
        </div>
      </Main>
    </>
  );
};

export default Profile;
