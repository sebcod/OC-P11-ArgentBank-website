import PropTypes from "prop-types";

/*
  Display account information
*/

const Account = ({ account }) => {
  Account.propTypes = {
    account: PropTypes.object,
  };
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h4 className="account-title">{account.title}</h4>
        <p className="account-amount">{account.amount}</p>
        <p className="account-amount-description">{account.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
