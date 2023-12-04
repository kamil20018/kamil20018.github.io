const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

var models = require("./database")
models.sequelize.sync().then(function() {
}).catch(function(err) {
console.log(err)
});

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index")
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(port)