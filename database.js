var mongoose = require('mongoose');
    
// Mongoose Schema definition
Schema = new mongoose.Schema({
    id          : String,
    from        : String, 
    message     : String    
}),

Message = mongoose.model('Message', Schema);

exports.listAll = function() {
    console.log('list all');
    Message.find({}, function(err, messages) {
        return messages;
    });
};
exports.saveMessage = function(from, message){
    console.log(from, message);            
    Message.create({message: message, from: from}, function (err, doc) {
        //res.json(200, todo);
        console.log(err, doc);
    });
};