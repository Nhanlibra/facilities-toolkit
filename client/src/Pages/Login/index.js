import {ErrorMessage, Field, Form, Formik} from 'formik';
import React from 'react';
import {Redirect} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

const Login = () => {
  const {login, user} = useAuth();

  console.log(user);
  if (user) {
    return <Redirect to="/calls" />;
  }

  return (
    <>
      <h1>Login page</h1>
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
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <button name="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
