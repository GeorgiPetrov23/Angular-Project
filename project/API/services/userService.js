import User from '../models/User.js';

const userService = {   
    getAll(){
        return User.find();
    },
    getOne(userId){
        return User.findById(userId);
    },
    edit(userId, userData){
        return User.findByIdAndUpdate(userId, userData);
    },
    delete(userId){
        return User.findByIdAndDelete(userId);
    },
    create(userData, userId) {
        return User.create({...userData});
    }
};

export default userService;   