import React, { PureComponent } from 'react';

import {red, green} from './app.styl';

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */
export default class App extends PureComponent {
  componentWillMount() {
    console.log('componentWillMount');
    this.setState({
      hasWindow: (typeof window !== 'undefined')
    });
  }

  componentDidUpdate() {
    console.log('Why is componentDidUpdate not being called? It obviously did update.');
  }

  render() {
    return (
      <React.Fragment>
        {this.state.hasWindow && (
          <div key="0" className={red}>
            I am red.
          </div>
        )}
        <div key="1" className={green}>
          I am green.
        </div>
      </React.Fragment>
    );
  }
}

