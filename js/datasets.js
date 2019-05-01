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
  //
  // to log a new dataset:
  //
  // var d = create();
  // d.forEach(function(i) { delete i.assignedCamp; });
  // console.log(JSON.stringify(d));
  var exampleDatasets = {
    historicalOne: [{"id":"1","color":"pink","name":"Carson","shape":"triangle","feeling":"sad","assignedCamp":"outdoor","music":{"interest":0,"experience":9},"math":{"interest":6,"experience":10},"outdoors":{"interest":5,"experience":9}},{"id":"2","color":"yellow","name":"Isabella","shape":"triangle","feeling":"yay","assignedCamp":"math","music":{"interest":3,"experience":1},"math":{"interest":3,"experience":3},"outdoors":{"interest":8,"experience":7}},{"id":"3","color":"yellow","name":"Hailey","shape":"square","feeling":"meh","assignedCamp":"math","music":{"interest":4,"experience":6},"math":{"interest":10,"experience":10},"outdoors":{"interest":7,"experience":6}},{"id":"4","color":"blue","name":"Adam","shape":"square","feeling":"yay","assignedCamp":"outdoor","music":{"interest":1,"experience":3},"math":{"interest":10,"experience":1},"outdoors":{"interest":4,"experience":7}},{"id":"5","color":"yellow","name":"Gavin","shape":"square","feeling":"yay","assignedCamp":"music","music":{"interest":2,"experience":10},"math":{"interest":6,"experience":10},"outdoors":{"interest":6,"experience":2}},{"id":"6","color":"yellow","name":"Owen","shape":"triangle","feeling":"yay","assignedCamp":"music","music":{"interest":6,"experience":5},"math":{"interest":10,"experience":10},"outdoors":{"interest":3,"experience":10}},{"id":"7","color":"yellow","name":"Alexander","shape":"square","feeling":"yay","assignedCamp":"outdoor","music":{"interest":0,"experience":9},"math":{"interest":9,"experience":7},"outdoors":{"interest":5,"experience":1}},{"id":"8","color":"yellow","name":"Jaxson","shape":"square","feeling":"meh","assignedCamp":"outdoor","music":{"interest":3,"experience":0},"math":{"interest":10,"experience":4},"outdoors":{"interest":6,"experience":2}},{"id":"9","color":"pink","name":"Andrew","shape":"triangle","feeling":"meh","assignedCamp":"music","music":{"interest":10,"experience":5},"math":{"interest":6,"experience":2},"outdoors":{"interest":10,"experience":5}},{"id":"10","color":"pink","name":"Kayden","shape":"triangle","feeling":"sad","assignedCamp":"music","music":{"interest":4,"experience":0},"math":{"interest":4,"experience":10},"outdoors":{"interest":7,"experience":1}},{"id":"11","color":"liblue","name":"Madison","shape":"square","feeling":"yay","assignedCamp":"outdoor","music":{"interest":4,"experience":3},"math":{"interest":8,"experience":0},"outdoors":{"interest":1,"experience":1}},{"id":"12","color":"green","name":"Sawyer","shape":"triangle","feeling":"sad","assignedCamp":"music","music":{"interest":1,"experience":3},"math":{"interest":1,"experience":10},"outdoors":{"interest":2,"experience":3}},{"id":"13","color":"blue","name":"Nicholas","shape":"triangle","feeling":"meh","assignedCamp":"outdoor","music":{"interest":5,"experience":0},"math":{"interest":8,"experience":8},"outdoors":{"interest":1,"experience":5}},{"id":"14","color":"yellow","name":"Xavier","shape":"triangle","feeling":"yay","assignedCamp":"outdoor","music":{"interest":10,"experience":6},"math":{"interest":6,"experience":10},"outdoors":{"interest":5,"experience":7}},{"id":"15","color":"pink","name":"Cameron","shape":"triangle","feeling":"meh","assignedCamp":"music","music":{"interest":5,"experience":0},"math":{"interest":8,"experience":2},"outdoors":{"interest":3,"experience":5}},{"id":"16","color":"pink","name":"Carter","shape":"square","feeling":"sad","assignedCamp":"music","music":{"interest":4,"experience":10},"math":{"interest":9,"experience":4},"outdoors":{"interest":8,"experience":5}},{"id":"17","color":"pink","name":"Thomas","shape":"triangle","feeling":"yay","assignedCamp":"music","music":{"interest":6,"experience":0},"math":{"interest":6,"experience":10},"outdoors":{"interest":4,"experience":1}},{"id":"18","color":"green","name":"Eleanor","shape":"triangle","feeling":"sad","assignedCamp":"math","music":{"interest":5,"experience":8},"math":{"interest":2,"experience":0},"outdoors":{"interest":1,"experience":5}},{"id":"19","color":"yellow","name":"Gabriella","shape":"square","feeling":"sad","assignedCamp":"music","music":{"interest":0,"experience":6},"math":{"interest":1,"experience":3},"outdoors":{"interest":0,"experience":5}},{"id":"20","color":"blue","name":"Camila","shape":"triangle","feeling":"meh","assignedCamp":"music","music":{"interest":9,"experience":4},"math":{"interest":10,"experience":10},"outdoors":{"interest":5,"experience":3}}],
    unassignedCityOne: [{"id":"1","color":"liblue","name":"Anthony","shape":"triangle","feeling":"yay","music":{"interest":7,"experience":1},"math":{"interest":0,"experience":8},"outdoors":{"interest":1,"experience":1}},{"id":"2","color":"liblue","name":"Christopher","shape":"triangle","feeling":"yay","music":{"interest":8,"experience":4},"math":{"interest":4,"experience":0},"outdoors":{"interest":7,"experience":10}},{"id":"3","color":"blue","name":"Andrew","shape":"triangle","feeling":"sad","music":{"interest":10,"experience":4},"math":{"interest":5,"experience":2},"outdoors":{"interest":7,"experience":3}},{"id":"4","color":"liblue","name":"Leonardo","shape":"triangle","feeling":"meh","music":{"interest":9,"experience":9},"math":{"interest":5,"experience":4},"outdoors":{"interest":10,"experience":3}},{"id":"5","color":"liblue","name":"Natalie","shape":"triangle","feeling":"meh","music":{"interest":5,"experience":10},"math":{"interest":10,"experience":7},"outdoors":{"interest":3,"experience":8}},{"id":"6","color":"liblue","name":"Ezra","shape":"triangle","feeling":"sad","music":{"interest":2,"experience":0},"math":{"interest":0,"experience":4},"outdoors":{"interest":4,"experience":3}},{"id":"7","color":"liblue","name":"Henry","shape":"triangle","feeling":"sad","music":{"interest":6,"experience":6},"math":{"interest":9,"experience":3},"outdoors":{"interest":7,"experience":9}},{"id":"8","color":"green","name":"Cameron","shape":"triangle","feeling":"meh","music":{"interest":5,"experience":6},"math":{"interest":0,"experience":4},"outdoors":{"interest":6,"experience":7}},{"id":"9","color":"pink","name":"Chloe","shape":"square","feeling":"meh","music":{"interest":2,"experience":0},"math":{"interest":1,"experience":1},"outdoors":{"interest":7,"experience":1}},{"id":"10","color":"liblue","name":"Ezra","shape":"triangle","feeling":"meh","music":{"interest":7,"experience":7},"math":{"interest":8,"experience":4},"outdoors":{"interest":4,"experience":10}},{"id":"11","color":"yellow","name":"Nolan","shape":"triangle","feeling":"yay","music":{"interest":1,"experience":6},"math":{"interest":2,"experience":7},"outdoors":{"interest":6,"experience":1}},{"id":"12","color":"green","name":"Lucy","shape":"square","feeling":"yay","music":{"interest":10,"experience":3},"math":{"interest":5,"experience":2},"outdoors":{"interest":7,"experience":5}},{"id":"13","color":"green","name":"Paisley","shape":"square","feeling":"yay","music":{"interest":10,"experience":6},"math":{"interest":1,"experience":7},"outdoors":{"interest":5,"experience":1}},{"id":"14","color":"pink","name":"William","shape":"triangle","feeling":"meh","music":{"interest":3,"experience":4},"math":{"interest":6,"experience":3},"outdoors":{"interest":7,"experience":0}},{"id":"15","color":"yellow","name":"Lincoln","shape":"triangle","feeling":"meh","music":{"interest":4,"experience":5},"math":{"interest":9,"experience":1},"outdoors":{"interest":3,"experience":9}},{"id":"16","color":"yellow","name":"Owen","shape":"triangle","feeling":"yay","music":{"interest":8,"experience":2},"math":{"interest":0,"experience":1},"outdoors":{"interest":6,"experience":2}},{"id":"17","color":"pink","name":"Owen","shape":"triangle","feeling":"sad","music":{"interest":3,"experience":3},"math":{"interest":1,"experience":10},"outdoors":{"interest":0,"experience":3}},{"id":"18","color":"liblue","name":"Mason","shape":"square","feeling":"sad","music":{"interest":8,"experience":8},"math":{"interest":4,"experience":3},"outdoors":{"interest":3,"experience":9}},{"id":"19","color":"green","name":"Samantha","shape":"square","feeling":"sad","music":{"interest":10,"experience":0},"math":{"interest":4,"experience":4},"outdoors":{"interest":4,"experience":8}},{"id":"20","color":"yellow","name":"Henry","shape":"square","feeling":"yay","music":{"interest":7,"experience":3},"math":{"interest":10,"experience":3},"outdoors":{"interest":8,"experience":4}}],
    unassignedCityTwo: [{"id":"1","color":"pink","name":"Ezekiel","shape":"triangle","feeling":"meh","music":{"interest":8,"experience":4},"math":{"interest":10,"experience":3},"outdoors":{"interest":3,"experience":10}},{"id":"2","color":"yellow","name":"Jonathan","shape":"triangle","feeling":"meh","music":{"interest":0,"experience":3},"math":{"interest":4,"experience":5},"outdoors":{"interest":4,"experience":5}},{"id":"3","color":"green","name":"Piper","shape":"square","feeling":"meh","music":{"interest":9,"experience":6},"math":{"interest":0,"experience":10},"outdoors":{"interest":7,"experience":8}},{"id":"4","color":"blue","name":"Jacob","shape":"triangle","feeling":"sad","music":{"interest":4,"experience":8},"math":{"interest":1,"experience":0},"outdoors":{"interest":1,"experience":6}},{"id":"5","color":"blue","name":"Ruby","shape":"triangle","feeling":"sad","music":{"interest":2,"experience":1},"math":{"interest":3,"experience":3},"outdoors":{"interest":5,"experience":0}},{"id":"6","color":"pink","name":"Sarah","shape":"triangle","feeling":"sad","music":{"interest":5,"experience":3},"math":{"interest":5,"experience":3},"outdoors":{"interest":4,"experience":3}},{"id":"7","color":"blue","name":"Jace","shape":"square","feeling":"meh","music":{"interest":1,"experience":5},"math":{"interest":9,"experience":4},"outdoors":{"interest":7,"experience":0}},{"id":"8","color":"green","name":"Greyson","shape":"triangle","feeling":"meh","music":{"interest":5,"experience":6},"math":{"interest":1,"experience":5},"outdoors":{"interest":5,"experience":8}},{"id":"9","color":"pink","name":"Claire","shape":"square","feeling":"meh","music":{"interest":3,"experience":8},"math":{"interest":1,"experience":8},"outdoors":{"interest":9,"experience":10}},{"id":"10","color":"blue","name":"Autumn","shape":"triangle","feeling":"meh","music":{"interest":0,"experience":1},"math":{"interest":3,"experience":5},"outdoors":{"interest":2,"experience":0}},{"id":"11","color":"yellow","name":"Landon","shape":"square","feeling":"meh","music":{"interest":5,"experience":3},"math":{"interest":8,"experience":10},"outdoors":{"interest":3,"experience":9}},{"id":"12","color":"blue","name":"Camila","shape":"triangle","feeling":"yay","music":{"interest":8,"experience":3},"math":{"interest":6,"experience":0},"outdoors":{"interest":4,"experience":1}},{"id":"13","color":"yellow","name":"Charles","shape":"square","feeling":"yay","music":{"interest":3,"experience":7},"math":{"interest":7,"experience":5},"outdoors":{"interest":9,"experience":4}},{"id":"14","color":"yellow","name":"Camila","shape":"triangle","feeling":"sad","music":{"interest":3,"experience":1},"math":{"interest":8,"experience":4},"outdoors":{"interest":10,"experience":2}},{"id":"15","color":"green","name":"Aaliyah","shape":"square","feeling":"yay","music":{"interest":5,"experience":0},"math":{"interest":8,"experience":1},"outdoors":{"interest":9,"experience":9}},{"id":"16","color":"yellow","name":"Ava","shape":"square","feeling":"sad","music":{"interest":9,"experience":6},"math":{"interest":9,"experience":8},"outdoors":{"interest":9,"experience":10}},{"id":"17","color":"liblue","name":"Alexa","shape":"triangle","feeling":"sad","music":{"interest":6,"experience":9},"math":{"interest":10,"experience":9},"outdoors":{"interest":0,"experience":1}},{"id":"18","color":"blue","name":"Adrian","shape":"triangle","feeling":"meh","music":{"interest":9,"experience":6},"math":{"interest":1,"experience":1},"outdoors":{"interest":9,"experience":10}},{"id":"19","color":"yellow","name":"Penelope","shape":"square","feeling":"meh","music":{"interest":8,"experience":5},"math":{"interest":9,"experience":4},"outdoors":{"interest":2,"experience":8}},{"id":"20","color":"yellow","name":"Hannah","shape":"triangle","feeling":"yay","music":{"interest":2,"experience":9},"math":{"interest":5,"experience":0},"outdoors":{"interest":7,"experience":1}}],
    unassignedCityThree: [{"id":"1","color":"liblue","name":"Violet","shape":"square","feeling":"sad","music":{"interest":6,"experience":9},"math":{"interest":3,"experience":10},"outdoors":{"interest":7,"experience":0}},{"id":"2","color":"blue","name":"Lily","shape":"square","feeling":"sad","music":{"interest":5,"experience":8},"math":{"interest":0,"experience":8},"outdoors":{"interest":6,"experience":10}},{"id":"3","color":"blue","name":"Madelyn","shape":"triangle","feeling":"meh","music":{"interest":6,"experience":3},"math":{"interest":1,"experience":10},"outdoors":{"interest":10,"experience":10}},{"id":"4","color":"yellow","name":"Ayden","shape":"square","feeling":"meh","music":{"interest":10,"experience":6},"math":{"interest":2,"experience":3},"outdoors":{"interest":6,"experience":8}},{"id":"5","color":"blue","name":"Madelyn","shape":"square","feeling":"sad","music":{"interest":4,"experience":6},"math":{"interest":9,"experience":3},"outdoors":{"interest":7,"experience":9}},{"id":"6","color":"yellow","name":"Piper","shape":"square","feeling":"meh","music":{"interest":9,"experience":5},"math":{"interest":2,"experience":9},"outdoors":{"interest":9,"experience":3}},{"id":"7","color":"liblue","name":"Julian","shape":"triangle","feeling":"sad","music":{"interest":7,"experience":6},"math":{"interest":4,"experience":5},"outdoors":{"interest":8,"experience":5}},{"id":"8","color":"yellow","name":"Theodore","shape":"square","feeling":"meh","music":{"interest":0,"experience":3},"math":{"interest":3,"experience":10},"outdoors":{"interest":0,"experience":5}},{"id":"9","color":"liblue","name":"Camila","shape":"triangle","feeling":"sad","music":{"interest":4,"experience":0},"math":{"interest":2,"experience":8},"outdoors":{"interest":1,"experience":2}},{"id":"10","color":"green","name":"Alice","shape":"square","feeling":"yay","music":{"interest":1,"experience":6},"math":{"interest":2,"experience":5},"outdoors":{"interest":9,"experience":9}},{"id":"11","color":"green","name":"Henry","shape":"square","feeling":"sad","music":{"interest":4,"experience":10},"math":{"interest":2,"experience":7},"outdoors":{"interest":2,"experience":8}},{"id":"12","color":"pink","name":"Harper","shape":"triangle","feeling":"sad","music":{"interest":6,"experience":6},"math":{"interest":4,"experience":5},"outdoors":{"interest":8,"experience":4}},{"id":"13","color":"yellow","name":"Serenity","shape":"square","feeling":"sad","music":{"interest":1,"experience":6},"math":{"interest":3,"experience":1},"outdoors":{"interest":3,"experience":9}},{"id":"14","color":"blue","name":"Elena","shape":"square","feeling":"meh","music":{"interest":6,"experience":2},"math":{"interest":6,"experience":4},"outdoors":{"interest":4,"experience":8}},{"id":"15","color":"liblue","name":"Ayden","shape":"triangle","feeling":"sad","music":{"interest":4,"experience":0},"math":{"interest":7,"experience":1},"outdoors":{"interest":4,"experience":5}},{"id":"16","color":"pink","name":"Hunter","shape":"triangle","feeling":"yay","music":{"interest":9,"experience":0},"math":{"interest":6,"experience":0},"outdoors":{"interest":6,"experience":2}},{"id":"17","color":"liblue","name":"Olivia","shape":"triangle","feeling":"yay","music":{"interest":9,"experience":2},"math":{"interest":2,"experience":1},"outdoors":{"interest":1,"experience":10}},{"id":"18","color":"blue","name":"Layla","shape":"triangle","feeling":"yay","music":{"interest":10,"experience":0},"math":{"interest":8,"experience":8},"outdoors":{"interest":4,"experience":4}},{"id":"19","color":"pink","name":"Bryson","shape":"square","feeling":"sad","music":{"interest":8,"experience":5},"math":{"interest":0,"experience":10},"outdoors":{"interest":2,"experience":0}},{"id":"20","color":"yellow","name":"Aria","shape":"triangle","feeling":"sad","music":{"interest":4,"experience":1},"math":{"interest":4,"experience":4},"outdoors":{"interest":5,"experience":1}}]
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
    });
  }

  function oneHot(labelIndex, classLength) {
    return tf.tidy(() => tf.oneHot(tf.tensor1d([labelIndex]).toInt(), classLength));
  }

  function toY(dataset) {
    return dataset.map(function(dataPoint) {
      var labelIndex = camps.indexOf(dataPoint.assignedCamp);
      var indexTensor = tf.tensor1d([labelIndex], 'int32')
      return tf.oneHot(indexTensor, 3).arraySync()[0];
    });
  }

  // an application, completed or not
  function renderApplicationHtml(dataPoint, options = {}) {
    var imageUrl = imageUrlForDataPoint(dataPoint);
    var assignedCampHtml = (dataPoint.assignedCamp)
      ? `<div class="Animation-assigned">went to ${dataPoint.assignedCamp}</div>`
      : '';
    return `<div class="Animation-application ${options.className || ''}">
      <div class="Animation-tiny"><img src="${imageUrl}" /></div>
      <div class="Animation-tiny">math: <div class="Animation-gauge"><div style="width: ${dataPoint.math.interest*10}%"></div></div></div>
      <div class="Animation-tiny">music: <div class="Animation-gauge"><div style="width: ${dataPoint.music.interest*10}%"></div></div></div>
      <div class="Animation-tiny">outdoors: <div class="Animation-gauge"><div style="width: ${dataPoint.outdoors.interest*10}%"></div></div></div>
      ${assignedCampHtml}
    </div>`;
  }

  // a friendly shape!
  function renderMeetShapeHtml(dataPoint) {
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

  // initial render
  function init(game, options) {
    var dataset = game.historicalDataset;
    var previewEl = options.historicalEl.querySelector('.HistoricalApplications-preview');
    var html = `<div class="HistoricalApplications-container">
      ${dataset.map(function(dataPoint) {
        return renderApplicationHtml(dataPoint, { className: 'Application-stack'});
      }).join('')}
    </div>`;
    previewEl.innerHTML = html;
  };

  window.DATASETS = {
    init: init,
    create: create,
    exampleDatasets: exampleDatasets,
    toX: toX,
    toY: toY,
    constants: {
      colors: colors,
      shapes: shapes,
      feelings: feelings,
      camps: camps
    },
    imageUrlForDataPoint: imageUrlForDataPoint,
    renderApplicationHtml: renderApplicationHtml,
    renderMeetShapeHtml: renderMeetShapeHtml
  };
})();
