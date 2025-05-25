const jsdoc  = require('swagger-jsdoc');
const ui     = require('swagger-ui-express');
const spec   = jsdoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'Books API', version: '1.0.0' },
    servers: [{ url: 'https://<your-render-url>' }]
  },
  apis: ['./routes/*.js']
});
module.exports = app => {
  app.use('/api-docs', ui.serve, ui.setup(spec));
};
