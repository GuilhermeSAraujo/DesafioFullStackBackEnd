const mongoose = require ('../database');

const AssetSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    sensor_id: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    model: {
        type: String,
        require: true,
    },
    responsible: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    unity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unidade',
        require: true,
    },
    status: {
        type: Number,
        require: true,
    },
    health_level: {
        type: Number,
        require: true,
    },
    /*
    IMAGE{
        type: ,
        require: true,
    },
    */
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;