import { Container, Row, Col } from "react-bootstrap";
import { Login } from "../components/auth/Login";
import imgMain from "../assets/images/imgMain.png";

export const LandingScreen = () => (
  <Container
    fluid
    className="vh-100 d-flex align-items-center justify-content-center"
  >
    <Row className="w-100">
      <Col md={6} className="d-flex align-items-center justify-content-center">
        <Login />
      </Col>
      <Col
        md={6}
        className="d-none d-md-flex align-items-center justify-content-center"
      >
        <img
          src={imgMain}
          alt="Main Image"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Col>
    </Row>
  </Container>
);
