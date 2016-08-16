const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const TransferSchema = new Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    contractor: { type: String, required: true },
    amount: { type: Number, required: true }
}, {
    timestamps: true
});

TransferSchema.plugin(mongoosePaginate);

mongoose.model('Transfer', TransferSchema);