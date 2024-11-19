// JavaScript
const map = L.map('map').setView([33.670708476263655, 130.44456777852662], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
/* //国土交通省の地図
L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map); */

    // Open Street Map hot
/* L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
  }).addTo(map); */


L.marker([33.670708476263655, 130.44456777852662]).addTo(map)
  .bindPopup('九州産業大学').openPopup();

/* //アイコン
const whiteIcon = L.icon({
    iconUrl: 'images/map_icon-main/ico.png',
    shadowUrl: 'images/map_icon-main/ico_shadow.png',

iconSize: [40, 40], 
shadowSize: [40 , 40], 
iconAnchor: [20, 40], //point of the icon which will correspond to maeker's location
shadowAnchor: [20, 40], //the same for the shadow
popupAnchor: [0, -42], //point from which the popup should open relative to the iconAnchor
});  */

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
        shadowUrl: 'images/map_icon-main/ico_shadow.png',
        iconSize: [40, 40],
        shadowSize: [40, 40],
        iconAnchor: [20, 40],
        shadowAnchor: [20, 40],
        popupAnchor: [0, -42]
    }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/map_icon-main/ico.png' }),
      blueIcon = new circleIcon({ iconUrl: 'images/map_icon-main/ico_blue.png' });
      yellowIcon = new circleIcon({ iconUrl: 'images/map_icon-main/ico_yellow.png' });

L.marker([33.673478764729396, 130.4413764063905], { icon: whiteIcon }).addTo(map).bindPopup('最寄駅<br><img src="images/')
L.marker([33.65949607249798, 130.44406264179955], { icon: blueIcon }).addTo(map).bindPopup('香椎駅')
L.marker([33.698471230062374, 130.44012600396897], { icon: yellowIcon }).addTo(map).bindPopup('福工大前駅')

const circle = L.circle([33.670708476263655, 130.44456777852662], {
    color: 'blue', //円の輪郭線の色
    fillColor: '#65BBE9', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);
circle.bindPopup("半径1kmの範囲");

// 多角形の表示
const polygon = L.polygon([
    [33.670708476263655, 130.44456777852662],
    [33.673478764729396, 130.4413764063905],
    [33.65949607249798, 130.44406264179955]
  ], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3
  }).addTo(map);
  
// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);
