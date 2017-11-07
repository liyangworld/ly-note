
var makeController = require('../utils/makeController');

const viewDir = 'redis';
const actions = [
    {name:'index',hasAction:'',dir:''}

];

module.exports = app => {
    class RedisController extends app.Controller {}
    makeController.makeActions(RedisController,viewDir,actions);
    return RedisController;
};