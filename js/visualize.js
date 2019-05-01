(function() {
  window.VISUALIZE = function(game, visualizeEl, wiggleFn) {
    var wiggleFn = window.wiggle;
    var canvasEl = visualizeEl.querySelector('.Evaluating-canvas');
    
    function onClick(values, byKey, e) {
      visualizeEl.querySelectorAll('.Visualize-button').forEach(function(el) { el.classList.remove('Visualize-selected'); });
      e.target.classList.add('Visualize-selected');
      
      wiggleFn(canvasEl, game.historicalDataset, {
        values: values,
        valueFn: function(d) { return d[byKey]; }
      });
    }
    
    visualizeEl.querySelector('.Visualize-by-shape').addEventListener('click', onClick.bind(null, window.datasets.constants.shapes, 'shape'));
    visualizeEl.querySelector('.Visualize-by-color').addEventListener('click', onClick.bind(null, window.datasets.constants.colors, 'color'));
    visualizeEl.querySelector('.Visualize-by-camp').addEventListener('click', onClick.bind(null, window.datasets.constants.camps, 'assignedCamp'));
    visualizeEl.querySelector('.Visualize-by-feeling').addEventListener('click', onClick.bind(null, window.datasets.constants.feelings, 'feeling'));
  }
})();