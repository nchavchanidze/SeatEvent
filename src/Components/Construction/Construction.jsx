import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Heading from "../Heading";
const Construction = (props) => {
  return (
    <NotFound>
          <Heading title={props.title} />
      <Container>
        <NotFoundWrapper>
          <SecondHeading>Page is under construction!</SecondHeading>
          <NotFoundText>
            The page you are looking is under construction. Try
            going to Home Page by using the button below.
          </NotFoundText>
          <Button to="/">Go to Home Page</Button>
        </NotFoundWrapper>
      </Container>
    </NotFound>
  );
};

const NotFound = styled.section`
  /* padding: 200px 0 100px; */
`;

const NotFoundWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

// const Heading = styled.h1`
//   font-family: "Titillium Web", sans-serif;
//   font-size: 192px;
//   font-weight: 700;
//   color: #bd1b21;
//   @media only screen and (max-width: 991.98px) {
//     font-size: 178px;
//   }
// `;

const SecondHeading = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-size: 35px;
  font-weight: 700;
  color: #000;
  @media only screen and (max-width: 991.98px) {
    text-align: center;
  }
`;

const NotFoundText = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717488;
  @media only screen and (max-width: 991.98px) {
    text-align: center;
  }
`;

const Button = styled(Link)`
  background-color: #bd1b21;
  font-family: "Titillium Web", sans-serif;
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
    border: 2px solid #bd1b21;
    background-color: #fff;
    color: #bd1b21;
    transition: all 0.3s ease-out;
  }
`;
export default Construction;
