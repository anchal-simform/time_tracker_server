const express = require('express');
const cors = require('cors');

const app = express();
const allRoutes = require('./src/routes/index');
const { startConnection } = require('./src/db/connection');
const { PORT } = require('./src/constants');

startConnection();

app.use(express.json({ limit: '50mb' }));

app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);

app.use(cors());

app.use('/', allRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(new Error('Route not found'));
});

app.use(async (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: err?.message, stack: err.stack, error: err });
});

app.listen(PORT, () => {
  console.log('Running on server ' + PORT);
});
