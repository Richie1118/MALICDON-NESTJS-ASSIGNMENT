const express = require('express');
const app = express();
const apiRoutes = require('./route/ass2route');  // Changed primeRoutes to apiRoutes

app.use('/assignments', apiRoutes);  // Updated here as well

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

