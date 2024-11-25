import React from "react";
import image from "../pictures/table desk.jpg";
const imageAltText = "desktop with books and laptop";
const projectList = [
  {
    title: "LinkedIn Site",
    description:
      "LinkedIn is a professional networking platform where individuals and businesses connect, share industry updates, and explore career opportunities. It allows users to build personal brands, showcase skills, and network globally.",
    url: "https://www.linkedin.com/in/sai-koushik-1689aa339/",
  },
  {
    title: "GitHub",
    description:
      "GitHub is a platform for version control and collaborative coding, allowing developers to store, share, and manage code repositories. It supports open-source projects, team collaboration, and contributes to software development workflows.",
    url: "https://github.com/Saikoushik-18",
  },
  {
    title: "Upwork",
    description:
      "Upwork connects businesses with freelancers across various fields like web development, writing, and design. The platform facilitates project management, secure payments, and client-freelancer collaboration, empowering remote work and global talent access.",
    url: "https://www.upwork.com/freelancers/~01c54073476bbbacfe?viewMode=1",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center", fontWeight:"bold", fontFamily:"serif",fontSize:"36px", color:"white"}}>PORTFOLIO</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "1rem" }}>
        <div style={{ maxWidth: "0%", alignSelf: "center" }}>
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
