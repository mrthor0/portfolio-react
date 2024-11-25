import React from "react";
import PropTypes from 'prop-types';
import arrowSvg from "../pictures/down-arrow.svg";  
import image from "../pictures/portfolio.jpg";

const imageAltText = "Men at office showing his profession";

const Home = ({ name, title, aboutRef }) => {
  const handleArrowClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
      });
    }
  };

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div
        style={{ position: "absolute", bottom: "3rem", left: "50%", cursor: "pointer" }}
        onClick={handleArrowClick}
      >
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Down Arrow" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  aboutRef: PropTypes.object.isRequired, 
};

export default Home;
