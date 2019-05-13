(function() {
  function animate(cityDataset, predictFunc) {
      var containerEl = document.querySelector('.DeployAnimation');

      // render AI black box
      var el = document.createElement('div');
      el.classList.add('Animation-black-box');
      el.innerHTML = (
        `<div>
          <div class="Animation-black-box-title">Model from 2017 data</div>
          <div class="Animation-black-box-innards"></div>
        </div>
      `);
      containerEl.append(el);

      // feed in applications
      var timings = {
        newEvery: 1200,
        slideRight: 600
      };
      var shuffledDataset = _.shuffle(cityDataset);
      _.range(0, 20).forEach(function(n) {
        var dataPoint = shuffledDataset[n];
        setTimeout(function() {
          var camp = predictFunc(dataPoint);
          var html = renderDataPoint(dataPoint, camp);
          var el = TRAINING_ANIMATION.slideInApplication(containerEl, html, timings);
          
          var pos = {
            music: 350 + (Math.random() * 10) - 5,
            math: 200 + (Math.random() * 10) - 5,
            outdoor: 20 + (Math.random() * 10) - 5,
          }[camp]
          var left = 750 + (Math.random() * 10) - 5;
          Velocity(el, { top: pos, left: left}, {
            begin: function(els) { el.classList.add('DeployedToCamp'); },
            duration: timings.slideRight
          }); // move to camp category
        }, n * timings.newEvery);
    });
  }

  function renderDataPoint(dataPoint, camp) {
      var imageUrl = DATASETS.imageUrlForDataPoint(dataPoint);
      var campImgUrl = {
        music: "play/img/sixteenth_notes.png",
        outdoor: "play/img/campfire.png",
        math: "play/img/math.png"
      }[camp];
      return `<div class="Animation-application">
          <div class="Animation-tiny"><img src="${imageUrl}" /></div>
          <div class="Animation-tiny">math <div class="Animation-gauge"><div style="width: ${dataPoint.math.interest*10}%"></div></div></div>
          <div class="Animation-tiny">music <div class="Animation-gauge"><div style="width: ${dataPoint.music.interest*10}%"></div></div></div>
          <div class="Animation-tiny">outdoors <div class="Animation-gauge"><div style="width: ${dataPoint.outdoors.interest*10}%"></div></div></div>
          <div class="Animation-deployed-to-camp">
            <div>assigned to <img src="${campImgUrl}" width="32" height="32" /></div>
          </div>
        </div>`;
  }

  window.DEPLOY_ANIMATION = {
    animate: animate
  };
})();
