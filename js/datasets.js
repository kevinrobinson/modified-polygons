(function() {
  var names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley','Jayden','Layla','John','Lillian','Owen','Nora','Dylan','Zoey','Luke','Mila','Gabriel','Aubrey','Anthony','Hannah','Isaac','Lily','Grayson','Addison','Jack','Eleanor','Julian','Natalie','Levi','Luna','Christopher','Savannah','Joshua','Brooklyn','Andrew','Leah','Lincoln','Zoe','Mateo','Stella','Ryan','Hazel','Jaxon','Ellie','Nathan','Paisley','Aaron','Audrey','Isaiah','Skylar','Thomas','Violet','Charles','Claire','Caleb','Bella','Josiah','Aurora','Christian','Lucy','Hunter','Anna','Eli','Samantha','Jonathan','Caroline','Connor','Genesis','Landon','Aaliyah','Adrian','Kennedy','Asher','Kinsley','Cameron','Allison','Leo','Maya','Theodore','Sarah','Jeremiah','Madelyn','Hudson','Adeline','Robert','Alexa','Easton','Ariana','Nolan','Elena','Nicholas','Gabriella','Ezra','Naomi','Colton','Alice','Angel','Sadie','Brayden','Hailey','Jordan','Eva','Dominic','Emilia','Austin','Autumn','Ian','Quinn','Adam','Nevaeh','Elias','Piper','Jaxson','Ruby','Greyson','Serenity','Jose','Willow','Ezekiel','Everly','Carson','Cora','Evan','Kaylee','Maverick','Lydia','Bryson','Aubree','Jace','Arianna','Cooper','Eliana','Xavier','Peyton','Parker','Melanie','Roman','Gianna','Jason','Isabelle','Santiago','Julia','Chase','Valentina','Sawyer','Nova','Gavin','Clara','Leonardo','Vivian','Kayden','Reagan','Ayden','Mackenzie','Jameson','Madeline'];

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
        name: _.sample(names),
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
  function imageUrlForDataPoint(dataPoint, options) {
    var feelingParam = (options && options.feeling) || dataPoint.feeling;
    var feeling = (feelingParam === 'yay')
      ? 'yay_blink'
      : feelingParam;
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
    var imageUrl = imageUrlForDataPoint(dataPoint, { feeling: 'yay' }); // always happy to start!
    var mostInterestedCampText = _.maxBy([
      { text: 'math', interest: dataPoint.math.interest },
      { text: 'music', interest: dataPoint.music.interest },
      { text: 'outdoors', interest: dataPoint.outdoors.interest }
    ], 'interest').text;
    var mostExperiencedCampText = _.maxBy([
      { text: 'math', experience: dataPoint.math.experience },
      { text: 'music', experience: dataPoint.music.experience },
      { text: 'outdoors', experience: dataPoint.outdoors.experience }
    ], 'experience').text;
    var myIntentionTextWithPunctuation = (mostInterestedCampText === mostExperiencedCampText)
      ? `I really want to go to ${mostInterestedCampText} camp, I love it there!`
      : `I've been to ${mostExperiencedCampText} camp a lot, but I really want to go to ${mostInterestedCampText} camp this summer!`;
    var colorText = {
      liblue: 'light blue'
    }[dataPoint.color] || dataPoint.color;

    // not used
    var debugHTML = (false) ? `
      <div class="MeetShapesDataset-tiny">math: ${dataPoint.math.interest} / ${dataPoint.math.experience}</div>
      <div class="MeetShapesDataset-tiny">music: ${dataPoint.music.interest} / ${dataPoint.music.experience}</div>
      <div class="MeetShapesDataset-tiny">outdoors: ${dataPoint.outdoors.interest} / ${dataPoint.outdoors.experience}</div>
      ` : '';

    return `<div class="MeetShapesDataset-data-point animated jackInTheBox faster">
      <div class="speech-bubble">"Hi!  My name's ${dataPoint.name} and I'm a ${colorText} ${dataPoint.shape}.  ${myIntentionTextWithPunctuation}"</div>
      <img class="MeetShapesDataset-image" src="${imageUrl}" />
      ${debugHTML}
    </div>`;
  }

  function onClick(el) {
    var dataset = create();

    var previewEl = el.querySelector('.MeetShapesDataset-dataset-preview');
    var html = `<div class="MeetShapesDataset-data-points-container">
      ${dataset.slice(0, 3).map(renderDataPoint).join('')}
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
    // onClick(el);
  };

  window.datasets = {
    init: init,
    create: create,
    constants: {
      colors: colors,
      shapes: shapes,
      feelings: feelings,
      camps: camps
    },
    imageUrlForDataPoint: imageUrlForDataPoint
  };
})();
