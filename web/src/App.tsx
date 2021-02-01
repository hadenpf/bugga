import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/index';
import { NotFound } from './pages/_404';
import { theme } from './utils/theme';

const AppContainer: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <React.Fragment // funky comment block because I'm lazy LOL
          // todo: create issue view component (for below)
          />
          <Route path="/issues/:id" exact component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export const App = hot(module)(AppContainer);

const GlobalStyle = createGlobalStyle`
:root, body {
	margin: 0 20px;
	font-family: sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}

span, p, a {
  img, svg {
    vertical-align: middle;
  }
}

a[href] {
  color: ${({ theme }) => theme.link};
  text-decoration: none;

  &:hover, &:active {
    text-decoration: underline;
  }

  &:active {
    position: relative;
    bottom: -1px;
  }
}
`;
