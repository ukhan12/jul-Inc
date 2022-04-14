const express = require('express');
const cors = require('cors');

const taskRouter = require('./Routes/taskRouter');
const projectRouter = require('./Routes/projectsRouter');
const userRouter = require('./Routes/userRouter');


const app = express();
const PORT = 9000

app.use(express.json());
app.use(cors());
app.use(taskRouter);;
app.use(projectRouter);;
app.use(userRouter);;


app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
});