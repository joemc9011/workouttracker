const Workout = require("../models/workout")

module.exports = (app) => {
    // find all exercises
    app.get("/api/workouts", (req, res) => {
        Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });
// creating workout
    app.post("/api/workouts", (res, req)=>{
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
    });


    app.get("/api/workouts/range", (req, res)=>{
        Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });



  

}