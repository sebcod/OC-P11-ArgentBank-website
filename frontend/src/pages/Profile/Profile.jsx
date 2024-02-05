import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Account from "../../components/Account/Account";
import FormEditUserName from "../../components/FormEditUserName/FormEditUserName";
import { updateUserData } from "../../store/user/userSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.USER.userData);
  const [showEditUserName, setShowEditUserName] = useState(false);

  const handleEditUserName = () => {
    setShowEditUserName(true);
  };

  useEffect(() => {
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
            dispatch(updateUserData(res_json.body));
          });
      } catch (error) {
        console.log(error);
      }
    };

    if (
      !(
        sessionStorage.getItem("argentbank") ||
        localStorage.getItem("argentbank")
      )
    ) {
      navigate("/");
    } else {
      sessionStorage.getItem("argentbank")
        ? getUserData(sessionStorage.getItem("argentbank"))
        : getUserData(localStorage.getItem("argentbank"));
    }
  }, [navigate, dispatch]);

  return (
    <div className="containerMainProfile">
      <div className="header">
        {!showEditUserName && (
          <>
            <h2>
              Welcome back
              <br />
              {userData.userName} !
            </h2>
            <button onClick={handleEditUserName} className="edit-button">
              Edit Name
            </button>
          </>
        )}
        {showEditUserName && (
          <FormEditUserName setShowEditUserName={setShowEditUserName} />
        )}
      </div>
      <h3 className="sr-only">Accounts</h3>
      {accountData?.map((account, index) => (
        <Account key={index} account={account} />
      ))}
    </div>
  );
};

export default Profile;
