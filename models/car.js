const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    basic_specs: {
        type: [{
            mileage: {
                type: String,
                required: true
            },
            engine: {
                type: String,
                required: true
            },
            drive_train: {
                type: String,
                required: true
            },
            style_name: {
                type: String,
                required: true
            },
            body_style: {
                type: String,
                required: true
            },
            brake_type: {
                type: String,
                required: true
            },
            air_bags: {
                type: String,
                required: true
            },
            night_vision: {
                type: String,
                required: true
            },
            passanger_capacity: {
                type: Number,
                required: true
            },
            abs_brake: {
                type: String,
                required: true
            },
            backup_cam: {
                type: String,
                required: true
            },
            stereo_sound: {
                type: String,
                required: true
            },
            traction_control: {
                type: String,
                required: true
            },
            parking_assistant: {
                type: String,
                required: true
            },
            mp3_player: {
                type: String,
                required: true
            }
        }],
        required: true
    }
})
module.exports = mongoose.model('Car', carSchema)
