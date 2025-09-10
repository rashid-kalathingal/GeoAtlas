import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useCountries } from "../../hooks/useCountries";

const PAGE_SIZE = 12;
export const CountryList = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const { data, isLoading, isError } = useCountries(activeTab);

  if (isLoading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );

  if (isError) return <Alert variant="danger">Error fetching countries</Alert>;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <Container className="my-4" style={{ maxWidth: "78.2%" }}>
      <Row>
        {data.slice(0, visibleCount).map((country) => (
          <Col key={country.name} md={6} className="mb-3">
            <Card
              className="h-100"
              style={{
                border: "1px solid #dee2e6",
                borderRadius: "8px",
                boxShadow: "none",
                backgroundColor: "#ffffff",
              }}
            >
              <Card.Body className="p-3">
                <Row className="align-items-center">
                  <Col xs={3} className="d-flex justify-content-center">
                    <div
                      style={{
                        width: "64px",
                        height: "48px",
                        border: "1px solid #dee2e6",
                        borderRadius: "4px",
                        backgroundColor: "#f8f9fa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Col>

                  <Col xs={9}>
                    <h5
                      className="mb-1"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#212529",
                        lineHeight: "1.3",
                      }}
                    >
                      {country.name}
                    </h5>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "0.875rem",
                        color: "#6c757d",
                        fontWeight: "400",
                      }}
                    >
                      {country.region}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleCount < data.length && (
        <div className="text-center mt-4">
          <Button
            onClick={handleLoadMore}
            style={{
              backgroundColor: "#212529",
              border: "none",
              borderRadius: "4px",
              padding: "8px 24px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Load more
          </Button>
        </div>
      )}
    </Container>
  );
};
