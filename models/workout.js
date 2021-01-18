const mongoose = require ("mongoose");

// name, type, weight, sets, reps, and duration of exercise
const Schema = mongoose.Schema;

const Workouts = new Schema ({

    day: {
        type: Date,
        date: new Date()
    },
    exercise: [
        {
            name: {
                type: String,
                trim: true,
                required: "Please enter exercise name"
            },
            type: {
                type: String,
                trim: true,
                required: "Please enter exercise type"
            },
            duration: {
                type: Number,
                required: "Please enter time length of exercise"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            set: {
                type: Number
            }
        }
    ]
});


const workouts = mongoose.model("Workouts", Workouts);

module.exports = workouts;