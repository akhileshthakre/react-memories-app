const express = require('express')
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const postRoutes = require('./routes/posts')

const app = express()


//app.use(bodyParser.json({limit: "30mb", extended: true}))
//app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(express.json({limit: '50mb'}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://akhilesh:akhilesh@rest.sa0z1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use('/posts',postRoutes)

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
  .catch((err) => console.log('Error',err.message) )