(function() {
  function animate(cityDataset, predictFunc) {
      console.log(cityDataset);
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
        newEvery: 1500,
        slideRight: 1000,
        fadeOut: 500
      };
      var shuffledDataset = _.shuffle(cityDataset);
      _.range(0, 20).forEach(function(n) {
        var dataPoint = shuffledDataset[n];
        setTimeout(function() {
          var html = renderDataPoint(dataPoint);
          var el = window.Animation.slideInApplication(containerEl, html, timings);
          var camp = predictFunc(dataPoint);
          var pos = {
            music: 400,
            math: 200,
            outdoor: 10
          }[camp]
          Velocity(el, { top: pos, left: 750}, { duration: timings.slideRight }); // move to camp category
        }, n * timings.newEvery);
    });
  }

  function renderDataPoint(dataPoint) {
      var imageUrl = datasets.imageUrlForDataPoint(dataPoint);
      return `<div class="Animation-application">
          <div class="Animation-tiny"><img src="${imageUrl}" /></div>
          <div class="Animation-tiny">math: <div class="Animation-gauge"><div style="width: ${dataPoint.math.interest*10}%"></div></div></div>
          <div class="Animation-tiny">music: <div class="Animation-gauge"><div style="width: ${dataPoint.music.interest*10}%"></div></div></div>
          <div class="Animation-tiny">outdoors: <div class="Animation-gauge"><div style="width: ${dataPoint.outdoors.interest*10}%"></div></div></div>
      </div>`;
  }

  window.DeployAnimation = {
    animate: animate
  };
})();
