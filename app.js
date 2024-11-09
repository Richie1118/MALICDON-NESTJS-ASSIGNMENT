const expressFramework = require('express'); 
const serverApp = expressFramework(); 
const assignmentRoutes = require('./routes/ass3route'); 

serverApp.use('/assignments', assignmentRoutes); 

const SERVER_PORT = process.env.PORT || 4000; 
serverApp.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`)); 
