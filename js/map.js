(function() {
  var firstCityBounds = {
    left: [280, 410],
    top: [40, 70]
  };
  var secondCityBounds = {
    left: [460, 520],
    top: [360, 430]
  };
  var thirdCityBounds = {
    left: [750, 930],
    top: [250, 320]
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

  function htmlForPolygons(game) {
    var firstCity = game.firstCityDataset.map(function(dataPoint) {
      return renderPolygonForMap(dataPoint, firstCityBounds, 'delay-1s');
    }).join('');
    var secondCity = game.secondCityDataset.map(function(dataPoint) {
      return renderPolygonForMap(dataPoint, secondCityBounds, 'delay-2s');
    }).join('');
    var thirdCity = game.secondCityDataset.map(function(dataPoint) {
      return renderPolygonForMap(dataPoint, thirdCityBounds, '');
    }).join('');
    return [
      firstCity,
      secondCity,
      thirdCity
    ].join('');
  }

  function init(mapEl, options) {
    if (options.shouldRenderPolygons) {
      var polygonsEl = document.createElement('div');
      polygonsEl.classList.add('Map-polygons');
      polygonsEl.innerHTML = htmlForPolygons(game);
      mapEl.querySelector('.Map-container').appendChild(polygonsEl);
    }

    if (options.shouldRenderCamps) {
      var campsEl = document.createElement('div');
      campsEl.classList.add('Map-camp-container');
      campsEl.innerHTML = `
        <img class="Map-camp" src="play/img/sixteenth_notes.png"/>
        <img class="Map-camp" src="play/img/campfire.png"/>
        <img class="Map-camp" src="play/img/math.png"/>
      `;
      mapEl.querySelector('.Map-container').appendChild(campsEl);
    }
  }

  window.MAP = {
    init: init
  };
})();