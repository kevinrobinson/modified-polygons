(function() {
  var firstCityBounds = {
    left: [510, 610],
    top: [20, 50]
  };
  var secondCityBounds = {
    left: [600, 680],
    top: [240, 300]
  };
  var thirdCityBounds = {
    left: [750, 880],
    top: [160, 220]
  };
  

  function sampleWithin(bounds) {
    var low = bounds[0];
    var high = bounds[1];
    return (high - low) * Math.random() + low;
  }

  function renderPolygonForMap(dataPoint, cityBounds, className) {
    var imageUrl = DATASETS.imageUrlForDataPoint(dataPoint);
    var left = sampleWithin(cityBounds.left);
    var top = sampleWithin(cityBounds.top);
    return `
      <div style="position: absolute; left: ${left}px; top: ${top}px;">
        <div class="Map-polygon-scale">
          <img
          class="animated slower heartBeat infinite ${className}"
          src="${imageUrl}" />
        </div>
      </div>
    `;
  }

  function init(options) {
    var firstCity = game.firstCityDataset.map(function(dataPoint) {
      return renderPolygonForMap(dataPoint, firstCityBounds, 'delay-1s');
    }).join('');
    var secondCity = game.secondCityDataset.map(function(dataPoint) {
      return renderPolygonForMap(dataPoint, secondCityBounds, 'delay-2s');
    }).join('');
    var thirdCity = game.secondCityDataset.map(function(dataPoint) {
      return renderPolygonForMap(dataPoint, thirdCityBounds, '');
    }).join('');

    options.mapEl.querySelector('.Map-polygons').innerHTML = [
      firstCity,
      secondCity,
      thirdCity
    ].join('');
  }
  window.MAP = {
    init: init
  };
})();