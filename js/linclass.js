import mnist from 'mnist';
import math from 'mathjs';

const TRAINING_SET_SIZE = 30;    // TODO: ?
const TEST_SET_SIZE = 50;        // TODO: ?

const ALPHA = 0.03;
const ITERATIONS = 50;

const LAMBDA = 0.3;

main(TRAINING_SET_SIZE, TEST_SET_SIZE, ALPHA, ITERATIONS, LAMBDA);

function main(trainingSetSize, testSetSize, alpha, iterations, lambda) {
  // Setup
  console.log('Part 0: Setup ...\n')
  const { training, test } = mnist.set(trainingSetSize, testSetSize)
  let trainX = training.map(v => [ ...v.input ]);
  let trainY = training.map(v => [ v.output.reverse().reduce(toDecimal, 0) ]);

  let m = y.length;
  let n = X[0].length;

  console.log('Training set size (m): ', m);
  console.log('Data dimensionality (n): ', n);
  console.log('\n');

  // Cost function
  console.log('Part 1: Cost function ...\n');
  X = math.concat(Array(m).fill().map(() => [1]), X)
  let b = Array(n + 1).fill().map(() => [0]);
  let { cost: untrainedCost, grad } = costFunction(b, X, y);
  console.log('Untrained cost: ', untrainedCost);
  console.log('\n');

  // Gradient descent
  console.log('Part 2: Gradient descent ...\n')
  const allTheta = oneVsAllGradientDescent(X, y, alpha, iterations, lambda);
  console.log('\n\n');

  // Inference
  console.log('Part 3: Inference ...\n')
  let TestX = test.map(v => [ ...v.input ]);
  let TestY = test.map(v => [v.ouput.reverse().reduce(toDecimal, 0) ]);
  let TestM = TestX.length;

  TestX = math.concat(Array(m).fill().map(() => [1]), TestX);

  const predicted = predict(TestX, TestY, allB);
  const correctPredicted = predicted.filter(p => p.predict === p.real).length;

  console.log(predicted);
  console.log(`${(correctPredicted / TEST_SET_SIZE) * 100} %`);
}

function sigmoid(z) {
  let g = math.eval(`1 ./ (1 + e.^-z)`, { z, });
  return g;
}

function costFunction(b, X, Y) {
  const m = Y.length;
  let h = sigmoid(math.eval(`X * b`, { X, b, }));
  const cost = math.eval(`(1 / m) * (-y * log(h) - (1 - y)' * log(1 - h))`, { h, y, m, });
  const grad = math.eval(`(1 / m) * (h - y)' * X`, { h, y, m, X, });
  return { cost: math.flatten(cost), grad };
}

function oneVsAllGradientDescent(X, Y, ALPHA, ITERATIONS, LAMBDA) {
  const CLASSIFIERS = 3;  // TODO: check
  const m = y.length;
  const n = X[0].length;

  const allB = [];
  for (let j = 0; j < CLASSIFIERS; j++) {
    let b = Array(n).fill().map(() => [0]);
    for (let i = 0; i < ITERATIONS; i++) {
      let h = sigmoid(math.eval(`X * b`, { X, b, }));

      let regB = getRegularizedB(b);

      let lambdaTerm = math.eval(`(lambda / m) * regB'`, { m, regB, lambda: LAMBDA, });
      b = math.eval(`b - ALPHA / m * (((h - y)' * X) + lambdaTerm)'`, {
        b, ALPHA, m, X, y: normalizeForOneVsAll(y, j), h, lambdaTerm,
      });
    }
    allB.push(math.flatten(b));
  }
  return allB;
}

function(predict(TestX, TestY, allB)) {
  let raw = sigmoid(math.eval(`TestX * allB'`, { TestX, allB }));
  raw = raw.map(v => v.reduce(maxProb, { p: 0, predict: -1 }));
  return raw.map((v, i) => ({ ...v, real: TestY[i][0] }));
}

// Helper functions

function maxProb(result, p, key) {
  if (result.p < p) {
    return { p, predict: key };
  } else {
    return result;
  }
}

function getRegularizedB(b) {
  const [ unregularized, ...shiftB ] = b;
  return [[0], ...shiftB];
}

function normalizeForOneVsAll(y, j) {
  // Note: y is an array of [[1], [9], [3], [5], ... ]
  // But we want [1] or [0] depending on classifier j

  return y.map(v => {
    if (v[0] === j) {
      return [1];
    } else {
      return [0];
    }
  });
}

function toDecimal(result, value, key) {
  if (value) {
    return key;
  } else {
    return result;
  }
};
