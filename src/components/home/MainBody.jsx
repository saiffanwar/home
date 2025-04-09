import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons, resume}, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
        {(resume && <a
            className="btn btn-outline-light btn-lg "
            href={resume}
            role="button"
            aria-label="Download my CV"
            style={{ marginRight: "10px" }}
          >
          CV
          </a> )}
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        <div className="mt-4">
          <a
            href="mailto:anwarsaif99@hotmail.com"
            className="text-light mx-3"
            aria-label="Email me"
          >
            <i className="fas fa-envelope fa-2x" />
          </a>
          <a
            href="tel:+447450821125"
            className="text-light mx-3"
            aria-label="Call me"
          >
            <i className="fas fa-phone fa-2x" />
          </a>
        </div>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
