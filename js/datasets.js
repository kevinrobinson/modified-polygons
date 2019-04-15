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

  var camps = [
    'outdoor',
    'music',
    'math'
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
        assignedCamp: _.sample(camps),
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

  function toX(dataset) { // TODO: change to be vectorized 
    return dataset.map(function(dataPoint) {
      // return [
      //   colors.indexOf(dataPoint.color),
      //   shapes.indexOf(dataPoint.shape),
      //   feelings.indexOf(dataPoint.feeling),
      //   dataPoint.music.interest,
      //   dataPoint.music.experience,
      //   dataPoint.math.interest,
      //   dataPoint.math.experience,
      //   dataPoint.outdoors.interest,
      //   dataPoint.outdoors.experience
      // ];
      return colors.indexOf(dataPoint.color);
    });
  }

  function toY(dataset) {
    return dataset.map(function(dataPoint) {
      return camps.indexOf(dataPoint.assignedCamp);
    });
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

  function onClick(el) {
    var dataset = create();

    var previewEl = el.querySelector('.MeetShapesDataset-dataset-preview');
    var html = `<div class="MeetShapesDataset-data-points-container">
      ${dataset.map(renderDataPoint).join('')}
    </div>`;
    previewEl.innerHTML = html;

    window.lastDataset = dataset;
    window.lastX = toX(dataset);
    window.lastY = toY(dataset);
  }

  // Add handler for "New dataset"
  function init(el) {
    var buttonEl = el.querySelector('.MeetShapesDataset-create-dataset');
    buttonEl.addEventListener('click', onClick.bind(null, el));
    onClick(el);
  };

  window.datasets = {
    init: init,
    constants: {
      colors: colors,
      shapes: shapes,
      feelings: feelings,
      camps: camps
    },
    imageUrlForDataPoint: imageUrlForDataPoint
  };
})();
