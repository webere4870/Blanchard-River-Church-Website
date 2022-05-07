$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('.slide:first')
  .fadeOut(2000)
  .next()
  .fadeIn(2000)
  .end()
  .appendTo('#slideshow');
}, 6000);

let latitude = 41.037660;
    let longitude = -83.649540;
    let mymap = L.map('mapid', {tap: false}).setView([latitude, longitude], 13);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
    const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileURL, {attribution: attribution});
    tiles.addTo(mymap);
    var marker = L.marker([latitude, longitude]).addTo(mymap);
    marker.bindPopup("113 East Crawford Street, Findlay, OH 45840");
    marker.on("click", function (event) {
        event.target.openPopup();
     });
    mymap.invalidateSize();