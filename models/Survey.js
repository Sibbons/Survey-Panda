// not nested in User.js b/c 4 megabytes of data max
const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');
const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }, // reference to user collection, _ to make it relationship field
    dateSent: Date,
    lastResponded: Date

})

mongoose.model('surveys', surveySchema);