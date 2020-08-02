import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Box from 'shared/Box';
import LoginForm from 'session/LoginForm';

const LoginBox = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  left: 50%;
  top: 17%;
  transform: translate(-50%, 17%);
  width: 340px;

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    width: 380px;
  }
`;

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const Login = (props) => {
  if (props.currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <LoginBox>
      <LoginForm />
      <div>
        Don't have an account? <Link to={'/signup'}>Sign up</Link>
      </div>
    </LoginBox>
  );
};

export default connect(mapStateToProps)(Login);
