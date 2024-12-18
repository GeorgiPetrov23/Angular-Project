import Boat from '../models/Boat.js';

const boatService = {   
    getAll(){
        return Boat.find();
    },
    getOne(boatId){
        return Boat.findById(boatId);
    },
    edit(boatId, boatData){
        return Boat.findByIdAndUpdate(boatId, boatData);
    },
    delete(boatId){
        return Boat.findByIdAndDelete(boatId);
    },
    create(boatData, userId) {
        return Boat.create({...boatData, owner: userId});
    }
};

export default boatService;   