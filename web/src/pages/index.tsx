import * as React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

export const Home: React.FC = (props) => {
  return (
    <>
      <Header />
      <Editable contentEditable="true">This is editable text!</Editable>
    </>
  );
};

const Editable = styled.p`
  box-sizing: content-box;

  padding: 0 6px;
  margin-left: -6px;
  margin-right: -6px;
  border-radius: 2px;

  &:hover {
    background-color: ${(props) =>
      props.theme.box}; // todo: use lighter color for hover
  }

  &:focus {
    background-color: ${(props) => props.theme.box};
  }
`;
