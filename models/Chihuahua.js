const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ChihuahuaSchema = new Schema({
    name:  {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    image: {
        type: String,
        default: "http://via.placeholder.com/200X200"
    }
});

// This creates our model from the above schema, using mongoose's model method
var Chihuahua = mongoose.model("Chihuahua", ChihuahuaSchema);

// Export the Chihuahua model
module.exports = Chihuahua;