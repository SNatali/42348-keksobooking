'use strict';

var MIN_ROOMS = 1; // минимальное количество комнат
var MAX_ROOMS = 5; // максимальное количество комнат
var MIN_PRICE = 1000; // минимальная стоимость
var MAX_PRICE = 1000000; // максимальная стоимость
var titles = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря'
];
var typeOfRooms = ['flat', 'house', 'bungalo'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var checkin = ['12:00', '13:00', '14:00'];
var checkout = ['12:00', '13:00', '14:00'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
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
var OFFERS_QUANTITY = 8;

var getRandomValue = function (min, max) { // поиск случайного числа
  return Math.floor(Math.random() * (max - min));
};

var generateObject = function (i) {
  var locationX = getRandomValue(LOCATION.x.min, LOCATION.x.max); // случайная координата метки по Х
  var locationY = getRandomValue(LOCATION.y.min, LOCATION.y.max); // случайная координата метки по Y

  return {
    author: {
      avatar: 'img/avatars/user0' + (i + 1) + '.png'
    },
    offer: {
      title: titles[i],
      address: + locationX + ', ' + locationY ,
      price: getRandomValue(MIN_PRICE, MAX_PRICE),
      type: typeOfRooms[getRandomValue(0, typeOfRooms.length)],
      rooms: getRandomValue(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomValue(1, 5),
      checkin: checkin[getRandomValue(0, checkin.length)],
      checkout: checkout[getRandomValue(0, checkout.length)],
      feature: features[getRandomValue(0, features.length)],
      description: '',
      photos: photos[getRandomValue(0, photos.length)]

    },
    location: {
      x: locationX,
      y: locationY
    }
  };
};


var getOffers = function () { //генерируем массив
  var data = [];
  for (var i = 0; i <= OFFERS_QUANTITY; i++) {
    data.push(generateObject(i));
  }
  return data;
};
//console.log(getOffers());

var getMap = function (offer) {
  var element = document.querySelector('.map__pins');
  var fragment = document.createDocumentFragment();
  for (var i = 0 ; i < offer.length; i++) {
    fragment.appendChild(offer[i]);
  }
  element.appendChild(fragment);
};

var map = document.querySelector('template').querySelector('.map__card');
var titleH4 = map.querySelector('h4');

map.querySelector('h3').offer.title;
map.querySelector('h3').offer.address;
map.querySelector('.popup__price').offer.price;
titleH4.offer.type;
titleH4.offer.rooms;
titleH4.offer.guests;
titleH4.offer.checkin;
titleH4.offer.checkout;
map.querySelector('.popup__features').offer.features;
map.querySelector('.popup__features').offer.description;
map.querySelector('.popup__pictures').offer.photos;




