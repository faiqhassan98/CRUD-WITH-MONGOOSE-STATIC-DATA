const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/CRUD");
    const cSchema = new mongoose.Schema({
        name: String,
        age: Number
    });

    const nameModel = new mongoose.model('crud', cSchema);
    let data = new nameModel({
        name: "Usman",
        age: 25,
    });

    let result = await data.save();
    console.log(result);

}
main();
