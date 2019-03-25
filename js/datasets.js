(function() {
  var colors = [
    'liblue',
    'blue',
    'pink',
    'green',
    'yellow'
  ];

  var shapes = [
    'square',
    'triangle'
  ];

  var feelings = [
    'meh',
    'sad',
    'yay'
  ];
  

  // Generate a data set
  function create(options) {
    var n = (options && options.n) || 20;
    return _.range(0, n).map(function(index) {
      return {
        id: _.uniqueId(),
        color: _.sample(colors),
        shape: _.sample(shapes),
        feeling: _.sample(feelings),
        music: {
          interest: _.random(0, 10),
          experience: _.random(0, 10)
        },
        math: {
          interest: _.random(0, 10),
          experience: _.random(0, 10)
        },
        outdoors: {
          interest: _.random(0, 10),
          experience: _.random(0, 10)
        }
      }
    });
  }

  // Get a URL for the image of a data point
  function imageUrlForDataPoint(dataPoint) {
    var feeling = (dataPoint.feeling === 'yay')
      ? 'yay_blink'
      : dataPoint.feeling;
    return `play/img/${dataPoint.color}_${dataPoint.shape}_${feeling}.png`;
  }


  // Render a data point as HTML
  function renderDataPoint(dataPoint) {
    var imageUrl = imageUrlForDataPoint(dataPoint);
    return `<div class="MeetShapesDataset-data-point">
      <div>${dataPoint.shape}</div>
      <div class="MeetShapesDataset-tiny">math: ${dataPoint.math.interest} / ${dataPoint.math.experience}</div>
      <div class="MeetShapesDataset-tiny">music: ${dataPoint.music.interest} / ${dataPoint.music.experience}</div>
      <div class="MeetShapesDataset-tiny">outdoors: ${dataPoint.outdoors.interest} / ${dataPoint.outdoors.experience}</div>
      <div class="MeetShapesDataset-tiny"><img src="${imageUrl}" /></div>
    </div>`;
  }

  // Add handler for "New dataset"
  function init(el) {
    var buttonEl = el.querySelector('.MeetShapesDataset-create-dataset');
    var previewEl = el.querySelector('.MeetShapesDataset-dataset-preview');
    buttonEl.addEventListener('click', function() {
      var dataset = create();
      var html = `<div class="MeetShapesDataset-data-points-container">
        ${dataset.map(renderDataPoint).join('')}
      </div>`;
      previewEl.innerHTML = html;
    })
  };
  
  window.datasets = {
    init: init
  };
})();