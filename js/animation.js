(function() {
  function animate(lastDataset) {
      var containerEl = document.querySelector('.TrainingAnimation');

      // render AI black box
      var el = document.createElement('div');
      el.classList.add('TrainingAnimation-black-box');
      el.innerHTML = (
        `<div>
          <div class="TrainingAnimation-black-box-title">Model from 2017 data</div>
          <div class="TrainingAnimation-black-box-innards"></div>
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
          slideInApplication(containerEl, dataPoint, timings);
        }, n * timings.newEvery);
    });
  }

  function slideInApplication(containerEl, dataPoint, timings) {
      var html = renderDataPoint(dataPoint);
      containerEl.querySelector('.TrainingAnimation-black-box-innards').innerHTML = createFakeModelWeights();

      var el = document.createElement('div');
      el.classList.add('TrainingAnimation-box');
      el.innerHTML = html;
      containerEl.append(el);
      
      // chain
      Velocity(el, {
        left: 40 + Math.random() * 40,
        top: 20 + Math.random() * 80
      }, [400, 25]);
      Velocity(el, { left: 500 }, { duration: timings.slideRight });
      Velocity(el, { height: 0, opacity: 0 }, { duration: timings.fadeOut });
  }

  function renderDataPoint(dataPoint) {
      var imageUrl = datasets.imageUrlForDataPoint(dataPoint);
      return `<div class="TrainingAnimation-application">
          <div class="TrainingAnimation-tiny"><img src="${imageUrl}" /></div>
          <div class="TrainingAnimation-tiny">math: <div class="TrainingAnimation-gauge"><div style="width: ${dataPoint.math.interest*10}%"></div></div>
          <div class="TrainingAnimation-tiny">music: <div class="TrainingAnimation-gauge"><div style="width: ${dataPoint.music.interest*10}%"></div></div>
          <div class="TrainingAnimation-tiny">outdoors: <div class="TrainingAnimation-gauge"><div style="width: ${dataPoint.outdoors.interest*10}%"></div></div>
          <div class="TrainingAnimation-assigned">went to ${dataPoint.assignedCamp}</div>
      </div>`;
  }

  function createFakeModelWeights() {
    return `model weights: [${_.range(0, 10).map(i => Math.random().toFixed(3)).join(' ')}]`;
  }

  window.animation = {
    animate: animate
  };
})();