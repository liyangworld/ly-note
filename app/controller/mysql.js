
var makeController = require('../utils/makeController');

const viewDir = 'mysql';
const actions = [
    {name:'index',hasAction:'',dir:''},
    {name:'quickstart',hasAction:'quickstart',dir:'summary'}


];

module.exports = app => {
    class MysqlController extends app.Controller {}
    makeController.makeActions(MysqlController,viewDir,actions);
    return MysqlController;
};