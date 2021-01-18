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

    app.put("/api/workouts/:id", ({body,params}, res) =>{
        Workout.findOneAndUpdate(
            params.id,
            {$push:{exercises: body}},
            {new: true, runValidators:true}
        )
        .then(data = res.json(data))
        .catch(err=>{
            res.json(err)
        })
    });

    app.post("/api/workouts/range", (req, res)=>{
        Workout.create({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });

}