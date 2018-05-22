

let jsonfile = require('jsonfile');
let path = require('path');

let path_to_file = require('./db.json');

let model = {
	reinitialize: function() {
		let db = {};
		db.meta = {};
		db.meta.nextID = 0;
		db.meta.name = "DJFinder";
		db.data = {};
		jsonfile.writeFileSync(path.join(__dirname, '../db.json'), db)
	},
	update: function (_index, new_entry) {
		let db = require('../db.json');
		let index = String(index);
		db.data[index] = new_entry;
		jsonfile.writeFileSync(path.join(__dirname, '../db.json'), db)

	}
};

module.exports = model;

