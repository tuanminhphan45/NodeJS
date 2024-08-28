const mongoose = require("mongoose");

module.exports.connect = async (data) => {
    try {
        await mongoose.connect(data);
        console.log("Connect Success!");
    } catch (error) {
        console.log(`Error: ${error}!`);
    }
};
