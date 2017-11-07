
var makeController = require('../utils/makeController');

const viewDir = 'flask';
const actions = [
    {name:'index',hasAction:'',dir:''}

];

module.exports = app => {
    class FlaskController extends app.Controller {}
    makeController.makeActions(FlaskController,viewDir,actions);
    return FlaskController;
};