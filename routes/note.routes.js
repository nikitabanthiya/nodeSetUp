module.exports = (app) => {
    const data = require('../controllers/data.js');
    // Create a new Note
    app.post('/data', data.postData);
    app.get('/data', data.getData);
    app.delete('/data/:Id', data.deleteData);
}
