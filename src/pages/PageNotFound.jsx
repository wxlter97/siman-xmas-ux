import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  color: #343a40;
  font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: #A83338;  
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7A232E;
  }
`;

const PageNotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Página no encontrada</Subtitle>
      <Button as={Link} to="/siman-xmas-ux">Volver al inicio</Button>
    </Container>
  );
};

export default PageNotFound;
