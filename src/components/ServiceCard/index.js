import PropTypes from "prop-types";

import "./style.scss";

const ServiceCard = ({ imageSrc, imageAlt, children }) => (
    <div className="ServiceCard">
      <div className="ServiceCard__imageContainer">
        <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="ServiceCard__textContainer">{children}</div>
    </div>
  );

ServiceCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string, 
  children: PropTypes.node,  
};

ServiceCard.defaultProps = {
  imageAlt: "", 
  imageSrc: "",  
  children: null,
}

export default ServiceCard;
