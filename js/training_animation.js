(function() {
  function animate(lastDataset) {
      var containerEl = document.querySelector('.Animation');

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
      var shuffledDataset = _.shuffle(lastDataset);
      _.range(0, 20).forEach(function(n) {
        var dataPoint = shuffledDataset[n];
        setTimeout(function() {
          var html = renderDataPoint(dataPoint);
          containerEl.querySelector('.Animation-black-box-innards').innerHTML = createFakeModelWeights(); //only for train
          var el = slideInApplication(containerEl, html, timings);
          Velocity(el, { height: 0, opacity: 0 }, { duration: timings.fadeOut }); //fade out after train
        }, n * timings.newEvery);
    });
  }

  function slideInApplication(containerEl, html, timings) {
      var el = document.createElement('div');
      el.classList.add('Animation-box');
      el.innerHTML = html;
      containerEl.append(el);

      // chain
      Velocity(el, {
        left: 40 + Math.random() * 40,
        top: 70 + Math.random() * 80
      }, [400, 25]); //fall into place
      Velocity(el, { left: 450 }, { duration: timings.slideRight }); //move right
      return el;
  }

  function renderDataPoint(dataPoint) {
      var imageUrl = datasets.imageUrlForDataPoint(dataPoint);
      return `<div class="Animation-application">
          <div class="Animation-tiny"><img src="${imageUrl}" /></div>
          <div class="Animation-tiny">math: <div class="Animation-gauge"><div style="width: ${dataPoint.math.interest*10}%"></div></div></div>
          <div class="Animation-tiny">music: <div class="Animation-gauge"><div style="width: ${dataPoint.music.interest*10}%"></div></div></div>
          <div class="Animation-tiny">outdoors: <div class="Animation-gauge"><div style="width: ${dataPoint.outdoors.interest*10}%"></div></div></div>
          <div class="Animation-assigned">went to ${dataPoint.assignedCamp}</div>
      </div>`;
  }

  function createFakeModelWeights() {
    return `adjusting model... [${_.range(0, 8).map(i => Math.random().toFixed(3)).join(' ')}]`;
  }

  window.Animation = {
    slideInApplication: slideInApplication,
    animate: animate
  };
})();
