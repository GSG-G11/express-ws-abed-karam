// handle client and server errors
const errorRouter = require('express').Router();
const path = require('path');

errorRouter.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
});

errorRouter.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
});

module.exports = errorRouter;
