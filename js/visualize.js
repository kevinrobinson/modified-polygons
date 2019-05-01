(function() {
  window.VISUALIZE = function(game, visualizeEl) {
    var canvasEl = visualizeEl.querySelector('.Evaluating-canvas');
    
    function onClick(values, byKey, e) {
      visualizeEl.querySelectorAll('.Visualize-button').forEach(function(el) { el.classList.remove('Visualize-selected'); });
      e.target.classList.add('Visualize-selected');
      
      WIGGLE.start(canvasEl, game.historicalDataset, {
        values: values,
        valueFn: function(d) { return d[byKey]; }
      });
    }
    
    visualizeEl.querySelector('.Visualize-by-shape').addEventListener('click', onClick.bind(null, DATASETS.constants.shapes, 'shape'));
    visualizeEl.querySelector('.Visualize-by-color').addEventListener('click', onClick.bind(null, DATASETS.constants.colors, 'color'));
    visualizeEl.querySelector('.Visualize-by-camp').addEventListener('click', onClick.bind(null, DATASETS.constants.camps, 'assignedCamp'));
    visualizeEl.querySelector('.Visualize-by-feeling').addEventListener('click', onClick.bind(null, DATASETS.constants.feelings, 'feeling'));
  }
})();