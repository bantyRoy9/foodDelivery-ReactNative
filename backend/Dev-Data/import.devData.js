const mongoose = require('mongoose');
const fs = require('fs');
const { restaurentModel, restaurentLocationModel, restaurentRatingModel } = require('../Models/restaurent');
require('dotenv').config({path: './../config.env'});
const DB = process.env.MOGOURL;
mongoose.connect(DB).then(res =>{
    console.log('DB successfully connected.');
});

let importFileData = JSON.parse(fs.readFileSync(`${__dirname}/restaurent.json`, 'utf8'));
console.log(importFileData.length);
const locations = importFileData.map(el => el?.location);
const rating = importFileData.map(el => el?.user_rating);

const importLocation = async()=>{
    try{
        const res = await restaurentLocationModel.create(locations);
        const rating = await restaurentRatingModel.create(rating);
        if(res && rating){
            console.log(res ,rating);
        };
    }catch(er){
        console.log(err);
    }
}
const importData = async() =>{
    try{
        const locations = await restaurentLocationModel.find({},'latitude longitude');
        locations.forEach((el,idx)=>{
            importFileData.forEach((ele,id)=>{
                if(el.longitude == ele.location.longitude){
                    ele.location = el._id;
                }
            })
            // console.log(el.longitude,importFileData[idx]?.location.longitude)
            // if(el.longitude == importFileData[idx]?.location.longitude && el.latitude == importFileData[idx]?.location.latitude){
            //     console.log(el.longitude == importFileData[idx]?.location.longitude)
            //     importFileData[idx].location = el._id;
            // }
        });
        console.log(importFileData);
        //await restaurentModel.create(importFileData);
        console.log('Data successfully saved');
    }catch(er){
        console.log(er);
    }
    process.exit();
}

const deleteData = async() =>{
    try{
        await restaurentLocationModel.deleteMany();
        console.log('Data successfully deleted');
    }catch(er){
        console.log(er);
    }
    process.exit();
}

if(process.argv[2] == '--importData'){
    importData();
}else if( process.argv[2] == '--delete'){
    deleteData()
}else if(process.argv[2] == '--importLoc'){
    importLocation();
};