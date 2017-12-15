const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const DirectorSchema = new Schema({
	name: {
		type: String,
		maxlength: 60,
		minlength: 2
	},
	surname: {
		type: String,
		maxlength: 60,
		minlength: 2
	},
	bio: {
		type: String,
		maxlenght: 1000,
		minlength: 60
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('director', DirectorSchema);
