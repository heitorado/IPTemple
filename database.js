/*var mongoose = require('mongoose');
    
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
};*/

/*
* Inicializa Servidor Firebase
*/
//FIREBASE CONN
var firebase = require('firebase');

var config = {
  apiKey: "",
  authDomain: "monitoriaiptemple.firebaseapp.com",
  databaseURL: "https://monitoriaiptemple.firebaseio.com",
  projectId: "monitoriaiptemple",
  storageBucket: "monitoriaiptemple.appspot.com",
  messagingSenderId: "407157239107"
};
firebase.initializeApp(config);
var database = firebase.database();
//END FIREBASE


//maybe a problem with return here???
exports.saveMessage = function(from, msg){
    console.log(from, msg);

    var msgKey = firebase.database().ref().child('messages').push().key;

    //console.log("hey arnold: " + msgKey);

    firebase.database().ref('messages/' + msgKey).set({
        key: msgKey,
        message: msg
    });

    return msgKey;

  
};

exports.deleteMessage = function(msgKey){
    
    console.log('deleting message with key' + msgKey);

    //console.log("hey arnold: " + msgKey);

    firebase.database().ref('messages/' + msgKey).remove();
};

/*exports.getAllMessages = function(){
    console.log('fetching all messages in database...');
    var allMsgs;

    firebase.database().ref('messages/').once('value').then(function(snapshot){
        //console.log("snapshot val");
        //console.log(snapshot.val());
        allMsgs = snapshot;
    });

    return allMsgs;
}*/


/*exports.getAllMessages = function(){
    console.log('fetching all messages in database...');
    var allMsgs;
    
    new Promise (function(resolve, reject){ 
        resolve(
            firebase.database().ref('messages/').once('value').then(function(snapshot){
                //console.log("snapshot val");
                //console.log(snapshot.val());
                allMsgs = snapshot;
                console.log("i got all messages");
            })
        );
    }).then(console.log("promessa resolvida"));

   // return allMsgs;
}*/

exports.getAllMessages = function(){
    console.log('fetching all messages in database...');
        
    return firebase.database().ref('messages/').once('value');

}