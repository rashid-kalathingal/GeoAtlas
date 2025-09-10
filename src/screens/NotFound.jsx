import React from "react";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <a href="/" className="btn btn-primary px-4">
        Go Home
      </a>
    </div>
  );
};

export default NotFound;










