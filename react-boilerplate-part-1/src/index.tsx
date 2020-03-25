import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const App = () => (
    <Container>
        <h1>React app</h1>
    </Container>
);
render(
    <App />,
    document.getElementById('app-root')
);
