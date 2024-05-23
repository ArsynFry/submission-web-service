const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    const modelUrl = process.env.MODEL_URL;
    const model = await tf.loadGraphModel(modelUrl);
    return model;
}

module.exports = loadModel;
