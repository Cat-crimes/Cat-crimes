const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const catSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    race: {type: String, required: true},
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    attributes: {
        blueEyes: {type: Boolean, required: true},
        longHair: {type: Boolean, required: true},
        paw:{type: String, enum: [long, striped]},
        hasBow: {type: Boolean, required: true},
        hasBell: {type: Boolean, required: true},  
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    
    }
})

const Cat = mongoose.model(Cat, catSchema);

module.export = Cat;