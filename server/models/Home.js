const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  location: {
    type: { type: String, required: true },
    coordinates: { type: [Number], required: true }
  },
  _owner: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Home = mongoose.model('Home', homeSchema);
module.exports = Home;
