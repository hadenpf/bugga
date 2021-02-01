import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { App } from './App';

const appRoot = document.getElementById('app-root');

if (!appRoot) {
  console.error('Could not mount app: root element does not exist');
} else if (appRoot.hasChildNodes()) {
  console.info('SSR: Hydrating app');
  // server pre-rendered, hydrate event listeners
  hydrate(<App />, appRoot);
} else {
  console.info('CSR: Rendering app');
  // fully client-rendered
  render(<App />, appRoot);
}
