import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Error404 = () => {
  return (
    <NotFound>
      <Container>
        <NotFoundWrapper>
          <Heading>404</Heading>
          <SecondHeading>Oops! That page can’t be found.</SecondHeading>
          <NotFoundText>
            The page you are looking is not available or has been removed. Try
            going to Home Page by using the button below.
          </NotFoundText>
          <Button to="/">Go to Home</Button>
        </NotFoundWrapper>
      </Container>
    </NotFound>
  );
};

const NotFound = styled.section`
  padding: 100px 0;
`;

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Heading = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 192px;
  font-weight: 700;
  color: #486ff8;
  @media only screen and (max-width: 991.98px) {
    font-size: 178px;
  }
`;

const SecondHeading = styled.h2`
  font-family: "Urbanist", sans-serif;
  font-size: 35px;
  font-weight: 700;
  color: #39364f;
  @media only screen and (max-width: 991.98px) {
    text-align: center;
  }
`;

const NotFoundText = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717488;
  @media only screen and (max-width: 991.98px) {
    text-align: center;
  }
`;

const Button = styled(Link)`
  background-color: #486ff8;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  margin-top: 50px;
  &:hover {
    border: 2px solid #486FF8;
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;

export default Error404;
