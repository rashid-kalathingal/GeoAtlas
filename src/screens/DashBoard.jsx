import React from "react";
import { CarouselScreen } from "../components/home/CarouselScreen";
import { NavBar } from "../components/layout/NavBar";
import { CountryList } from "../components/home/CountryList";
import { WelcomeCaption } from "../components/home/WelcomeCaption";
import { Footer } from "../components/layout/Footer";
import { Container } from "react-bootstrap";

export const DashBoard = () => {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <WelcomeCaption />
      <CarouselScreen />
      <CountryList />
      <Footer />
    </Container>
  );
};
