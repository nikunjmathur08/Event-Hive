// src/components/SignInSignUp.js
import React, { useState } from 'react';
import styled from 'styled-components';
import signInImage from '../assets/sign_in.png';
import signUpImage from '../assets/sign_up.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 30px;
  background-color: rgba(255,255,255,0.3);
  color: white;
  width: 150px;
  height: 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
`;

const Heading = styled.h1`
  font-size: 50px;
  font-family: Inter;
`;

const Para = styled.p`
  font-size: 21px;
  font-family: Inter;
`;

const Para1 = styled.p`
  font-size: 20px;
  margin-top: 8px;
  font-family: Inter;
`;

const Panel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ImagePanel = styled.div`
  flex: 1;
  background: url(${signInImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const ImagePanel1 = styled.div`
  flex: 1;
  background: url(${signUpImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Container>
      {isSignIn ? (
        <>
          <Panel>
            <SignIn />
          </Panel>
          <ImagePanel>
            <div>
              <Heading>'sup friend</Heading>
              <Para>to keep connected with us provide us with your information</Para>
              <Button onClick={() => setIsSignIn(false)} id="toggleToSignUpButton"><Para1>sign up</Para1></Button>
            </div>
          </ImagePanel>
        </>
      ) : (
        <>
          <ImagePanel1>
            <div>
              <Heading>welcome back</Heading>
              <Para>to keep connected with us provide us with your information</Para>
              <Button onClick={() => setIsSignIn(true)} id="toggleToSignInButton"><Para1>sign in </Para1></Button>
            </div>
          </ImagePanel1>
          <Panel>
            <SignUp />
          </Panel>
        </>
      )}
    </Container>
  );
};

export default SignInSignUp;