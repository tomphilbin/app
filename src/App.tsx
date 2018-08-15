import * as React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tom Philbin</title>
    </Helmet>
    <h1>Hello World</h1>
  </div>
);
