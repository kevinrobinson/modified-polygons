(function() {
  function init(cityDatasetFn, options) {
    options.buttonEl.addEventListener('click', function(e) {
      options.containerEl.innerHTML = '<facets-dive width="800" height="600" color-by="feeling" />';

      // flatten
      var cityDataset = cityDatasetFn();
      var facetsData = cityDataset.map(function(dataPoint) {
        return _.merge({}, dataPoint, {
          mathInterest: dataPoint.math.interest,
          musicInterest: dataPoint.music.interest,
          outdoorsInterest: dataPoint.outdoors.interest,
          mathExperience: dataPoint.math.experience,
          musicExperience: dataPoint.music.experience,
          outdoorsExperience: dataPoint.outdoors.experience
        });
      });

      // config
      var facetsDiveEl = options.containerEl.querySelector('facets-dive');

      // the order of these calls matters
      facetsDiveEl.data = facetsData;
      facetsDiveEl.hideInfoCard = true;
      facetsDiveEl.colorBy = 'feeling';
      facetsDiveEl.verticalFacet = 'shape';
      facetsDiveEl.horizontalFacet = 'color';
    });
  }
  window.FACETS = {
    init: init
  };
})();