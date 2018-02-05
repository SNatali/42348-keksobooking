'use strict';

var MIN_ROOMS = 1; // минимальное количество комнат
var MAX_ROOMS = 5; // максимальное количество комнат
var MIN_PRICE = 1000; // минимальная стоимость
var MAX_PRICE = 1000000; // максимальная стоимость

var titile = ['Большая уютная квартира',
              'Маленькая неуютная квартира',
              'Огромный прекрасный дворец',
              'Маленький ужасный дворец',
              'Красивый гостевой домик',
              'Некрасивый негостеприимный домик',
              'Уютное бунгало далеко от моря',
              'Неуютное бунгало по колено в воде'];

var LOCATION = { // координаты метки
  x: {
    min: 300,
    max: 900
  },
  y: {
    min: 100,
    max: 500
  }
};

var getRandomValue = function (min, max) { // поиск случайного числа
  return Math.floor(Math.random() * (max - min));
};

var getPicture = function () {
  for (var i = 0; i <= 8; i++ ) {
        var count = i + 1;
        var imgSrc = 'img/avatars/user0' + count + '.png';
        return imgSrc;
  }
};

var locationX = getRandomValue(LOCATION.x.min, LOCATION.x.max); // случайная координата метки по Х
var locationY = getRandomValue(LOCATION.y.min, LOCATION.y.max); // случайная координата метки по Y

var getTitle = function (names) { // функция перебора случайного заголовка из массива
  var
};

var objMap = [{
  'autor' : {
    'avatar' : getPicture()
    }
  },

  'offer' : {
    'title' : ['Большая уютная квартира',
              'Маленькая неуютная квартира',
              'Огромный прекрасный дворец',
              'Маленький ужасный дворец',
              'Красивый гостевой домик',
              'Некрасивый негостеприимный домик',
              'Уютное бунгало далеко от моря',
              'Неуютное бунгало по колено в воде'] ,

    'address' : + locationX + ', ' + locationY ,

    'price' : getRandomValue(MIN_PRICE, MAX_PRICE),//число, случайная цена от 1000 до 1 000 000

    'type' : ['flat', 'house', 'bungalo'];

    'rooms' : getRandomValue(MIN_ROOMS, MAX_ROOMS), //число, случайное количество комнат от 1 до 5

    'guests' : getRandomValue(1, 5), //число, случайное количество гостей, которое можно разместить

    'checkin' : ['12:00', '13:00', '14:00'],

    'checkout' : ['12:00', '13:00', '14:00'],

    'features' : ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],

    'description' : '',

    'photos' : ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],

  },

    "location": {
    'x': locationX,//случайное число, координата x метки на карте от 300 до 900,
    'y': locationY //случайное число, координата y метки на карте от 150 до 500
  }

}];

