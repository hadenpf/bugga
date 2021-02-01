// production server
import 'dotenv/config';
import * as express from 'express';
import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import { App } from './App';

class SSRServer {
  server = express();

  port: number = parseInt(process.env.SERVER_PORT || '3000');
  listening: boolean = false;

  constructor() {}

  renderRoute(path: string): string {
    // todo: navigator stuff here ^_^

    return ReactDOM.renderToString(<App />);
  }

  listen() {
    return new Promise<void>((resolve, reject) => {
      const httpServer = this.server.listen(this.port);
      this.listening = httpServer.listening;

      if (this.listening) {
        resolve();
      } else {
        reject('Could not start listening');
      }
    });
  }
}
