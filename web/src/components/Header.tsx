import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BuggaColorLogo } from '../images';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
  const {} = props;

  return (
    <HeaderWrapper>
      <Link to="/">
        <BuggaColorLogo />
      </Link>
      <button>Hi</button>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 20px 0;
`;
