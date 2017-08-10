const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.prod.conf')

var config = require('../config')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.server.env.NODE_ENV)
}

const isDeveloping = process.env.NODE_ENV;
const port = process.env.PORT || config.server.port
const app = express();

if (isDeveloping) {
  const compiler = webpack(webpackConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

var uri = 'http://localhost:' + port

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('> Listening at ' + uri + '\n')
  }
  // if (process.env.NODE_ENV !== 'server') {
  //   opn(uri)
  // }
})

