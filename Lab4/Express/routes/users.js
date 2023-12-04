const express = require('express')
const router = express.Router()

var models = require("../database")
models.sequelize.sync().then(function() {
console.log('connected to database')
}).catch(function(err) {
console.log(err)
});


router
    .route("/:id")
    .get((req, res) => {
        const requestedId = req.params.id
        models.PersonSchema.findOne({ where: {id: requestedId}}).then((user) => {console.log(user)})
    })
    .post((req, res) => {
        const body = req.body
        models.PersonSchema.create({'name': body["name"],
        'surname':body["surname"], 'job':body["job"]})
    })


module.exports = router