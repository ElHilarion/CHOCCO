let myMap;
 
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [55.753418, 37.608915],
   zoom: 14,
   controls: []
 });

 const coords = [
     [55.758770, 37.583119],
     [55.742585, 37.581011],
     [55.749909, 37.604078],
     [55.756566, 37.619945]
 ];

 const myCollection = new ymaps.GeoObjectCollection({}, {
     draggable: false,
     iconLayout: 'default#image',
     iconImageHref: './img/icons/marker.png',
     iconImageSize: [46, 57],
     iconImageOffset: [-35, -52]
 });

 coords.forEach(coord => {
     myCollection.add(new ymaps.Placemark(coord));
 });

 myMap.geoObjects.add(myCollection);

 myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);