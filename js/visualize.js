(function() {
  function init(visualizeEl, cityDatasetFn) {
    var canvasEl = visualizeEl.querySelector('.Evaluating-canvas');
    
    function onClick(values, byKey, e) {
      visualizeEl.querySelectorAll('.Visualize-button').forEach(function(el) { el.classList.remove('Visualize-selected'); });
      e.target.classList.add('Visualize-selected');
      
      var cityDataset = cityDatasetFn();
      WIGGLE.start(canvasEl, cityDataset, {
        values: values,
        valueFn: function(d) { return d[byKey]; }
      });
    }
    
    // buttons
    visualizeEl.querySelector('.Visualize-by-shape').addEventListener('click', onClick.bind(null, DATASETS.constants.shapes, 'shape'));
    visualizeEl.querySelector('.Visualize-by-color').addEventListener('click', onClick.bind(null, DATASETS.constants.colors, 'color'));
    visualizeEl.querySelector('.Visualize-by-camp').addEventListener('click', onClick.bind(null, DATASETS.constants.camps, 'assignedCamp'));
    visualizeEl.querySelector('.Visualize-by-feeling').addEventListener('click', onClick.bind(null, DATASETS.constants.feelings, 'feeling'));

    // facets dive
    FACETS.init(cityDatasetFn, {
      buttonEl: visualizeEl.querySelector('.Visualize-facets-button'),
      containerEl: visualizeEl.querySelector('.Visualize-facets')
    });
  }

  window.VISUALIZE = {
    init: init
  };
})();