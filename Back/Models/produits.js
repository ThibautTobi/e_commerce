// const mongoose = require('mongoose');

// const bookShema = mongoose.Schema(
// {
// userId          :   {type:String , required:true},
// title           :   {type:String , required:true},
// author          :   {type:String , required:true},
// imageUrl        :   {type:String , required:true},
// year            :   {type:Number , required:true},
// genre           :   {type:String , required:true},
// ratings         :   
//     [{
//         userId  : {type:String , required:true},
//         grade   : {type:Number , required:true},
//     }],
// averageRating   : {type:Number , required:true},
// });

// module.exports = mongoose.model('books', bookShema);

//Pour améliorer les performances des requêtes
//productSchema.index({ name: 1, category: 1 }); // Index sur les champs 'name' et 'category'