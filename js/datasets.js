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

  // These are sampled from generated sets as ones that might
  // make for interesting conversations.
  var exampleDatasets = {
    one: [{"id":"1","color":"pink","name":"Carson","shape":"triangle","feeling":"sad","assignedCamp":"outdoor","music":{"interest":0,"experience":9},"math":{"interest":6,"experience":10},"outdoors":{"interest":5,"experience":9}},{"id":"2","color":"yellow","name":"Isabella","shape":"triangle","feeling":"yay","assignedCamp":"math","music":{"interest":3,"experience":1},"math":{"interest":3,"experience":3},"outdoors":{"interest":8,"experience":7}},{"id":"3","color":"yellow","name":"Hailey","shape":"square","feeling":"meh","assignedCamp":"math","music":{"interest":4,"experience":6},"math":{"interest":10,"experience":10},"outdoors":{"interest":7,"experience":6}},{"id":"4","color":"blue","name":"Adam","shape":"square","feeling":"yay","assignedCamp":"outdoor","music":{"interest":1,"experience":3},"math":{"interest":10,"experience":1},"outdoors":{"interest":4,"experience":7}},{"id":"5","color":"yellow","name":"Gavin","shape":"square","feeling":"yay","assignedCamp":"music","music":{"interest":2,"experience":10},"math":{"interest":6,"experience":10},"outdoors":{"interest":6,"experience":2}},{"id":"6","color":"yellow","name":"Owen","shape":"triangle","feeling":"yay","assignedCamp":"music","music":{"interest":6,"experience":5},"math":{"interest":10,"experience":10},"outdoors":{"interest":3,"experience":10}},{"id":"7","color":"yellow","name":"Alexander","shape":"square","feeling":"yay","assignedCamp":"outdoor","music":{"interest":0,"experience":9},"math":{"interest":9,"experience":7},"outdoors":{"interest":5,"experience":1}},{"id":"8","color":"yellow","name":"Jaxson","shape":"square","feeling":"meh","assignedCamp":"outdoor","music":{"interest":3,"experience":0},"math":{"interest":10,"experience":4},"outdoors":{"interest":6,"experience":2}},{"id":"9","color":"pink","name":"Andrew","shape":"triangle","feeling":"meh","assignedCamp":"music","music":{"interest":10,"experience":5},"math":{"interest":6,"experience":2},"outdoors":{"interest":10,"experience":5}},{"id":"10","color":"pink","name":"Kayden","shape":"triangle","feeling":"sad","assignedCamp":"music","music":{"interest":4,"experience":0},"math":{"interest":4,"experience":10},"outdoors":{"interest":7,"experience":1}},{"id":"11","color":"liblue","name":"Madison","shape":"square","feeling":"yay","assignedCamp":"outdoor","music":{"interest":4,"experience":3},"math":{"interest":8,"experience":0},"outdoors":{"interest":1,"experience":1}},{"id":"12","color":"green","name":"Sawyer","shape":"triangle","feeling":"sad","assignedCamp":"music","music":{"interest":1,"experience":3},"math":{"interest":1,"experience":10},"outdoors":{"interest":2,"experience":3}},{"id":"13","color":"blue","name":"Nicholas","shape":"triangle","feeling":"meh","assignedCamp":"outdoor","music":{"interest":5,"experience":0},"math":{"interest":8,"experience":8},"outdoors":{"interest":1,"experience":5}},{"id":"14","color":"yellow","name":"Xavier","shape":"triangle","feeling":"yay","assignedCamp":"outdoor","music":{"interest":10,"experience":6},"math":{"interest":6,"experience":10},"outdoors":{"interest":5,"experience":7}},{"id":"15","color":"pink","name":"Cameron","shape":"triangle","feeling":"meh","assignedCamp":"music","music":{"interest":5,"experience":0},"math":{"interest":8,"experience":2},"outdoors":{"interest":3,"experience":5}},{"id":"16","color":"pink","name":"Carter","shape":"square","feeling":"sad","assignedCamp":"music","music":{"interest":4,"experience":10},"math":{"interest":9,"experience":4},"outdoors":{"interest":8,"experience":5}},{"id":"17","color":"pink","name":"Thomas","shape":"triangle","feeling":"yay","assignedCamp":"music","music":{"interest":6,"experience":0},"math":{"interest":6,"experience":10},"outdoors":{"interest":4,"experience":1}},{"id":"18","color":"green","name":"Eleanor","shape":"triangle","feeling":"sad","assignedCamp":"math","music":{"interest":5,"experience":8},"math":{"interest":2,"experience":0},"outdoors":{"interest":1,"experience":5}},{"id":"19","color":"yellow","name":"Gabriella","shape":"square","feeling":"sad","assignedCamp":"music","music":{"interest":0,"experience":6},"math":{"interest":1,"experience":3},"outdoors":{"interest":0,"experience":5}},{"id":"20","color":"blue","name":"Camila","shape":"triangle","feeling":"meh","assignedCamp":"music","music":{"interest":9,"experience":4},"math":{"interest":10,"experience":10},"outdoors":{"interest":5,"experience":3}}]
  };


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
      return [
        colors.indexOf(dataPoint.color),
        shapes.indexOf(dataPoint.shape),
        feelings.indexOf(dataPoint.feeling),
        dataPoint.music.interest,
        dataPoint.music.experience,
        dataPoint.math.interest,
        dataPoint.math.experience,
        dataPoint.outdoors.interest,
        dataPoint.outdoors.experience
      ];
      // return colors.indexOf(dataPoint.color);
    });
  }

  function oneHot(labelIndex, classLength) {
    return tf.tidy(() => tf.oneHot(tf.tensor1d([labelIndex]).toInt(), classLength));
  }

  function toY(dataset) {
    return dataset.map(function(dataPoint) {
      return tf.oneHot(camps.indexOf(dataPoint.assignedCamp), 3).arraySync()
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
    // var dataset = create();
    var dataset = exampleDatasets.one;

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
    onClick(el);
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
