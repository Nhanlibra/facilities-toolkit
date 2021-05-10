import {ErrorMessage, Field, Formik, Form} from 'formik';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Form as RBForm} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

const Login = () => {
  const {login, user} = useAuth();

  console.log(user);
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Container fluid>
      <Row>
        <Col md={5} className="vh-100 login-cover" />
        <Col md={7}
          className="vh-100 d-flex justify-content-center align-items-center"
        >
          <div className="w-50">
            <h2>Welcome Back!</h2>
            <Formik
              initialValues={{email: '', password: ''}}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, {setSubmitting}) => {
                login(values);
                setSubmitting(false);
              }}>
              {({isSubmitting}) => (
                <Form component={RBForm}>
                  <RBForm.Group>
                    <RBForm.Label>Email address</RBForm.Label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                    />
                    <ErrorMessage name="email" component="div" />
                  </RBForm.Group>
                  <RBForm.Group>
                    <RBForm.Label>Password</RBForm.Label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                    />
                  </RBForm.Group>
                  <button className="btn btn-primary"
                    name="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
