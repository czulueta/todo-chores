const express = require("express")
const choreRouter = express.Router()
const Chore = require("../models/chore.js")
// get all
choreRouter.get("/", (req, res, next) => {
    Chore.find((err, chores) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(chores)
    })
})
// post new chores
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
// delete chores
choreRouter.delete("/choreId", (req, res, next) => {
    Chore.findOneAndDelete( {_id: req.params.choreId}, (err, deletedChore) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedChore.choreName} from the list of chores`)
    })
})
//updated chore
choreRouter.put("/choreId", (req, res, next) => {
    Chore.findOneAndUpdate(
        { _id: req.params.choreId },
        req.body,
        { new: true },
        (err, updatedChore) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedChore)
        }
    )
})
module.exports = choreRouter