import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { mobile } from "../responsive";
import Home from "./Home";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: lightblue;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ALink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
 
  function handleClick(event) {
    event.preventDefault();
     navigate("/product/display");
    // axios
    //   .post("http://localhost:3000/api/auth/login", { username })
    //   .then((res) => {
    //     if (res.status === 200) {
    //      navigate("/product/display");
    //     } else {
    //       seterror(true);
    //     }
    //   });
  }

  return (
    <Container>
      <Wrapper>
        <Title>ADMIN SIGN IN</Title>
        <Form>
          <Input
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={(e) => handleClick(e)}>LOGIN </Button>
          {error && <p>Error</p>}

          {/* <ALink>DO NOT YOU REMEMBER THE PASSWORD?</ALink>
          <ALink>CREATE A NEW ACCOUNT</ALink> */}
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
