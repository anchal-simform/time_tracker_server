const express = require('express');
const cors = require('cors');

const app = express();
const allRoutes = require('./src/routes/index');
const { startConnection } = require('./src/db/connection');
const { PORT } = require('./src/constants');

app.use(express.json({ limit: '50mb' }));

app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);

app.use(cors());

app.use('/', allRoutes);

startConnection();

app.listen(PORT, () => {
  console.log('Running on server ' + PORT);
});
