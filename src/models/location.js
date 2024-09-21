import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    name: String,
    displayName: String,
    email: String,
    "phone": String,
    "addressLine1": String,
    "addressLine2": String,
    "city": String,
    "state": String,
    "zip": String,
    "businessHours":Array,
    "status": String,
    "createdOn": String,
    "createdBy": String,
    "lastModifiedOn": Date,
    "lastModifiedBy": String
  //user: { type: mongoose.Schema.Types.ObjectId},
});

const Location = mongoose.model('Locations', locationSchema);

export default Location;
