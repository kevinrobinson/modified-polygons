(function() {
  function animate(dataset, delayMs) {
    var containerEl = document.querySelector('.TrainingAnimation');
    containerEl.innerHTML = ''; // clear out training button and instructions

    // render AI black box
    var el = document.createElement('div');
    el.classList.add('Animation-black-box');
    el.innerHTML = (
      `<div>
        <div class="Animation-black-box-title">Model from 2017 data</div>
        <div class="Animation-black-box-done"></div>
        <div class="Animation-black-box-innards">setting up...</div>
      </div>
    `);
    containerEl.append(el);

    // delay start
    setTimeout(startAnimation.bind(null, containerEl, dataset), delayMs);

    return {
      onTrainingDone: onTrainingDone.bind(null, el)
    };
  }

  // TODO: do this when the animation is done
  function onTrainingDone(el) {
    // el.querySelector('.Animation-black-box-done').innerHTML = 'Done training!';
    // el.querySelector('.Animation-black-box-innards').innerHTML = createFakeModelWeights('trained model:');
  }

  function startAnimation(containerEl, dataset) {
    // feed in applications
    var timings = {
      newEvery: 1000,
      fallIn: 400,
      slideRight: 500
    };
    var shuffledDataset = _.shuffle(dataset);
    _.range(0, dataset.length).forEach(function(n) {
      var dataPoint = shuffledDataset[n];
      setTimeout(function() {
        var html = DATASETS.renderApplicationHtml(dataPoint);
        containerEl.querySelector('.Animation-black-box-innards').innerHTML = createFakeModelWeights('adjusting model...'); //only for train
        var el = slideInApplication(containerEl, html, timings);
      }, n * timings.newEvery);
    });

    // instead of figuring out how to wait for sets of chained velocity animations
    var totalDelayMs = (dataset.length * timings.newEvery) + timings.slideRight;
    setTimeout(function() {
      containerEl.querySelector('.Animation-black-box-done').innerHTML = 'Done training!';
      containerEl.querySelector('.Animation-black-box-innards').innerHTML = createFakeModelWeights('trained model:');
    }, totalDelayMs);
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
    }, [timings.fallIn, 25]); //fall into place
    Velocity(el, { left: 450 }, { duration: timings.slideRight }); //move right
    return el;
  }

  function createFakeModelWeights(text) {
    return `${text} [${_.range(0, 8).map(i => Math.random().toFixed(3)).join(' ')}]`;
  }

  window.TRAINING_ANIMATION = {
    slideInApplication: slideInApplication,
    animate: animate
  };
})();
