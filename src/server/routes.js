const { postPredictHandler, getPredictionHistoriesHandler } = require('./handler');

const routes = [
    {
        path: '/predict',
        method: 'POST',
        handler: postPredictHandler,
        options: {
            payload: {
                maxBytes: 1000000, // 1MB
                allow: 'multipart/form-data',
                multipart: true,
            },
        },
    },
    {
        path: '/predict/histories',
        method: 'GET',
        handler: getPredictionHistoriesHandler,
    },
];

module.exports = routes;
