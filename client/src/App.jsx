import React, { useRef } from "react";
import About from "./components/Aboutus";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import "./styles.css";

const siteProps = {
  name: "SAI KOUSHIK",
  title: "WEB DEVELOPER",
  email: "saikoushik2616@gmail.com",
  gitHub: "saikoushik-18",
  instagram: "",
  linkedIn: "sai-koushik-1689aa339",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const aboutRef = useRef(null); 

  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} aboutRef={aboutRef} />
      {}
      <About aboutRef={aboutRef} />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
