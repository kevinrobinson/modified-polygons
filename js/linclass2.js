

// Create model
const model = tf.sequential({
  layers: [
    tf.layers.dense({inputShape: [9], units: 10, activation: 'relu'}),
    tf.layers.dense({units: 10, activation: 'relu'}),
    tf.layers.dense({units: 3, activation: 'softmax'}),
  ]
});

model.compile({
  optimizer: 'sgd',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy']
});

// Train for 20 epochs with batch size 16
function onBatchEnd(batch, logs) {
  console.log('Accuracy', logs.acc);
}

function train() {
  // Get data
  // TODO: when train button is clicked, these should be filled entirely (not just
  // one example)
  // const trainData = window.lastDataset
  const trainX = tf.tensor(window.lastX)     // Must be shape [num_examples, 9]
  const trainY = tf.tensor(window.lastY)     // Must be shape [num_examples, 3] (one-hot)
  console.log(trainX)
  console.log(trainY)

  model.fit(trainX, trainY, {
    epochs: 50,
    batchSize: 16,
    callbacks: {onBatchEnd}
  }).then(info => {
    console.log('Final accuracy', info.history.acc);
  });
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
