const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({
    company: {
        type: String,
        required: false
    },
    model: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    images:{
        type: Array,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    mileage: {
        type: Number,
        required: false
    },
    engine: {
        type: String,
        required: false
    },
    drive_train: {
        type: String,
        required: false
    },
    style_name: {
        type: String,
        required: false
    },
    body_style: {
        type: String,
        required: false
    },
    brake_type: {
        type: String,
        required: false
    },
    air_bags: {
        type: String,
        required: false
    },
    night_vision: {
        type: String,
        required: false
    },
    passanger_capacity: {
        type: Number,
        required: false
    },
    abs_brake: {
        type: String,
        required: false
    },
    backup_cam: {
        type: String,
        required: false
    },
    traction_control: {
        type: String,
        required: false
    },
    parking_assistant: {
        type: String,
        required: false
    },
    fuel_type: {
        type: String,
        required: false
    },
    fuel_system: {
        type: String,
        required: false
    },
    gear: {
        type: String,
        required: false
    },
    km: {
        type: Number,
        required: false
    },
    engine_power: {
        type: String,
        required: false
    },
    trim: {
        type: String,
        required: false
    },
    wheel_size: {
        type: String,
        required: false
    },
    epa_class: {
        type: String,
        required: false
    },
    mp3_player: {
        type: String,
        required: false
    },
    stereo_sound: {
        type: String,
        required: false
    },
    cd_player: {
        type: String,
        required: false
    },
    dvd_player: {
        type: String,
        required: false
    },
    radio: {
        type: String,
        required: false
    },
    condition: {
        type: String,
        required: false
    },
    num_cylinders: {
        type: Number,
        required: false
    },
    cylinders: {
        type: String,
        required: false
    },
    ext_color: {
        type: String,
        required: false
    },
    int_color: {
        type: String,
        required: false
    },
    ext_type: {
        type: String,
        required: false
    },
    date: {
        type: Number,
        required: false
    }
})
module.exports = mongoose.model('CAR', carSchema)
