import { Schema, model, Types } from 'mongoose';

const boatSchema = new Schema({
    name: {type: String, required: true},
    companyName: {type: String, required: true},
    length: {type: Number, required: true},
    range: {type: Number, required: true},
    rechargeTime: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    ownerId: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Boat = model('Boat', boatSchema);

export default Boat;