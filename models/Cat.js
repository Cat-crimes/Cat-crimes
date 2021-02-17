const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    race: {type: String, required: true},
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    blueEyes: {type: Boolean, required: true},
    hair: {type: String, enum: ['long', 'striped'], required: true},
    whitePaw:{type: Boolean, required: true},
    hasBow: {type: Boolean, required: true},
    hasBell: {type: Boolean, required: true},  
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

// const catSchema = new Schema ({
//     name: {type: String, required: true, unique: true},
//     age: {type: Number, required: true},
//     race: {type: String, required: true},
//     height: {type: Number, required: true},
//     weight: {type: Number, required: true},
//     attributes: {
//         blueEyes: {type: Boolean},
//         hair: {type: String, enum: ['long', 'striped']},
//         whitePaw:{type: Boolean},
//         hasBow: {type: Boolean},
//         hasBell: {type: Boolean},  
//     requiered: true},
//     // user: {
//     //     type: Schema.Types.ObjectId,
//     //     ref: 'User',
//     //     required: true
//     // }
// }, {
//     timestamps: true,
//     toJSON: {
//         transform: (doc, ret) => {
//             ret.id = doc._id;
//             delete ret._id;
//             delete ret.__v;
//             return ret;
//         }
    
//     }
// })

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;