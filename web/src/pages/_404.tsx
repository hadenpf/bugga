import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export const NotFound: React.FC = (props) => {
  return (
    <>
      <Header />
      <h1>Not found</h1>
      <p>
        Please try visiting the <Link to="/">home page</Link>.
      </p>
    </>
  );
};
