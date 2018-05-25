$(() => {
  $.fn.configureMap();
});

$.fn.configureMap = () => {
  const position = ol.proj.fromLonLat([19.8865, 50.0213]);
  const view = new ol.View({
    center: position,
    zoom: 16
  });
  const osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  const controls = ol.control.defaults({
    attributionOptions: {
      collapsible: false
    }
  });
  const map = new ol.Map({
    layers: [osmLayer],
    target: 'map',
    controls: controls,
    view: view
  });
  const marker = new ol.Overlay({
    position: position,
    positioning: 'center-center',
    element: document.getElementById('map-marker'),
    stopEvent: false
  });
  map.addOverlay(marker);
}
