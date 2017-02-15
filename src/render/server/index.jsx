import Inferno from 'inferno';
import { renderToString } from 'inferno-server'
import { RouterContext, match } from 'inferno-router';
import express from 'express';
import routes from './routes';

function Html({ children }) {
  return (
    <html>
      <head>
        <title>ngage</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
  </html>
  );
}

const app = express();

app.use((req, res) => {
  const renderProps = match(routes, req.originalUrl);
  if (renderProps.redirect) {
    return res.redirect(renderProps.redirect)
  }
  
  const content = (<Html><RouterContext {...renderProps}/></Html>);

  res.send('<!DOCTYPE html>\n' + renderToString(content));
});