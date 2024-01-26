import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../components/Account/Account";
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";

const accountData = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];

const Profile = () => {
  const [userdata, setUserData] = useState({});
  const navigate = useNavigate();

  const getUserData = async (tokenJWT) => {
    try {
      await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenJWT}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res_json) => {
          setUserData(res_json.body);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (
      !(
        sessionStorage.getItem("argentbank") ||
        localStorage.getItem("argentbank")
      )
    ) {
      navigate("/login");
    } else {
      sessionStorage.getItem("argentbank")
        ? getUserData(sessionStorage.getItem("argentbank"))
        : getUserData(localStorage.getItem("argentbank"));
    }
  }, [navigate]);
  return (
    <>
      <Header />
      <Main>
        <div className="containerMainProfile">
          <div className="header">
            <h2>
              Welcome back
              <br />
              {userdata.userName} !
            </h2>
            <button className="edit-button">Edit Name</button>
          </div>
          <h3 className="sr-only">Accounts</h3>
          {accountData?.map((account, index) => (
            <Account key={index} account={account} />
          ))}
        </div>
      </Main>
    </>
  );
};

export default Profile;
