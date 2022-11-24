const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CRUD');

const cSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const FindDb = async () => {
    const nameModel = new mongoose.model('crud', cSchema);
    let data = await nameModel.find();
    console.log(data);
}

// FindDb();

const main = async () => {
    const nameModel = new mongoose.model('crud', cSchema);
    let data = new nameModel({
        name: "Usman",
        age: 25,
    });
    let result = await data.save();
    console.log(result);
}


const updateDb = async () => {
    const nameModel = new mongoose.model('crud', cSchema);
    let data = await nameModel.updateOne(
        { name: "Usman" },
        {
            $set: { age: 19 }
        }
    )
    console.log(data);
}
// updateDb();

const deleteDb = async () => {
    const nameModel = new mongoose.model('crud', cSchema);
    let data = await nameModel.deleteOne(
        { name: "Usman" }
    )
    console.log(data);
}
deleteDb();