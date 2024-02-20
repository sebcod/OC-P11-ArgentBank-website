import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStoreUserName } from "../../store/user/userSlice";

/*
  Edit username form display
    Get user data from the store
    Display placeholder from user data
    Put new username with JWT
    Dispatch updateStoreUserName with new UserName
*/

const FormEditUserName = ({ setShowEditUserName }) => {
  FormEditUserName.propTypes = {
    setShowEditUserName: PropTypes.PropTypes.func.isRequired,
  };

  const userData = useSelector((store) => store.USER.userData);
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState(userData.userName);
  const [isUserNameUpdated, setIsUserNameUpdated] = useState(undefined);
  const handleChange = (e) => {
    e.preventDefault();
    setNewUserName(e.target.value);
  };

  const handleCancel = () => {
    setShowEditUserName(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tokenJWT =
      sessionStorage.getItem("argentbank") ||
      localStorage.getItem("argentbank");
    updateUserName(tokenJWT);
  };

  const updateUserName = async (tokenJWT) => {
    try {
      await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenJWT}`,
        },
        body: JSON.stringify({
          userName: newUserName,
        }),
      }).then((res) => {
        if (res.ok) {
          setIsUserNameUpdated(true);
          dispatch(updateStoreUserName(newUserName));
        } else if (!res.ok) {
          setIsUserNameUpdated(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formEditUserName">
      <h2>Edit user info</h2>
      <div className="msgUpdateUserName">
        {isUserNameUpdated === undefined && <p>&nbsp;</p>}
        {isUserNameUpdated === true && (
          <p data-testid="update-message" className="success">
            User name updated
          </p>
        )}
        {isUserNameUpdated === false && (
          <p className="error">User name not updated</p>
        )}
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <fieldset>
          <div className="inputUserNameContainer">
            <label htmlFor="userName">User name: </label>
            <input
              type="text"
              id="userName"
              placeholder={userData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="inputFirstNameContainer">
            <label htmlFor="firstName">First name: </label>
            <input
              className="readOny"
              type="text"
              id="firstName"
              placeholder={userData.firstName}
              readOnly
            />
          </div>
          <div className="inputLastNameContainer">
            <label htmlFor="lastName">Last name: </label>
            <input
              className="readOny"
              type="text"
              id="lastName"
              placeholder={userData.lastName}
              readOnly
            />
          </div>
          <div className="formLabelContainer"></div>
          <div className="formInputContainer"></div>
        </fieldset>
        <div className="formBtnContainer">
          <button type="submit" className="edit-button">
            Save
          </button>
          <button type="button" onClick={handleCancel} className="edit-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditUserName;
