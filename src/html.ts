import { HelmetData } from 'react-helmet';

export default (reactDom: string, helmet: HelmetData) => `
  <!doctype html>
  <html>
  <head>
    ${helmet.title.toString()} 
    ${helmet.meta.toString()} 
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="content">
      ${reactDom}
    </div>
  </body>
  </html>`;
