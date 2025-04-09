import React from 'react';
import { Jumbotron } from './migration';
import { Container, Row, Col } from "react-bootstrap";

const ImageGallery = ({ images }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">Image Gallery</h2>
          <Row className="justify-content-center">
            {images.map((image, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={4}
                className={images.length % 3 === 1 && index === images.length - 1 ? "mx-auto text-center" : ""}
              >
                <img
                  src={image.src}
                  alt={image.alt || "Gallery Image"}
                  className="img-fluid rounded shadow-sm"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Col>
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default ImageGallery;

