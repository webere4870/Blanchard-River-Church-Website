
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('.slide:first')
  .fadeOut(2000)
  .next()
  .fadeIn(2000)
  .end()
  .appendTo('#slideshow');
}, 6000);


$('.navBox').click((evt)=>
{
    $('.mobileNavigation').slideToggle(500)
})

setInterval(()=>
{
  if(window.scrollY > 0 || location.href.includes('about') || location.href.includes('live') || window.innerWidth <= 768)
  {
    $('nav').attr("class", "sticky")
  }
  else
  {
    $('nav').attr("class", "")
  }
}, 200)



let latitude = 40.782250;
    let longitude = -83.581690;
    let mymap = L.map('mapid', {tap: false}).setView([latitude, longitude], 13);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
    const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileURL, {attribution: attribution});
    tiles.addTo(mymap);
    var marker = L.marker([latitude, longitude]).addTo(mymap);
    marker.bindPopup("15745 OH-81, Dunkirk, OH 45836");
    marker.on("click", function (event) {
        event.target.openPopup();
     });
    mymap.invalidateSize();