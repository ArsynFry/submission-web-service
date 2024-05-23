const predictClassification = require('../services/inferenceService');
const crypto = require('crypto');
const { storeData, fetchAllData } = require('../services/storeData');

async function postPredictHandler(request, h) {
    const { image } = request.payload;
    const { model } = request.server.app;

    const { label, suggestion } = await predictClassification(model, image);
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const data = {
        id,
        result: label,
        suggestion,
        createdAt,
    };

    await storeData(id, data);
    const response = h.response({
        status: 'success',
        message: 'Model is predicted successfully',
        data,
    });
    response.code(201);
    return response;
}

async function getPredictionHistoriesHandler(request, h) {
    const histories = await fetchAllData();
    return {
        status: 'success',
        data: histories,
    };
}

module.exports = { postPredictHandler, getPredictionHistoriesHandler };
