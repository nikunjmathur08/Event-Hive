import React from 'react';
import styled from 'styled-components';
import googleLogo from '../assets/Logo.png';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const FormContainer = styled.div`
  width: 80%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 60px;
  font-family: Inter;
  display: flex;
  justify-content: center;
  color: #7848F4;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Heading = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 20px;
  color: #000000;
  font-family: Inter;
  margin-bottom: 40px;
`;

const Span = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  color: #7848F4;
  font-family: Inter;
`;

const Span1 = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  color: #000000;
  font-family: Inter;
`;

const Input = styled.input`
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Inter;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #7848F4;
  color: white;
  width: 220px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 15px;
  font-family: Inter;
`;

const GoogleButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: white;
  width: 400px;
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
`;

const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Para = styled.p`
  color: #7E7E7E;
  font-size: 15px;
  font-family: Inter;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SignIn = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            'Authorization': `Bearer ${response.access_token}`,
          },
        });
        console.log(res.data);
        // Handle successful login here (e.g., save user data, navigate to another page, etc.)
      } catch (err) {
        console.error(err);
      }
    },
    onFailure: (error) => {
      console.error('Login failed:', error);
    },
  });
  return (
    <FormContainer>
      <Heading><Span1>evin </Span1><Span> co</Span></Heading>
      <Title>sign in to evinco</Title>
      <Form id="signInForm">
        <Input type="email" placeholder="enter your email" id ="signInEmail"/>
        <Input type="password" placeholder="enter your password" id="signInPassword"/>
        <center><Button>sign in</Button></center>
      </Form>
      <Para>or</Para>
      <center>
        <GoogleButton id="signInGoogleButton" onClick={() => login()}>
            <GoogleIcon src={googleLogo} />
            sign in with google
        </GoogleButton>
      </center>
    </FormContainer>
  );
};

export default SignIn;
