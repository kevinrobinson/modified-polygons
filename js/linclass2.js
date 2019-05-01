(function() {

  // Create model
  const model = tf.sequential({
    layers: [
      tf.layers.dense({inputShape: [9], units: 10, activation: 'relu'}),
      tf.layers.dense({units: 3, activation: 'softmax'}),
    ]
  });

  model.compile({
    optimizer: 'sgd',
    loss: 'meanSquaredError',
    metrics: ['accuracy']
  });

  // warm-up
  tf.tidy(() => model.predict(tf.zeros([1, 9])));
    
  // Train for 20 epochs with batch size 16
  function onBatchEnd(batch, logs) {
    console.log('Accuracy', batch, logs.acc);
  }

  function onTrainClick(game) {
    // Get data
    // TODO: when train button is clicked, these should be filled entirely (not just
    // one example)
    const trainData = game.historicalDataset;
    const trainX = tf.tensor(window.datasets.toX(trainData));     // Must be shape [num_examples, 9]
    const trainY = tf.tensor(window.datasets.toY(trainData));     // Must be shape [num_examples, 3] (one-hot)

    // Start the animation
    const {onTrainingDone} = TRAINING_ANIMATION.animate(trainData, 1000);

    // Start training after delay, so animation rendering can start
    setTimeout(function() {
      model.fit(trainX, trainY, {
        epochs: 20,
        batchSize: 16,
        callbacks: {onBatchEnd}
      }).then(info => {
        // update game state
        game.training.finalAccuracy = info.history.acc;
        game.training.trainedModel = model;

        // animation UI feedback
        onTrainingDone();
      });
    }, 100);
  }

  // In deployment, make a new prediction
  // TODO: when deployment is clicked, create this dataset and predict
  function predict() {
    const testX = null;  // TODO
    // const testY = null;  // TODO
    const prediction = model.predict(testX);
    prediction.print();
    console.log(prediction);
  }

  function init(game, options = {}) {
    options.trainButtonEl.addEventListener('click', onTrainClick.bind(null, game));
  }

  window.TRAINING = {
    init: init,
    predict: predict
  };
})();