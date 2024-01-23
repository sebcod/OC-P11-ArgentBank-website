import Logo from "../../components/Logo/Logo";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
import Nav from "../../containers/Nav/Nav";

const Home = () => {
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <li>
            <a href="#">
              <img
                src="../src/svgs/user-circle-solid.svg"
                width={16}
                height={16}
              />
              <span>Sign In</span>
            </a>
          </li>
        </Nav>
      </Header>
      <Main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <div className="feature-item">
            <div className="feature-icon">
              <img
                src="../src/imgs/icon-chat_100_100.webp"
                alt="Chat Icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <img
                src="../src/imgs/icon-money_100_100.webp"
                alt="Chat Icon"
                width={100}
                height={100}
              />
            </div>

            <h3 className="feature-item-title">
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <img
                src="../src/imgs/icon-security_100_100.webp"
                alt="Chat Icon"
                width={100}
                height={100}
              />
            </div>

            <h3 className="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
