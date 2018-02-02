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
  apiKey: "AIzaSyCJhH-aswyuNOkTYzQaZ8C1j__-A5PSKqA",
  authDomain: "monitoriaiptemple.firebaseapp.com",
  databaseURL: "https://monitoriaiptemple.firebaseio.com",
  projectId: "monitoriaiptemple",
  storageBucket: "monitoriaiptemple.appspot.com",
  messagingSenderId: "407157239107"
};
firebase.initializeApp(config);
var database = firebase.database();
//END FIREBASE



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

exports.getAllMessages = function(){
    console.log('fetching all messages in database...');

    var msgsRef = firebase.database().ref('messages/');
    msgsRef.on('value', function(snapshot){
        console.log(snapshot.val());
    });
}

