const express = require('express');
const taskRouter = require('./Routes/taskRouter')

// Application
const app = express();

// Middleware
app.use(express.json())
app.use(taskRouter)

const PORT = 8003;

app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`)
})