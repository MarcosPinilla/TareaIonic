angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    nombre: 'Felipe Acuña',
    mensaje: 'Al fin encontre al marcianito 100% REAL',
    foto: 'img/felipe.jpg',
    meme: 'img/marciano.jpeg'
  }, {
    id: 1,
    nombre: 'Daniel Coronado',
    mensaje: 'He perdio una apuesta :(',
    foto: 'img/daniel.jpg',
    meme: 'img/care.jpg'
  }, {
    id: 2,
    nombre: 'Matias Gutierrez',
    mensaje: 'Soy el SULTAN del Ping-Pong',
    foto: 'img/matias.jpg',
    meme: 'img/sultan.jpg'
  }, {
    id: 3,
    nombre: 'Marcos Pinilla',
    mensaje: 'No ahora porfavor, no otra vez',
    foto: 'img/marcos.jpg',
    meme: 'img/cuatro.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
