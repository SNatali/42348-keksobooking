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

var getRandomValue = function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
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
      address: locationX + ', ' + locationY,
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


var getOffers = function () { // генерируем массив
  var data = [];
  for (var i = 0; i <= OFFERS_QUANTITY; i++) {
    data.push(generateObject(i));
  }
  return data;
};

var data = getOffers();

var map = document.querySelector('template').content;
var buttonTempale = map.querySelector('.map__pin');
var pinsElement = document.querySelector('.map__pins');
var mapCard = map.querySelector('.map__card');
var clonedMapCard = mapCard.cloneNode(true);

var renderPinsToMap = function () {
  var pinsFragment = document.createDocumentFragment();
  for (var i = 0; i < data.length - 1; i++) {
    var button = buttonTempale.cloneNode(true);
    var img = button.querySelector('img');
    button.style.left = data[i].location.x + 'px';
    button.style.top = data[i].location.y + 'px';
    img.src = 'img/avatars/user0' + (i + 1) + '.png';
    pinsFragment.appendChild(button);
  }
  pinsElement.appendChild(pinsFragment);
};

var renderMapCard = function (index) {
  var popup = map.querySelector('.popup');
  if (popup) {
    map.removeChild(popup);
  }
  var offerData = data[index];

  var title = clonedMapCard.querySelector('h3');
  title.textContent = offerData.offer.title;

  var adress = clonedMapCard.querySelector('small');
  adress.textContent = offerData.offer.adress;

  var price = clonedMapCard.querySelector('.popup__price');
  price.textContent = offerData.offer.price + '\u20BD/ночь';

  var typeofFlat = clonedMapCard.querySelector('h4');
  typeofFlat.textContent = offerData.offer.type;

  var room = clonedMapCard.querySelectorAll('p')[2];
  room.textContent = offerData.offer.rooms + 'комнаты для' + offerData.offer.guests + 'гостей';

  var checkInOut = clonedMapCard.querySelectorAll('p')[3];
  checkInOut.textContent = 'Заезд после' + offerData.offer.checkin + ', выезд до' + offerData.offer.checkout;

  var popupFeatures = clonedMapCard.querySelector('.popup__features');
  var popupFeaturesLi = popupFeatures.querySelectorAll('li');
  popupFeaturesLi.textContent = offerData.offer.features;

  var description = clonedMapCard.querySelectorAll('p')[4];
  description.textContent = offerData.offer.description;

  var pictures = clonedMapCard.querySelector('.popup__pictures');
  var pictutesItem = pictures.querySelector('img');
  pictutesItem.src = offerData.offer.photos;
};

renderMapCard(5);

var mainMap = document.querySelector('.map');
mainMap.appendChild(clonedMapCard);


//  вернуть страницу в исходное состояние

var mapMain = document.querySelector('.map');
mapMain.classList.add('map--faded');

// поля формы должны быть неактивны в исходном состоянии

var form = document.querySelector('.notice__form');
form.classList.add('notice__form--disabled');

// Заполнение поля адресса

var adressField = document.querySelector('#address');
adressField.value = '900 ,500';

// Перетаскивание метки

var startPin = document.querySelector('.map__pin--main');
startPin.addEventListener('mouseup', function () {
  form.classList.remove('notice__form--disabled');
  return renderPinsToMap();
});


var getIndexOfElement = function (elements, element) {
  for (var i = 1; i < elements.length; i++) {
    if (elements[i] === element) {
      return i;
    }
  }
};
//  Добавляет обработчик на метки карты

pinsElement.addEventListener('click', function (evt) {
  var target = evt.target;
  if (target.tagName === 'IMG') {
    var parent = evt.target.closest('.map__pins');
    var button = evt.target.closest('.map__pin');

    renderPinsToMap(data[getIndexOfElement(parent, button)]);
  }
});
