import mongoose from 'mongoose';

const CardSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Card || mongoose.model('Card', CardSchema);
