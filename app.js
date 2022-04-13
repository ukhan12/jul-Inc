const express = require('express')
const cors = require('cors')

const taskRouter = require('./Routes/taskRouter')
const projectRouter = require('./Routes/projectsRouter')

const app = express()
const PORT = 9000

app.use(express.json())
app.use(cors())
app.use(taskRouter)
app.use(projectRouter);

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
})