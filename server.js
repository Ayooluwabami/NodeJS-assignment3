// server.js
const express = require('express');
const app = express();
const authMiddleware = require('./authMiddleware');
const apiRouter = require('./routes/api'); 

app.use(authMiddleware);
app.use(express.json());

// Routes
app.use('/api', apiRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
