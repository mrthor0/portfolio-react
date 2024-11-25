import React from "react";
import PropTypes from 'prop-types';
import image from "../pictures/background.jpg";

const imageAltText = "purple and blue abstract background";
const description =
  "I'm a Web Developer studying at T.R.R.College of Technology, eager to create innovative solutions and excited to start my development career.";
const skillsList = [
  "Web Development",
  "Front-End Developer",
  "Back-End Developer",
];
const detailOrQuote =
  "I'm driven to innovate through creative problem-solving, leveraging my skills to make technology accessible to everyone.";

const About = ({ aboutRef }) => {
  return (
    <section className="padding1" id="about" ref={aboutRef}>
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          fontWeight: "bold",
          backgroundColor: "black",
          opacity: 0.87,
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          fontFamily: "times new roman",
          color: "white",
        }}
      >
        <h2>About myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontFamily: "sans serif",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            fontWeight: "bolder",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

About.propTypes = {
  aboutRef: PropTypes.object.isRequired,
};

export default About;
