const express = require("express")
const choreRouter = express.Router()
const Chore = require("../models/chore.js")

choreRouter.get("/", (req, res, next) => {
    Chore.find((err, chores) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(chores)
    })
})
choreRouter.post("/", (req, res, next) => {
    const newChore = new Chore(req.body)
    newChore.save((err, savedChore) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedChore)
    })
})
module.exports = choreRouter