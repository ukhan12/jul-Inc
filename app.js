const express = require('express')
const taskRouter = require('./Routes/taskRouter')

const app = express()
const PORT = 9000

app.use(express.json())

app.use(taskRouter)

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
})