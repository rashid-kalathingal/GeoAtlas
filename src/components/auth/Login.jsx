import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username or email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "At least one uppercase letter required")
      .matches(/[0-9]/, "At least one number required")
      .matches(/[!@#$%^&*]/, "At least one symbol required")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    navigate("/home");
    setSubmitting(false);
  };

  return (
    <div className="w-100" style={{ maxWidth: "300px" }}>
      <h2
        className="fw-bold mb-3"
        style={{
          fontSize: "1.8rem",
          letterSpacing: "0.4px",
        }}
      >
        Sign In
      </h2>
      <div className="mb-4" style={{ fontSize: "0.75rem" }}>
        New user?{" "}
        <a href="#" style={{ color: "#3572F1", textDecoration: "none" }}>
          Create an account
        </a>
      </div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <Field
                className="form-control"
                type="text"
                name="username"
                placeholder="Username or email"
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  fontSize: "0.8125rem",
                }}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-danger small mt-1"
              />
            </div>
            <div className="mb-3">
              <Field
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  fontSize: "0.8125rem",
                }}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger small mt-1"
              />
            </div>
            <div className="mb-3 form-check">
              <Field
                className="form-check-input"
                type="checkbox"
                name="keepSignedIn"
                id="signinCheck"
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                }}
              />
              <label
                className="form-check-label"
                htmlFor="signinCheck"
                style={{ fontSize: "0.75rem", userSelect: "none" }}
              >
                Keep me signed in
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-dark w-100 mb-3"
              style={{
                fontWeight: 700,
                letterSpacing: "0.4px",
                fontSize: "0.9rem",
                border: "none",
                borderRadius: 0,
                boxShadow: "none",
              }}
              disabled={isSubmitting}
            >
              Sign In
            </button>
            <div className="d-flex align-items-center mb-3">
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: "#ddd",
                }}
              />
              <div
                className="px-2 small text-muted"
                style={{ whiteSpace: "nowrap", fontSize: "0.6875rem" }}
              >
                Or Sign In With
              </div>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: "#ddd",
                }}
              />
            </div>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              {["google", "facebook", "linkedin", "twitter"].map((network) => (
                <span
                  key={network}
                  className="border rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "2.1875rem",
                    height: "2.1875rem",
                    borderWidth: 2,
                    fontSize: "1.125rem",
                    color: "#333",
                  }}
                >
                  <i className={`bi bi-${network}`} />
                </span>
              ))}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
