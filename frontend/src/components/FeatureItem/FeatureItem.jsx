import PropTypes from "prop-types";

const FeatureItem = ({ item }) => {
  FeatureItem.propTypes = {
    item: PropTypes.object,
  };
  return (
    <div className="feature-item">
      <div className="feature-icon">
        <img src={item.img} alt={item.alt} width={100} height={100} />
      </div>
      <h3 className="feature-item-title">{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default FeatureItem;
