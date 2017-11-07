
var makeController = require('../utils/makeController');

const viewDir = 'mongodb';
const actions = [
    {name:'index',hasAction:'',dir:''}

];

module.exports = app => {
    class MongodbController extends app.Controller {}
    makeController.makeActions(MongodbController,viewDir,actions);
    return MongodbController;
};