const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../routes/user-router');

const app = express();

app.use(bodyParser.json());
app.use('/api',userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log ('listening on port 5500');
});
