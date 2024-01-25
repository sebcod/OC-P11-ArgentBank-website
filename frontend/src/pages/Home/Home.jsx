import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";

const Home = () => {
  const navigate = useNavigate();

  const featureItems = [
    {
      img: "../src/imgs/icon-chat_100_100.webp",
      alt: "Chat Icon",
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      img: "../src/imgs/icon-money_100_100.webp",
      alt: "Rates Icon",
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      img: "../src/imgs/icon-security_100_100.webp",
      alt: "Security Icon",
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  useEffect(() => {
    if (
      sessionStorage.getItem("argentbank") ||
      localStorage.getItem("argentbank")
    ) {
      navigate("/profile");
    }
  }, [navigate]);
  return (
    <>
      <Header />
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
          {featureItems?.map((item, index) => (
            <FeatureItem key={index} item={item} />
          ))}
        </section>
      </Main>
    </>
  );
};

export default Home;
